import { Router, Request } from "express";
import { Routes } from './routes/index'
const router = Router()
const API_ROUTE = "/api"
/**
 * Admin
 */

new Routes(router, API_ROUTE).init()

console.log(router)
export { router } 