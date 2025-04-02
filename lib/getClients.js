export default async function getClients(id = null, isStatic = true) {
    try {
        const fetchOptions = isStatic ? { next: { revalidate: 60 } } : { cache: "no-store" }
        const res = await fetch(`${process.env.WORDPRESS_CUSTOM_API_URL}/clients`, fetchOptions);

        if (!res.ok) throw new Error(`Failed to fetch clients. Status: ${res.status}`)
        const data = await res.json();

        return id ? data.find(c => c.id === id) : data
    } catch (error) {
        console.error("Error fetching client")
        return id ? null : []
    }
}