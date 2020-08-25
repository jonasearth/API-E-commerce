import { IAdminRepository } from "../../../repositories/implementations/Admin/IAdminRepository";
import { ICreateAdminRequestDTO } from "./CreateAdminDTO";

export class CreateAdminUseCase {
    constructor(
        private adminRepository: IAdminRepository,
    ) { }

    async execute(data: ICreateAdminRequestDTO) {
        if (data.email == null || data.password == null || data.name == null) {
            throw new Error("Todos os campos devem ser preenchidos!")
        } if (data.email.length < 6 || data.password.length < 6 || data.name.length < 6) {
            throw new Error("Todos os campos devem ter mais de 6 digitos!")
        }

        if (await this.adminRepository.getByEmail(data.email) != null)
            throw new Error("Email já existe")

        await this.adminRepository.create(data.email, data.password, data.name, data.id)
        return "Admin criado com sucesso!"


    }
}