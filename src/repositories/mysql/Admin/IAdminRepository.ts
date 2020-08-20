import { Admin } from "../../../entities/Admin";

export interface IAdminRepository {
    findByEmail(email: string): Promise<Admin>;
    save(user: Admin): Promise<void>;
}