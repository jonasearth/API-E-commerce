import { IAdminRepository } from "../../../repositories/implementations/Admin/IAdminRepository";
import { IUpdateAdminRequestDTO } from "./UpdateAdminDTO";

export class UpdateAdminUseCase {
    constructor(
        private adminRepository: IAdminRepository,
    ) { }

    async execute(data: IUpdateAdminRequestDTO) {
        if (data.email == null || data.name == null)
            throw new Error("Todos os campos devem ser preenchidos!")

        if (data.email.length < 6 || data.name.length < 6)
            throw new Error("Todos os campos devem ter mais de 6 digitos!")

        const adminToUpdate = await this.adminRepository.getById(data.id)

        if (adminToUpdate != null) {
            let admin = null

            if (adminToUpdate.email !== data.email) {
                admin = await this.adminRepository.getByEmail(data.email)
            }
            if (admin != null) {
                throw new Error("Email já existe!")
            } else {
                if (await this.adminRepository.update(data.email, data.name, data.id))
                    return "Admin atualizado com sucesso!"
                else
                    throw new Error("Altere algum dado para atualizar!")
            }
        } else {

            throw new Error("Admin não encontrado!")
        }




    }
}