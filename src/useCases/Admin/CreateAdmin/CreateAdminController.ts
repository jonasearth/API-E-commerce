import { Request, Response } from "express";
import { Admin } from '../../../entities/Admin'
import { CreateAdminUseCase } from "./CreateAdminUseCase";

export class CreateAdminController {
    constructor(
        private createAdminUseCase: CreateAdminUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const admin = new Admin({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password
        })

        try {

            const resp = await this.createAdminUseCase.execute(admin)

            return response.status(201).json({ error: false, data: resp });
        } catch (err) {
            return response.status(400).json({
                error: true,
                message: err.message || 'Unexpected error.'
            })
        }
    }
}