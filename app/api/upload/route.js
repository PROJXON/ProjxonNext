import { NextResponse } from 'next/server';
import axios from 'axios';
import FormData from 'form-data';
import { authenticateUser } from '@/lib/authenticateUser';

export async function POST(req) {
    try {
        authenticateUser(req);

        const authHeader = req.headers.get('Authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }
        const token = authHeader.split(' ')[1];

        const formData = new FormData();
        const body = await req.formData();
        const file = body.get('file');

        if (!file) {
            return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
        }

        // const fileStream = file.stream(); 

        const buffer = Buffer.from(await file.arrayBuffer());
        formData.append('file', buffer, file.name);

        // Make the POST request to the WordPress media API
        const response = await axios.post(`${process.env.WORDPRESS_API_URL}/media`, formData, {
            headers: {
                ...formData.getHeaders(),
                'Authorization': `Bearer ${token}`,
            },
        });

        // Return the image URL from the WordPress API
        return NextResponse.json({ url: response.data.source_url }, { status: 200 });
    } catch (error) {
        console.error('Error uploading image:', error.response ? error.response.data : error);
        return NextResponse.json({ message: 'Error uploading image' }, { status: 500 });
    }
}
