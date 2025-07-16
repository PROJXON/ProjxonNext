<?php

/**
 * Plugin Name: Projxon Custom API
 * Description: Adds a REST API for fetching and managing client testimonials.
 * Version: 1.1
 * Author: Your Name
 */

add_action('rest_api_init', function () {

    // GET Clients
    register_rest_route('projxon/v1', '/clients', array(
        'methods' => 'GET',
        'callback' => 'get_projxon_clients',
        'permission_callback' => '__return_true', // Publicly accessible
    ));

    // POST Client (Add new client)
    register_rest_route('projxon/v1', '/clients', array(
        'methods' => 'POST',
        'callback' => 'add_projxon_client',
        'permission_callback' => function () {
            return current_user_can('delete_posts');
        },
    ));

    // DELETE Client
    register_rest_route('projxon/v1', '/clients/(?P<id>\d+)', array(
        'methods' => 'DELETE',
        'callback' => 'delete_projxon_client',
        'permission_callback' => function () {
            return current_user_can('delete_posts');
        },
        'args' => array(
            'id' => array(
                'validate_callback' => function ($param, $request, $key) {
                    return is_numeric($param);
                }
            ),
        ),
    ));

});

function get_projxon_clients() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'clients'; 
    $results = $wpdb->get_results("SELECT * FROM $table_name");

    return rest_ensure_response($results);
}

function add_projxon_client($request) {
    global $wpdb;
    $table_name = $wpdb->prefix . 'clients';

    // Include necessary WordPress files for media handling
    require_once(ABSPATH . 'wp-admin/includes/image.php');
    require_once(ABSPATH . 'wp-admin/includes/file.php');
    require_once(ABSPATH . 'wp-admin/includes/media.php');

    // Get the parameters from the request
    $params = $request->get_json_params();
    $name = sanitize_text_field($params['name']);
    $quote = sanitize_textarea_field($params['quote']);
    $image_url = esc_url_raw($params['image']);
    $title = sanitize_text_field($params['title']);

    if (!$name || !$quote || !$image_url || !$title) {
        return new WP_Error('missing_fields', 'Missing required fields', array('status' => 400));
    }

    // Download the image to a temporary file
    $tmp = download_url($image_url);

    // Check for download errors
    if (is_wp_error($tmp)) {
        return new WP_Error('image_download_error', 'Failed to download image', array('status' => 500));
    }

    // Prepare the file array
    $file_array = array(
        'name' => basename($image_url),
        'tmp_name' => $tmp,
    );

    // Handle the file upload
    $overrides = array('test_form' => false, 'test_size' => true);
    $attachment_id = media_handle_sideload($file_array, 0, null, $overrides);

    // Check for upload errors
    if (is_wp_error($attachment_id)) {
        @unlink($file_array['tmp_name']);
        return new WP_Error('image_upload_error', 'Failed to upload image', array('status' => 500));
    }

    // Get the URL of the uploaded image
    $image = wp_get_attachment_url($attachment_id);

    // Insert the new client into the database
    $inserted = $wpdb->insert($table_name, array(
        'name' => $name,
        'quote' => $quote,
        'image' => $image,
        'title' => $title,
    ), array('%s', '%s', '%s', '%s'));

    // Clean up the temporary file
    @unlink($file_array['tmp_name']);

    if ($inserted) {
        return new WP_REST_Response(array('message' => 'Client added successfully', 'id' => $wpdb->insert_id), 201);
    } else {
        return new WP_Error('insert_failed', 'Failed to add client', array('status' => 500));
    }
}

function delete_projxon_client($request) {
    global $wpdb;
    $table_name = $wpdb->prefix . 'clients';

    $client_id = intval($request['id']);

    // Check if client exists before deleting
    $client = $wpdb->get_row($wpdb->prepare("SELECT * FROM $table_name WHERE id = %d", $client_id));
    if (!$client) {
        return new WP_Error('client_not_found', 'Client not found', array('status' => 404));
    }

    // Get the image URL or attachment ID
    $image_url = $client->image;

    // If $image_url is a URL, retrieve the attachment ID
    if (filter_var($image_url, FILTER_VALIDATE_URL)) {
        $attachment_id = attachment_url_to_postid($image_url);
    } else {
        // If $image_url is an attachment ID
        $attachment_id = $image_url;
    }

    // Delete the client from the database
    $deleted = $wpdb->delete($table_name, array('id' => $client_id), array('%d'));

    if ($deleted) {
        // Delete the associated media file
        if ($attachment_id) {
            // Delete the attachment
            $deleted_attachment = wp_delete_attachment($attachment_id, true);
            if (!$deleted_attachment) {
                return new WP_Error('attachment_delete_failed', 'Failed to delete associated media', array('status' => 500));
            }
        }

        return new WP_REST_Response(array('message' => 'Client and associated media deleted successfully'), 200);
    } else {
        return new WP_Error('client_not_deleted', 'Failed to delete client', array('status' => 500));
    }
} 