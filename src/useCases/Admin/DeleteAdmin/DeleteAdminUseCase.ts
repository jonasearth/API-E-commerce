import { IAdminRepository } from "../../../repositories/implementations/Admin/IAdminRepository";
import { IDeleteAdminRequestDTO } from "./DeleteAdminDTO";

export class DeleteAdminUseCase {
    constructor(
        private adminRepository: IAdminRepository,
    ) { }

    async execute(data: IDeleteAdminRequestDTO) {

        if (await this.adminRepository.delete(data.id))
            return "Admin removido com sucesso!"
        else
            throw new Error("Erro ao deletar!")
    }
}