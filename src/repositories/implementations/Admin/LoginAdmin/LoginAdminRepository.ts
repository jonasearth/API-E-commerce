
import { IAdminRepository } from "../IAdminRepository";
import { Admin } from "../../../../entities/Admin";
import { AdminModel } from '../AdminModel'

export class LoginAdminRepository implements IAdminRepository {


    async login(email: string, password: string): Promise<Admin> {

        const admin = await AdminModel.findAll({
            where: {
                email,
                password
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