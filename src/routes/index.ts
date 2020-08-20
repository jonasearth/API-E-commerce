import { Router } from "express";
import { AdminRoutes } from './Admin.routes'
export class Routes {
    public router: Router
    public API_ROUTE: string
    constructor(router: Router, API_ROUTE: string) {
        this.API_ROUTE = API_ROUTE
        this.router = router

    }
    public init() {
        new AdminRoutes(this.router, this.API_ROUTE).init()
    }
}