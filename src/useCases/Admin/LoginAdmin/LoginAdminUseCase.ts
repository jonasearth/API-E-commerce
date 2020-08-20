import { IAdminRepository } from "../../../repositories/implementations/Admin/IAdminRepository";
import { ILoginAdminRequestDTO } from "./LoginAdminDTO";
import jwt from 'jsonwebtoken'

export class LoginAdminUseCase {
    constructor(
        private adminRepository: IAdminRepository,
    ) { }

    async execute(data: ILoginAdminRequestDTO) {
        const admin = await this.adminRepository.login(data.email, data.password)
        if (admin !== null) {
            delete admin.password
            var token = jwt.sign(
                { id: admin.id, email: admin.email, name: admin.name },
                "SecretAdmin", //put in ENV file
                {
                    expiresIn: 300000 //change on prodution
                });
            return { msg: "Logado com Sucesso!", token } //send token to front-end
        } else {
            throw new Error('Login ou senha incorretos.');
        }

    }
}