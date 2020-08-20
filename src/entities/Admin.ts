import { uuid } from 'uuidv4'

export class Admin {

    public readonly id: string;

    public name: string;
    public username: string;
    public email: string;
    public password: string;

    constructor(props: Omit<Admin, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid()
        }
    }
}