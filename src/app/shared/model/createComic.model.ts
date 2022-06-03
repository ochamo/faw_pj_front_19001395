export class CreateComicModel {
    public userId: number;
    public name: string;
    public printYear: string;
    public sinopsis: string;
    public idEditorial: number;


    constructor(userId: number = 0, idEditorial: number = 0, name: string = "", printYear: string = "", sinopsis: string = "") {
        this.userId = userId;
        this.name = name;
        this.printYear = printYear;
        this.idEditorial = idEditorial;
        this.sinopsis = sinopsis;
    }

}