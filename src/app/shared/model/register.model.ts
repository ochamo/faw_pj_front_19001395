export class RegisterModel {
    name: string;
    userName: string;
    pass: string;
    birthDate: Date;
    sexId: number

    constructor (name: string = "", userName: string = "", pass: string  = "", birthDate: Date = new Date(), sexId: number = 0) {
        this.name = name;
        this.userName = userName;
        this.pass = pass;
        this.birthDate = birthDate;
        this.sexId = sexId;
    }

}