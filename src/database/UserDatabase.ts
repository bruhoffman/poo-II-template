import { TUserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

// Todas as responsábilidade de banco de dados estarão neste arquivo.
export class UserDatabase extends BaseDatabase {

    public async findUsers(q: string | undefined) {
        
        let usersDB

        if (q) {
            const result: TUserDB[] = await UserDatabase.connection("users")
            .where("name", "LIKE", `%${q}%`)
            
            usersDB = result

        } else {
            const result: TUserDB[] = await UserDatabase.connection("users")
            usersDB = result
        }
    }

}