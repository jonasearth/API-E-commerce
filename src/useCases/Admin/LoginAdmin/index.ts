import { LoginAdminRepository } from "../../../repositories/implementations/Admin/LoginAdmin/LoginAdminRepository";
import { LoginAdminUseCase } from "./LoginAdminUseCase";
import { LoginAdminController } from "./LoginAdminController";

const loginAdminRepository = new LoginAdminRepository()


const loginAdminUseCase = new LoginAdminUseCase(
    loginAdminRepository,

)

const loginAdminController = new LoginAdminController(
    loginAdminUseCase
)

export { loginAdminUseCase, loginAdminController }