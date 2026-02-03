import database from "../../../../infra/database.js"

export async function GET() {
    const result = await database.query("SELECT 1 + 1 as sum");
    console.log(result.rows)
    return Response.json({ chave: "são acima da média" })
}
