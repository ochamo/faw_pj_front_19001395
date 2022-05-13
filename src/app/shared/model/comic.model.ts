
export class ComicModel {
    public comicId: number;
    public userId: number;
    public name: string;
    public printYear: string;
    public sinopsis: string;
    public idEditorial: number


    constructor(comicId: number = 0, editorialId: number = 0, userId: number = 0, name: string = "", printYear: string = "", sinopsis: string = "") {
        this.comicId = comicId;
        this.userId = userId;
        this.name = name;
        this.printYear = printYear;
        this.idEditorial = editorialId;
        this.sinopsis = sinopsis;
    }

}