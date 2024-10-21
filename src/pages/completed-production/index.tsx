import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";
import CommonTable from "../../common/Table";
import { Box } from "@mui/material";
import { getMonthCount } from "../../utils/dataProcessingUtils";

export default function CompletedProduction() {
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
          disable={true}
        />
      </Box>
    </LoadingAndErrorWrapper>
  );
}
