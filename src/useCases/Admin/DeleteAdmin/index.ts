import { DeleteAdminRepository } from "../../../repositories/implementations/Admin/DeleteAdmin/DeleteAdminRepository";
import { DeleteAdminUseCase } from "./DeleteAdminUseCase";
import { DeleteAdminController } from "./DeleteAdminController";

const deleteAdminRepository = new DeleteAdminRepository()


const deleteAdminUseCase = new DeleteAdminUseCase(
    deleteAdminRepository,

)

const deleteAdminController = new DeleteAdminController(
    deleteAdminUseCase
)

export { deleteAdminUseCase, deleteAdminController }