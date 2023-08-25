export class Practicante {
  constructor(
    readonly id: number,
    readonly proyecto: string,
    readonly telefono: string,
    readonly status_estancia: string,
    readonly conocimientos: string,
    readonly fecha_inicio: Date
  ) {}
}