import { Request, Response } from "express";
import { LoginAdminUseCase } from "./LoginAdminUseCase";

export class CreateUserController {
    constructor(
        private loginAdminUseCase: LoginAdminUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { username, email, password } = request.body;

        try {
            await this.loginAdminUseCase.execute({
                username,
                email,
                password
            })

            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            })
        }
    }
}