import { Box } from "@mui/material";
import { useDeliveryParams } from "../../hooks/useDeliveryParams";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";
import CommonTable from "../../common/Table";
import { filterByDay, filterByMonth } from "../../utils/filterDataByParams";
import { getModelCount } from "../../utils/dataProcessingUtils";

export default function MonthlyPendingDeliveryModel() {
  const { month, day } = useDeliveryParams();
  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );
  let filteredData = filterByMonth(workStatusData, month);
  filteredData = filterByDay(filteredData, day);
  const modelData = getModelCount(filteredData);
  return (
    <LoadingAndErrorWrapper
      isLoading={isLoadingWorkStatus}
      error={workStatusError}
    >
      <Box>
        <CommonTable data={modelData} mode="model" textHeader="รุ่น" />
      </Box>
    </LoadingAndErrorWrapper>
  );
}
