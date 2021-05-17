import { addHours } from "date-fns";
import { DB, Lection, LectionTurn } from "../utils/dbTypes";
import { getDateFromOffsetDateString } from "../utils/getDateFromOffsetDateString";
import { getDayOfWeekString } from "../utils/getDayOfWeekString";
import { getLectionTUrnString } from "../utils/getLectionTurnString";
import _db from "./_db.json";

export function getDB(): DB {
  const dataStr: string | Date = _db.data;
  const data = getDateFromOffsetDateString(dataStr);
  return { ..._db, data };
}

export function getLections(): Lection[] {
  const db = getDB();
  return db._embedded.aulas;
}

type DateInfo = {
  dataSemana: string;
  diaSemana: number;
  turno: LectionTurn | string;
  diaSemanaString: string;
  turnoString: string;
};

type GroupedLection = { dataInfo: DateInfo; aulas: Lection[] };

export function getGroupedLections(): GroupedLection[] {
  const lections = getLections();

  const groupedLectionsObj = {} as Record<string, GroupedLection>;

  for (const lection of lections) {
    const key = `${lection.dataSemana} ${lection.turno}`;
    if (groupedLectionsObj[key]) {
      groupedLectionsObj[key].aulas.push(lection);
    } else {
      const dataInfo = {
        dataSemana: lection.dataSemana,
        diaSemana: lection.diaSemana,
        turno: lection.turno,
        diaSemanaString: getDayOfWeekString(lection.diaSemana),
        turnoString: getLectionTUrnString(lection.turno),
      };
      groupedLectionsObj[key] = { dataInfo, aulas: [lection] };
    }
  }

  return Object.values(groupedLectionsObj);
}

export function getSchool(): string {
  const db = getDB();
  return db._embedded.aulas[0] ? db._embedded.aulas[0].escola : "";
}
