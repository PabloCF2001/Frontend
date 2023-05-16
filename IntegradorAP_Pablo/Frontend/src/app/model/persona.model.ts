export class persona{
    id?: number;
    nombre: string;
    img: string;
    apellido: string;

    constructor(nombre: string, apellido: string, img:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}