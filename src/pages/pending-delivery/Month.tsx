import Box from "@mui/material/Box";
import CommonTable from "../../common/Table";
import { useDeliveryParams } from "../../hooks/useDeliveryParams";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";
import { getMonthCount } from "../../utils/dataProcessingUtils";
import { filterByModel } from "../../utils/filterDataByParams";

export default function PendingDeliveryMonth() {
  const { model } = useDeliveryParams();
  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );
  let filteredData = filterByModel(workStatusData, model);
  const monthData = getMonthCount(filteredData);

  return (
    <LoadingAndErrorWrapper
      isLoading={isLoadingWorkStatus}
      error={workStatusError}
    >
      <Box>
        <CommonTable
          data={monthData}
          mode="month"
          textHeader="งานค้างส่งตามเดือน"
        />
      </Box>
    </LoadingAndErrorWrapper>
  );
}
