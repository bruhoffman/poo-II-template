import { knex } from "knex"

// Qdo uma classe é abstrata, ela não pode ser instanciada, somente por herança se pode ter acesso.
export abstract class BaseDatabase {

    // Somente por herança consegue ter acesso a connection, ela não é pública.
    // É um método protegido e estático - NÃO é para mexer.
    protected static connection = knex({
        client: "sqlite3",
        connection: {
            filename: "./src/database/poo.db",
        },
        useNullAsDefault: true,
        pool: { 
            min: 0,
            max: 1,
            afterCreate: (conn: any, cb: any) => {
                conn.run("PRAGMA foreign_keys = ON", cb)
            }
        }
    })

}

// newBase é uma cópia do BaseDatabase
// const newBase = new BaseDatabase()
