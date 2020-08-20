import { IAdminRepository } from "../../../repositories/implementations/Admin/IAdminRepository";
import { ILoginAdminRequestDTO } from "./LoginAdminDTO";
import { createToken } from '../../../auth/JWTVerifyAdmin'

export class LoginAdminUseCase {
    constructor(
        private adminRepository: IAdminRepository,
    ) { }

    async execute(data: ILoginAdminRequestDTO) {
        const admin = await this.adminRepository.login(data.email, data.password)
        if (admin !== null) {
            delete admin.password
            var token = createToken(admin)
            return { msg: "Logado com Sucesso!", token } //send token to front-end
        } else {
            throw new Error('Login ou senha incorretos.');
        }

    }
}