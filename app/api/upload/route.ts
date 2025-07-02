import { NextResponse } from 'next/server';
import type { NextRequest } from "next/server";
import axios from 'axios';
import FormData from 'form-data';
import getAuth from "@/lib/getAuth";
import { WPImage, UploadResponse } from "@/types/interfaces";

export async function POST(req: NextRequest) {
    try {
        const authHeader = getAuth(req);
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }
        const token = authHeader.split(' ')[1];

        const formData = new FormData();
        const body = await req.formData();
        const file = body.get('file');
        if (!file || !(file instanceof File)) {
            return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        formData.append('file', buffer, file.name);
        console.log('FormData:', formData);

        // Make the POST request to the WordPress media API
        const response = await axios.post<WPImage>(
            `${process.env.WORDPRESS_API_URL}/media`,
            formData,
            {
                headers: {
                    ...formData.getHeaders(),
                    'Authorization': `Bearer ${token}`,
                },
            },
        );
        console.log('WordPress API response:', response.data);

        // Return the image URL from the WordPress API
        const sourceURL: UploadResponse = { url: response.data.source_url };
        return NextResponse.json(sourceURL, { status: 200 });
    } catch (error: unknown) {
        const err = error as { response?: { data?: unknown } };
        console.error('Error uploading image:', err.response ? err.response.data : error);
        return NextResponse.json({ message: 'Error uploading image' }, { status: 500 });
    }
}