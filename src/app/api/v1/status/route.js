import database from "infra/database.js"

export async function GET() {
    const updatedAt = new Date().toISOString()

    const databaseValueResult = await database.query("SHOW server_version;")
    const databaseVersionValue = databaseValueResult.rows[0].server_version

    const databaseMaxConnectionsResult = await database.query("SHOW max_connections;")
    const databaseMaxConnectionsValue = databaseMaxConnectionsResult.rows[0].max_connections

    console.log(Response.body)
    return Response.json({
        updated_at: updatedAt,
        dependencies: {
            database: {
                version: databaseVersionValue,
                max_connections: parseInt(databaseMaxConnectionsValue)
            }
        }
    })
}
