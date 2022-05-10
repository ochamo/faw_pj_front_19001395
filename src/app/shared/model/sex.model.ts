export class SexModel {
    sexId: number;
    description: string;

    constructor(sexId: number = 0, description: string = "") {
        this.sexId = sexId;
        this.description = description;
    }
}