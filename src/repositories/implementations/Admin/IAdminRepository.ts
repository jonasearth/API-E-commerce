import { Admin } from "../../../entities/Admin";

export interface IAdminRepository {
    login(email: string, password: string): Promise<Admin>;
    create(email: string, password: string, name: string, id: string): Promise<Admin>;
    update(email: string, name: string, id: string): Promise<any>
}