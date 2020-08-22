
import { AdminRepository } from "../AdminRepository";
import { Admin } from "../../../../entities/Admin";
import { AdminModel } from '../AdminModel'

import { encriptPass } from '../../../../utils/passwordCript'

export class UpdateAdminRepository extends AdminRepository {


    async update(email: string, password: string, name: string, id: string): Promise<any> {
        const admin = await AdminModel.update({
            name,
            email
        }, {
            where: {
                id
            }
        });
        return admin
    }


}