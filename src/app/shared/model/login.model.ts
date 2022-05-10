export class LoginModel {
    userName: string;
    pass: string;

    constructor(userName: string = "", pass: string = "") {
        this.userName = userName;
        this.pass = pass;
    }

}