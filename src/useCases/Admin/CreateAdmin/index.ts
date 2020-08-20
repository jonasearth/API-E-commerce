import { CreateAdminRepository } from "../../../repositories/implementations/Admin/CreateAdmin/CreateAdminRepository";
import { CreateAdminUseCase } from "./CreateAdminUseCase";
import { CreateAdminController } from "./CreateAdminController";

const createAdminRepository = new CreateAdminRepository()


const createAdminUseCase = new CreateAdminUseCase(
    createAdminRepository,

)

const createAdminController = new CreateAdminController(
    createAdminUseCase
)

export { createAdminUseCase, createAdminController }