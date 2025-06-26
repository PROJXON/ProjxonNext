import { google } from "googleapis";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { EmailFormFields } from "@/types/interfaces";

const OAuth2Client = new google.auth.OAuth2(
    process.env.EMAIL_CLIENT_ID,
    process.env.EMAIL_CLIENT_SECRET,
    process.env.EMAIL_REDIRECT_URI
);

OAuth2Client.setCredentials({ refresh_token: process.env.EMAIL_REFRESH_TOKEN });

async function getAccessToken(): Promise<string> {
    try {
        const res = await OAuth2Client.getAccessToken();
        if (!res?.token) throw new Error("No access token returned");
        return res.token;
    } catch (error) {
        console.error("Failed to get access token:", error);
        throw new Error("Failed to authenticate email service.");
    }
}

export async function POST(req: NextResponse) {
    try {
        const { user_name, user_email, message }: EmailFormFields = await req.json();
        const accessToken = await getAccessToken();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.EMAIL_USER,
                clientId: process.env.EMAIL_CLIENT_ID,
                clientSecret: process.env.EMAIL_CLIENT_SECRET,
                refreshToken: process.env.EMAIL_REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const notificationMailOptions = {
            from: `"Projxon" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New Contact Request from ${user_name}`,
            text: `
                Name: ${user_name}
                Email: ${user_email}
                Message: ${message}
            `,
        };

        const confirmationMailOptions = {
            from: `"Projxon" <${process.env.EMAIL_USER}>`,
            to: user_email,
            subject: "Thank you for contacting us!",
            text: `
        Hi ${user_name},

        Thank you for reaching out to us! We have received your message and will get back to you shortly.

        Best regards,
        The Projxon Team
      `,
        };

        await transporter.sendMail(notificationMailOptions);
        await transporter.sendMail(confirmationMailOptions);

        return new Response(JSON.stringify({ message: "Emails sent successfully!" }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ message: "Error sending email" }), { status: 500 });
    }
}