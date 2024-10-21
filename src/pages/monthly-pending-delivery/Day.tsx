import { Box } from "@mui/material";
import { useDeliveryParams } from "../../hooks/useDeliveryParams";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";
import CommonTable from "../../common/Table";
import { filterByMonth } from "../../utils/filterDataByParams";
import { getDayCount } from "../../utils/dataProcessingUtils";

export default function MonthlyPendingDeliveryDay() {
  const { month } = useDeliveryParams();
  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );
  
  let filteredData = filterByMonth(workStatusData, month);
  const dateData = getDayCount(filteredData)

  return (
    <LoadingAndErrorWrapper
    isLoading={isLoadingWorkStatus}
    error={workStatusError}
  >
    <Box>
      <CommonTable
        data={dateData}
        mode="day"
        textHeader="วันที่จัดส่ง"
      />
    </Box>
  </LoadingAndErrorWrapper>
  );
}
