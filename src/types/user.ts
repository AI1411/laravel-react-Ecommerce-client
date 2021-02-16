export class UserType {
    id: number;
    first_name: string;
    last_name: string;
    gender: string;
    address: string;
    tel: string;
    birthday: string;
    status: {
        text: string;
        class: string;
    };
    image: string;
    money: number;
    email: string;
    created_at: string

    constructor(id = 0, first_name = '', last_name = '', image = '', status = {text: '',class: ''}, birthday = '', gender = '', address = '', tel = '', money = 0, email = '', created_at = '') {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.gender = gender;
        this.birthday = birthday;
        this.image = image;
        this.address = address;
        this.tel = tel;
        this.status = {
            text: status.text,
            class: status.class
        };
        this.money = money;
        this.email = email;
        this.created_at = created_at;
    }
}
