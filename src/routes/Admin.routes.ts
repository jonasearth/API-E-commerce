
import { Router } from "express";
import { verifyJWT } from '../auth/JWTVerifyAdmin'

import { loginAdminController } from '../useCases/Admin/LoginAdmin/'
import { createAdminController } from '../useCases/Admin/CreateAdmin/'
export class AdminRoutes {
    public router: Router
    public API_ROUTE: string
    constructor(router: Router, API_ROUTE: string) {
        this.API_ROUTE = API_ROUTE
        this.router = router

    }
    public init() {
        this.router.post(this.API_ROUTE + '/admin/login', (request, response) => {
            return loginAdminController.handle(request, response)
        });
        this.router.post(this.API_ROUTE + '/admin/', verifyJWT, (request, response, next) => {
            return createAdminController.handle(request, response)
        });

    }
}