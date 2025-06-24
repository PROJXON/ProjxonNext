export const sendEmail = async (formData: Record<string, string>) => {
  try {
    const data = JSON.stringify(formData);

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: data,
    });

    if (!response.ok) throw new Error("Error sending email");

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};