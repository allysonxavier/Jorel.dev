import {Client} from 'pg'

async  function query (queryObject) {
    const client = new Client({
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        ssl: process.env.NODE_ENV !== "development",
    })
    console.log("Credenciais do Postgres:", {host: process.env.POSTGRES_HOST})
    console.log("Query:", queryObject)

    try {
        await client.connect();
        return await client.query(queryObject);
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        await client.end();
    }
}

export default {
    query: query
}
