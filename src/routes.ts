import { Router, Request } from "express";
import { sequelize } from "./repositories/mysql/Sequelize/SequelizeInit"
import { AdminModel } from './repositories/mysql/Admin/AdminModel'
import { Admin } from './entities/Admin'
const router = Router()
const API_ROUTE = "/api"
/**
 * Admin
 */
router.post(API_ROUTE + '/admin/login', (request, response) => {


});


export { router } 