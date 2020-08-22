import { Request, Response } from "express";
import { Admin } from '../../../entities/Admin'
import { UpdateAdminUseCase } from "./UpdateAdminUseCase";

export class UpdateAdminController {
    constructor(
        private updateAdminUseCase: UpdateAdminUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const admin = new Admin({
            name: request.body.name,
            email: request.body.email,
            password: null
        }, request.body.id)

        try {

            const resp = await this.updateAdminUseCase.execute(admin)

            return response.status(201).json({ error: false, data: resp });
        } catch (err) {
            return response.status(400).json({
                error: true,
                message: err.message || 'Unexpected error.'
            })
        }
    }
}