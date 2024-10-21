import Box from "@mui/material/Box";
import CommonTable from "../../common/Table";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";
import { getModelCount } from "../../utils/dataProcessingUtils";

export default function PendingDeliveryModel() {
  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );
  const modelData = getModelCount(workStatusData);
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
