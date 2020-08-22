import { UpdateAdminRepository } from "../../../repositories/implementations/Admin/UpdateAdmin/UpdateAdminRepository";
import { UpdateAdminUseCase } from "./UpdateAdminUseCase";
import { UpdateAdminController } from "./UpdateAdminController";

const updateAdminRepository = new UpdateAdminRepository()


const updateAdminUseCase = new UpdateAdminUseCase(
    updateAdminRepository,

)

const updateAdminController = new UpdateAdminController(
    updateAdminUseCase
)

export { updateAdminUseCase, updateAdminController }