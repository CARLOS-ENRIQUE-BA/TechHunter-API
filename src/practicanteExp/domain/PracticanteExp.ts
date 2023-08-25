export class PracticanteExp {
  constructor(
    readonly id: number,
    readonly experiencia_practicante: string,
    readonly comentarios: string,
    readonly nombre_practicante: string,
    readonly cuatrimestre: number,
    readonly curriculum: string | null
  ) { }
}