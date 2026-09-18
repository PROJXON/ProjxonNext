import { google } from 'googleapis';
import nodemailer from 'nodemailer';
import { NextRequest } from 'next/server';
import { EmailFormFields } from '@/types/interfaces';
import {
  getProjxonBackendSecrets,
  ProjxonBackendSecrets,
} from '@/lib/serverSecrets';

async function getAccessToken(
  secrets: ProjxonBackendSecrets,
): Promise<string> {
  try {
    const OAuth2Client = new google.auth.OAuth2(
      secrets.EMAIL_CLIENT_ID,
      secrets.EMAIL_CLIENT_SECRET,
      secrets.EMAIL_REDIRECT_URI,
    );

    OAuth2Client.setCredentials({
      refresh_token: secrets.EMAIL_REFRESH_TOKEN,
    });

    const res = await OAuth2Client.getAccessToken();
    if (!res?.token) throw new Error('No access token returned');

    return res.token;
  } catch (error) {
    console.error('Failed to get access token:', error);
    throw new Error('Failed to authenticate email service.');
  }
}

export async function POST(req: NextRequest) {
  try {
    const { user_name, user_email, message }: EmailFormFields = await req.json();
    const secrets = await getProjxonBackendSecrets();
    const accessToken = await getAccessToken(secrets);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: secrets.EMAIL_USER,
        clientId: secrets.EMAIL_CLIENT_ID,
        clientSecret: secrets.EMAIL_CLIENT_SECRET,
        refreshToken: secrets.EMAIL_REFRESH_TOKEN,
        accessToken,
      },
    });

    const notificationMailOptions = {
      from: `'Projxon' <${secrets.EMAIL_USER}>`,
      to: secrets.EMAIL_USER,
      subject: `New Contact Request from ${user_name}`,
      text: `
                Name: ${user_name}
                Email: ${user_email}
                Message: ${message}
            `,
    };

    const confirmationMailOptions = {
      from: `'Projxon' <${secrets.EMAIL_USER}>`,
      to: user_email,
      subject: 'Thank you for contacting us!',
      text: `
        Hi ${user_name},

        Thank you for reaching out to us! We have received your message and will get back to you shortly.

        Best regards,
        The Projxon Team
      `,
    };

    await transporter.sendMail(notificationMailOptions);
    await transporter.sendMail(confirmationMailOptions);

    return new Response(
      JSON.stringify({ message: 'Emails sent successfully!' }),
      { status: 200 },
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ message: 'Error sending email' }),
      { status: 500 },
    );
  }
}
