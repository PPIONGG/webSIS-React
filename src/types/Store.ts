import { ResWorkStatus } from "./ResponseAPI";

export interface StoreMain {
  workStatusData: ResWorkStatus[];
  isLoadingWorkStatus: boolean;
  workStatusError: string | null;
}
