import { Admin } from "../../../entities/Admin";

import { IAdminRepository } from "./IAdminRepository";

export class AdminRepository implements IAdminRepository {
    async create(email: string, password: string, name: string, id: string): Promise<Admin> {
        return
    }
    async login(email: string, password: string): Promise<Admin> {
        return
    }
    async update(email: string, name: string, id: string): Promise<any> {
        return
    }
}