import getClients from "@/lib/getClients";

export async function GET() {
    return await getClients()
}