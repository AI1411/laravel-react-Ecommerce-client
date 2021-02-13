export class UserType {
    id: number;
    name: string;
    money: number;
    email: string;

    constructor(id = 0, name = '', money = 0, email = '') {
        this.id = id;
        this.name = name;
        this.money = money;
        this.email = email;
    }
}
