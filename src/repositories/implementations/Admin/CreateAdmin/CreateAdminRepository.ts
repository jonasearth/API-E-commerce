
import { AdminRepository } from "../AdminRepository"
import { GetAdminRepository } from '../GetAdmin/GetAdminRepository'

import { Admin } from "../../../../entities/Admin"

import { AdminModel } from '../AdminModel'

import { encriptPass } from '../../../../utils/passwordCript'

export class CreateAdminRepository extends AdminRepository {


    async create(email: string, password: string, name: string, id: string): Promise<Admin> {
        const passwordEncript: string = encriptPass(password)

        const admin = await new GetAdminRepository().getByEmail(email)
        if (admin != null) {
            throw new Error("Email já existe!")
        } else {
            const admin = await AdminModel.create({
                id,
                name,
                password: passwordEncript,
                email
            })
            return
        }

    }


}