import { ResWorkStatus } from "../types/ResponseAPI";
import { formatDateToDMY } from "./formattedDateUtls";

export function getMonthCount(data: ResWorkStatus[]) {
  const monthCount = data.reduce(
    (acc: { [key: number]: number }, item) => {
      const month = item.deliveryMonth;
      if (month) {
        acc[month] = (acc[month] || 0) + 1;
      }
      return acc;
    },
    {} as { [key: number]: number }
  );

  return Object.keys(monthCount).map((month, index) => ({
    id: index,
    text: month.padStart(2, "0"),
    count: monthCount[Number(month)],
  }));
}

export function getModelCount(data: ResWorkStatus[]) {
  const modelCount = data.reduce(
    (acc: { [key: string]: number }, item) => {
      const model = item.modelCode;
      if (model) {
        acc[model] = (acc[model] || 0) + 1;
      }
      return acc;
    },
    {} as { [key: string]: number }
  );

  return Object.keys(modelCount).map((model, index) => ({
    id: index,
    text: model,
    count: modelCount[model],
  }));
}

export function getDayCount(data: ResWorkStatus[]) {
  const dayCount = data.reduce(
    (acc: { [key: string]: number }, item) => {
      const day = item.deliveryDate;
      if (day) {
        const dayKey = formatDateToDMY(day);
        acc[dayKey] = (acc[dayKey] || 0) + 1;
      }
      return acc;
    },
    {} as { [key: string]: number }
  );

  return Object.keys(dayCount).map((day, index) => ({
    id: index,
    text: day,
    count: dayCount[day],
  }));
}

export function getAddressCount(data: ResWorkStatus[]) {
  const addressCount = data.reduce(
    (acc: { [key: string]: number }, item) => {
      const address = item.address;
      if (address) {
        acc[address] = (acc[address] || 0) + 1;
      }
      return acc;
    },
    {} as { [key: string]: number }
  );

  return Object.keys(addressCount).map((address, index) => ({
    id: index,
    text: address,
    count: addressCount[address],
  }));
}

export function getProductionCount(data: ResWorkStatus[]) {
  const productionCount = data.reduce(
    (acc: { [key: string]: number }, item) => {
      const production = item.currentOperation;
      if (production) {
        acc[production] = (acc[production] || 0) + 1;
      }
      return acc;
    },
    {} as { [key: string]: number }
  );

  return Object.keys(productionCount).map((address, index) => ({
    id: index,
    text: address,
    count: productionCount[address],
  }));
}