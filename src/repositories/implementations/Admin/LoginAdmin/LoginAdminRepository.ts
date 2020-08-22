
import { AdminRepository } from "../AdminRepository";

import { Admin } from "../../../../entities/Admin";

import { AdminModel } from '../AdminModel'

import { encriptPass } from '../../../../utils/passwordCript'

export class LoginAdminRepository extends AdminRepository {


    async login(email: string, password: string): Promise<Admin> {
        const passwordEncript: string = encriptPass(password)

        const admin = await AdminModel.findAll({
            where: {
                email,
                password: passwordEncript
            },
            limit: 1
        });
        if (admin.length === 1) {
            const adminObj = new Admin(
                {
                    name: admin[0].getDataValue('name'),
                    email: admin[0].getDataValue('email'),
                    password: admin[0].getDataValue('password')
                }, admin[0].getDataValue('id'))
            return adminObj;
        } else {
            return null;
        }

    }


}