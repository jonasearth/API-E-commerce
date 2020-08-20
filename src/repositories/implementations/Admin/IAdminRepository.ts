import { Admin } from "../../../entities/Admin";

export interface IAdminRepository {
    login(email: string, password: string): Promise<Admin>;

}