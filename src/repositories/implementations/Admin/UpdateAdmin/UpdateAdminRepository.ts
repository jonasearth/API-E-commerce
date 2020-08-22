
import { AdminRepository } from "../AdminRepository";
import { AdminModel } from '../AdminModel'


export class UpdateAdminRepository extends AdminRepository {


    async update(email: string, name: string, id: string): Promise<any> {

        const admin = await AdminModel.findAll({
            where: {
                email
            },
            limit: 1
        });
        if (admin.length === 1) {
            throw new Error("Email já existe!")
        } else {
            const admin = await AdminModel.update({
                name,
                email
            }, {
                where: {
                    id
                }
            });
        }
        return admin
    }


}