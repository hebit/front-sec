import { subHours } from "date-fns";

export function getDateFromOffsetDateString(dateStr: string): Date {
  const dataArr = dateStr.split("").splice(0, 19);
  const offSetStr = dateStr.split("").splice(19, 3).join("");
  const offSet = Number(offSetStr);
  const date = new Date(dataArr.join(""));
  return subHours(date, offSet);
}
