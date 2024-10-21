import { ResWorkStatus } from "../types/ResponseAPI";

export function groupBySoNoOther(data: ResWorkStatus[]) {
    return data.reduce(
      (groups, row) => {
        const so = row.soNoOther;
        if (so) {
          if (!groups[so]) {
            groups[so] = [];
          }
          groups[so].push(row);
        }
        return groups;
      },
      {} as {
        [key: string]: ResWorkStatus[];
      }
    );
  }
  
  export function groupByWorkOrderNo(data: ResWorkStatus[]) {
    return data.reduce(
      (groups, row) => {
        const so = row.workOrderNo;
        if (so) {
          if (!groups[so]) {
            groups[so] = [];
          }
          groups[so].push(row);
        }
        return groups;
      },
      {} as {
        [key: string]: ResWorkStatus[];
      }
    );
  }
  