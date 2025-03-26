import fs from "fs"
import axios from "axios"
import FormData from "form-data"
import { fileTypeFromBuffer } from "file-type"
import { tmpName } from "tmp-promise"
import { NextResponse } from "next/server"

export async function POST(req) {
    try {
        const formData = await req.formData()
        const file = formData.get("file")
        const authToken = formData.get("authToken")

        if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
        if (!authToken) return NextResponse.json({ error: "No auth token provided" }, { status: 401 })

        const buffer = Buffer.from(await file.arrayBuffer())
        const fileType = await fileTypeFromBuffer(buffer)
        if (!fileType) return NextResponse.json({ error: "Invalid file type" }, { status: 400 })
        const tempPath = await tmpName({ postfix: `.${fileType.ext}` })
        fs.writeFileSync(tempPath, buffer)

        const form = new FormData()
        form.append("file", fs.createReadStream(tempPath))

        const response = await axios.post(`${process.env.WORDPRESS_API_URL}/media`, form, {
            headers: {
                Authorization: `Bearer ${authToken}`,
                ...form.getHeaders()
            }
        })

        fs.unlinkSync(tempPath)

        return NextResponse.json({
            url: response.data.source_url,
            message: "Image uploaded successfully"
        })
    } catch (error) {
        console.error("Error uploading image:", error.response ? error.response.data : error.message)
        return NextResponse.json({ error: "Failed to upload image" }, { status: 500 })
    }
}