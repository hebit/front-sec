import { Lection } from "./dbTypes";

const lectureTurns: Record<Lection["turma"], string> = {
  M: "Manhã",
  V: "Tarde",
};

export function getLectionTUrnString(turn: Lection["turma"]) {
  return lectureTurns[turn];
}
