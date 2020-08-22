import { AdminRepository } from "../AdminRepository"

import { AdminModel } from '../AdminModel'

export class DeleteAdminRepository extends AdminRepository {
    async delete(id: string): Promise<boolean> {
        const admin = await AdminModel.destroy({
            where: {
                id
            }
        })
        return admin > 0 ? true : false
    }
}

