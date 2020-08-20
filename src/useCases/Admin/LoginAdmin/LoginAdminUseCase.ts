import { IAdminRepository } from "../../../repositories/mysql/Admin/IAdminRepository";
import { ILoginAdminRequestDTO } from "./LoginAdminDTO";
import { Admin } from "../../../entities/Admin";

export class LoginAdminUseCase {
    constructor(
        private adminRepository: IAdminRepository,

    ) { }

    async execute(data: ILoginAdminRequestDTO) {

    }
}