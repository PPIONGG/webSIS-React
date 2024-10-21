import { Box } from "@mui/material";
import { useDeliveryParams } from "../../hooks/useDeliveryParams";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";
import CommonCollapsibleTable from "../../common/CollapsibleTable";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { tableMonthlyPendingDeliveryControls } from "../../config";
import {
  filterByAddress,
  filterByDay,
  filterByModel,
  filterByMonth,
} from "../../utils/filterDataByParams";

export default function MonthlyPendingDeliveryFinalDetail() {
  const { month, day, model, address } = useDeliveryParams();
  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );
  let filteredData = filterByMonth(workStatusData, month);
  filteredData = filterByDay(filteredData, day);
  filteredData = filterByModel(filteredData, model);
  filteredData = filterByAddress(filteredData, address);

  return (
    <LoadingAndErrorWrapper
      isLoading={isLoadingWorkStatus}
      error={workStatusError}
    >
      <Box>
        <CommonCollapsibleTable
          data={filteredData}
          controls={tableMonthlyPendingDeliveryControls}
        />
      </Box>
    </LoadingAndErrorWrapper>
  );
}
