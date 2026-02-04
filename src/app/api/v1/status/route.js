import database from "infra/database.js"

export async function GET() {
    const updatedAt = new Date().toISOString()
    const databaseValueResult = await database.query("SHOW server_version;")
    const databaseVersionValue = databaseValueResult.rows[0].server_version
    console.log(updatedAt, databaseVersionValue)
    return Response.json({
        updated_at: updatedAt,
        dependencies: {
            database: {
                version: databaseVersionValue
            }
        }
    })
}
