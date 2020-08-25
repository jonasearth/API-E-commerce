import { AdminRepository } from "../../../repositories/implementations/Admin/AdminRepository";
import { LoginAdminUseCase } from "./LoginAdminUseCase";
import { LoginAdminController } from "./LoginAdminController";

const loginAdminRepository = new AdminRepository()


const loginAdminUseCase = new LoginAdminUseCase(
    loginAdminRepository,

)

const loginAdminController = new LoginAdminController(
    loginAdminUseCase
)

export { loginAdminUseCase, loginAdminController }