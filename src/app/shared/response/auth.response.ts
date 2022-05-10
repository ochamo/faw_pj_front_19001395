export class AuthResponse {
    jwt: string;
    xyz: number;

    constructor(jwt: string, xyz: number) {
        this.jwt = jwt;
        this.xyz = xyz;
    }

}