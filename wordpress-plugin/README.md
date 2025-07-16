# Projxon Custom API WordPress Plugin

This WordPress plugin provides REST API endpoints for managing client testimonials on the PROJXON website.

## Installation

1. Copy the `projxon-custom-api.php` file to your WordPress plugins directory:
   ```
   /opt/bitnami/wordpress/wp-content/plugins/projxon-custom-api/
   ```

2. Activate the plugin through the WordPress admin panel

## Database Setup

The plugin requires a custom `clients` table. Create it with this SQL:

```sql
CREATE TABLE wp_clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    quote TEXT NOT NULL,
    image VARCHAR(500) NOT NULL,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

| Method | Endpoint                   | Auth Required | Description                   |
|--------|----------------------------|---------------|-------------------------------|
| GET    | `/wp-json/projxon/v1/clients` | ❌            | Fetch all testimonials        |
| POST   | `/wp-json/projxon/v1/clients` | ✅ (admin)     | Add new testimonial w/ image  |
| DELETE | `/wp-json/projxon/v1/clients/{id}` | ✅ (admin)     | Delete testimonial + image    |

## Usage

### GET /wp-json/projxon/v1/clients
Returns all client testimonials.

### POST /wp-json/projxon/v1/clients
Add a new client testimonial. Requires admin authentication.

**Body:**
```json
{
    "name": "Client Name",
    "quote": "Client testimonial text",
    "image": "https://example.com/image.jpg",
    "title": "Client Title"
}
```

### DELETE /wp-json/projxon/v1/clients/{id}
Delete a client testimonial and its associated image. Requires admin authentication.

## Features

- Downloads external images and stores them in WordPress media library
- Handles image cleanup when testimonials are deleted
- Sanitizes all input data
- Proper error handling and WordPress error reporting
- Admin-only access for write operations 