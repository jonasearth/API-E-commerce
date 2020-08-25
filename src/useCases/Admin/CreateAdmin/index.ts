import { AdminRepository } from "../../../repositories/implementations/Admin/AdminRepository";
import { CreateAdminUseCase } from "./CreateAdminUseCase";
import { CreateAdminController } from "./CreateAdminController";

const createAdminRepository = new AdminRepository()


const createAdminUseCase = new CreateAdminUseCase(
    createAdminRepository,

)

const createAdminController = new CreateAdminController(
    createAdminUseCase
)

export { createAdminUseCase, createAdminController }