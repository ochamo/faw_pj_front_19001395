export class EditComicModel {
    public idComic: number;
    public comicName: string;
    public comicEditorial: number;
    public comicPrintYear: string;
    public comicSinopsis: string;

    constructor(idComic: number = 0,
        name: string = '',
        idEditorial: number = 0,
        printYear: string = '',
        sinopsis: string = '') {
        this.idComic = idComic;
        this.comicName = name;
        this.comicEditorial = idEditorial;
        this.comicPrintYear = printYear;
        this.comicSinopsis = sinopsis;
    }

}