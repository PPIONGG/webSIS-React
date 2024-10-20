import { ResWorkStatus } from "./ResponseAPI";

export interface CommonTableProps {
  data: { id: number; text: string; count: number }[];
  mode: string;
  textHeader: string;
  disable?: boolean;
}

export interface CommonCollapsibleTableProps {
  data: ResWorkStatus[];
  controls: { label: string; field: string }[];
}
