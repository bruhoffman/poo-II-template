import { UserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

// Todas as responsábilidade de banco de dados estarão neste arquivo.
export class UserDatabase extends BaseDatabase {

    public static TABLE_USERS = "users"

    public async findUsers(q: string | undefined) {

        let usersDB

        if (q) {
            const result: UserDB[] = await UserDatabase.connection(UserDatabase.TABLE_USERS)
                .where("name", "LIKE", `%${q}%`)

            usersDB = result

        } else {
            const result: UserDB[] = await UserDatabase.connection(UserDatabase.TABLE_USERS)
            usersDB = result
        }

        return usersDB
    }

    public async findUserById(id: string) {

        const userDB: UserDB[] = await UserDatabase.connection(UserDatabase.TABLE_USERS).where("id ", "=", `${id}`)

        if (!userDB) {
            throw new Error("Usuário não encontrado!")
        }

        return userDB
    }

    public async insertUser(newUserDB: UserDB): Promise<void> {

        await BaseDatabase
            .connection(UserDatabase.TABLE_USERS)
            .insert(newUserDB)

    }

}