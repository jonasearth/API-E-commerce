import { Admin } from "../../../entities/Admin";

export interface IAdminRepository {
    login(email: string, password: string): Promise<Admin>;
    create(email: string, password: string, name: string, id: string): Promise<Admin>;
    update(email: string, name: string, id: string): Promise<any>
    delete(id: string): Promise<boolean>
    getById(id: string): Promise<Admin>
    getAll(): Promise<Array<Admin>>
    getByEmail(email: string): Promise<Admin>
}