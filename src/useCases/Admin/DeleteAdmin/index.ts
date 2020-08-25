import { AdminRepository } from "../../../repositories/implementations/Admin/AdminRepository";
import { DeleteAdminUseCase } from "./DeleteAdminUseCase";
import { DeleteAdminController } from "./DeleteAdminController";

const deleteAdminRepository = new AdminRepository()


const deleteAdminUseCase = new DeleteAdminUseCase(
    deleteAdminRepository,

)

const deleteAdminController = new DeleteAdminController(
    deleteAdminUseCase
)

export { deleteAdminUseCase, deleteAdminController }