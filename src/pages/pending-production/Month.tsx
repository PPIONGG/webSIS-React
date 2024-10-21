import Box from "@mui/material/Box";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";
import CommonTable from "../../common/Table";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { getMonthCount } from "../../utils/dataProcessingUtils";

export default function PendingProductionMonth() {
  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );
  const monthData = getMonthCount(workStatusData);
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
