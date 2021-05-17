export interface LinkData {
  href: string;
}

export interface Links {
  self: LinkData;
}

export interface LectionLinks extends Links {
  turma: LinkData;
}

export interface Subject {
  sigla: string;
  cor: string;
  id: number;
  remCache?: any;
  nome: string;
}

export interface LectionEmbedded {
  disciplina: Subject;
}

export enum LectionTurn {
  M = "M",
  V = "V",
}

export interface Lection {
  turno: LectionTurn | string;
  idTurma: number;
  siglaEscola: string;
  idProfessor: number;
  id: number;
  remCache?: any;
  diaSemana: number;
  disciplina: string;
  horario: number;
  escola: string;
  matricula: string;
  turma: string;
  dataSemana: string;
  _links: LectionLinks;
  _embedded: LectionEmbedded;
}

export interface DBEmbedded {
  aulas: Lection[];
}

export interface DB {
  id: number;
  data: Date;
  diaSemana: number;
  _links: Links;
  _embedded: DBEmbedded;
}
