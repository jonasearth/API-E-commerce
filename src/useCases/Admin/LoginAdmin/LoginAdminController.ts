import { Request, Response } from "express";
import { LoginAdminUseCase } from "./LoginAdminUseCase";

export class LoginAdminController {
    constructor(
        private loginAdminUseCase: LoginAdminUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        try {
            const resp = await this.loginAdminUseCase.execute({
                email,
                password
            })

            return response.status(201).json(resp);
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}