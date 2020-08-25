import { AdminRepository } from "../../../repositories/implementations/Admin/AdminRepository";
import { UpdateAdminUseCase } from "./UpdateAdminUseCase";
import { UpdateAdminController } from "./UpdateAdminController";

const updateAdminRepository = new AdminRepository()


const updateAdminUseCase = new UpdateAdminUseCase(
    updateAdminRepository,

)

const updateAdminController = new UpdateAdminController(
    updateAdminUseCase
)

export { updateAdminUseCase, updateAdminController }