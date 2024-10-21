import dayjs from 'dayjs';
export function formatDateToDMY(date: string | Date): string {
  return dayjs(date).format('DD-MM-YYYY');
}
