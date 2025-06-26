import { EmailResponse, EmailFormFields } from "@/types/interfaces";

export const sendEmail = async (formData: EmailFormFields): Promise<EmailResponse> => {
  try {
    const data = JSON.stringify(formData);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    });

    if (!response.ok) throw new Error("Error sending email");

    const responseData: EmailResponse = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};