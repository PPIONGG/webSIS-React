import { ResWorkStatus } from "../types/ResponseAPI";
import { decodeBase64 } from "./base64Utils";
import { formatDateToDMY } from "./formattedDateUtls";

export function filterByMonth(data: ResWorkStatus[], month: string | number) {
  return month === "All"
    ? data
    : data.filter((item) => item.deliveryMonth === Number(month));
}

export function filterByDay(data: ResWorkStatus[], day: string) {
  return data.filter((item) => {
    const formattedDeliveryDate = item.deliveryDate
      ? formatDateToDMY(item.deliveryDate)
      : null;
    return day === "All" || formattedDeliveryDate === day;
  });
}

export function filterByModel(data: ResWorkStatus[], model: string) {
  return data.filter((item) => model === "All" || item.modelCode === model);
}

export function filterByAddress(data: ResWorkStatus[], address: string) {
  const decodedAddress =
    address && address !== "All" ? decodeBase64(address) : "All";
  return data.filter(
    (item) => decodedAddress === "All" || item.address === decodedAddress
  );
}
