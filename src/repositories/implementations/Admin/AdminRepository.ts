
import { IAdminRepository } from "./IAdminRepository"

import { Admin } from "../../../entities/Admin"

import { AdminModel } from './AdminModel'

import { encriptPass } from '../../../utils/passwordCript'

export class AdminRepository implements IAdminRepository {
    async login(email: string, password: string): Promise<Admin> {
        const passwordEncript: string = encriptPass(password)

        const admin = await AdminModel.findAll({
            where: {
                email,
                password: passwordEncript
            },
            limit: 1
        });
        if (admin.length === 1) {
            const adminObj = new Admin(
                {
                    name: admin[0].getDataValue('name'),
                    email: admin[0].getDataValue('email'),
                    password: admin[0].getDataValue('password')
                }, admin[0].getDataValue('id'))
            return adminObj;
        } else {
            return null;
        }

    }

    async getById(id: string): Promise<Admin> {
        const admin = await AdminModel.findAll({
            where: {
                id
            },
            limit: 1
        });
        if (admin.length !== 1) {
            return
        }
        const adminObj = new Admin({
            name: admin[0].getDataValue('name'),
            email: admin[0].getDataValue('email'),
            password: admin[0].getDataValue('password'),
        }, id)
        return adminObj
    }

    async getAll(): Promise<Array<Admin>> {
        const admin = await AdminModel.findAll();
        if (admin.length === 0) {
            return
        }
        let arrayAdmins = []
        for (let i = 0; i < admin.length; i++) {
            const adminObj = new Admin({
                name: admin[i].getDataValue('name'),
                email: admin[i].getDataValue('email'),
                password: admin[i].getDataValue('password'),
            },
                admin[i].getDataValue('id'))
            arrayAdmins.push(adminObj)

        }

        return arrayAdmins
    }

    async getByEmail(email: string): Promise<Admin> {
        const admin = await AdminModel.findAll({
            where: {
                email
            },
            limit: 1
        });
        if (admin.length === 0) {
            return
        }
        const adminObj = new Admin({
            name: admin[0].getDataValue('name'),
            email: admin[0].getDataValue('email'),
            password: admin[0].getDataValue('password'),
        }, admin[0].getDataValue('id'))
        return adminObj
    }

    async create(email: string, password: string, name: string, id: string): Promise<Admin> {
        const passwordEncript: string = encriptPass(password)
        const admin = await AdminModel.create({
            id,
            name,
            password: passwordEncript,
            email
        })
        return
    }

    async update(email: string, name: string, id: string): Promise<boolean> {
        const admin = await AdminModel.update({
            name,
            email
        }, {
            where: {
                id
            }
        });
        return (admin[0] > 0) ? true : false

    }

    async delete(id: string): Promise<boolean> {
        const admin = await AdminModel.destroy({
            where: {
                id
            }
        })
        return admin > 0 ? true : false
    }

}