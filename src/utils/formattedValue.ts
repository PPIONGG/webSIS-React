export function formatValue(
  value: string | number | Date | null | undefined
): string {
  if (value === null || value === undefined) {
    return "-";
  }
  if (value instanceof Date) {
    return value.toLocaleDateString();
  }
  if (typeof value === "string") {
    const date = new Date(value);
    return isNaN(date.getTime()) ? value : date.toLocaleDateString();
  }
  return value.toString();
}
