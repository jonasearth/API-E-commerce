import { Router, Request } from "express";
import { loginAdminController } from './useCases/Admin/LoginAdmin/'
const router = Router()
const API_ROUTE = "/api"
/**
 * Admin
 */
router.post(API_ROUTE + '/admin/login', (request, response) => {
    return loginAdminController.handle(request, response)
});


export { router } 