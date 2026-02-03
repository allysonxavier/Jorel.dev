import database from "infra/database.js"

export async function GET() {
    return Response.json({
        updated_at: new Date().toISOString(),
    })
}
