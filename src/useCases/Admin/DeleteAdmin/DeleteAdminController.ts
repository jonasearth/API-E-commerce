import { Request, Response } from "express";
import { Admin } from '../../../entities/Admin'
import { DeleteAdminUseCase } from "./DeleteAdminUseCase";

export class DeleteAdminController {
    constructor(
        private deleteAdminUseCase: DeleteAdminUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const resp = await this.deleteAdminUseCase.execute({ id: request.body.id })
            return response.status(201).json({ error: false, data: resp });
        } catch (err) {
            return response.status(400).json({
                error: true,
                message: err.message || 'Unexpected error.'
            })
        }
    }
}