import { AdminRepository } from "../AdminRepository";
import { GetAdminRepository } from '../GetAdmin/GetAdminRepository'

import { AdminModel } from '../AdminModel'


export class UpdateAdminRepository extends AdminRepository {


    async update(email: string, name: string, id: string): Promise<any> {
        const getAdminRepository = new GetAdminRepository()
        const adminToUpdate = await getAdminRepository.getById(id)

        if (adminToUpdate != null) {
            let admin = null

            if (adminToUpdate.email !== email) {
                admin = await getAdminRepository.getByEmail(email)
            }
            if (admin != null) {
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
                return (admin[0] > 0) ? true : false
            }
        } else {

            throw new Error("Admin não encontrado!")
        }




    }
}