export class PracticanteDet {
  constructor(
    readonly id: number,
    readonly correo: string,
    readonly preferencias: string,
    readonly rol_practicante: string,
    readonly fecha_final: Date,
    readonly nombre_instituto: string
  ) { }
}