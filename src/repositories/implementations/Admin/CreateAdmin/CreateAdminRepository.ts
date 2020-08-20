
import { AdminRepository } from "../AdminRepository";
import { Admin } from "../../../../entities/Admin";
import { AdminModel } from '../AdminModel'

import { encriptPass } from '../../../../utils/passwordCript'

export class CreateAdminRepository extends AdminRepository {


    async create(email: string, password: string, name: string, id: string): Promise<Admin> {
        const passwordEncript: string = encriptPass(password)
        const admin = await AdminModel.findAll({
            where: {
                email
            },
            limit: 1
        });
        if (admin.length === 1) {
            throw new Error("Email já existe!")
        } else {
            const admin = await AdminModel.create({
                id,
                name,
                password: passwordEncript,
                email
            })
            console.log(admin[0])
            return admin[0]
        }

    }


}