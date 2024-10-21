import Box from "@mui/material/Box";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";
import CommonTable from "../../common/Table";
import { useDeliveryParams } from "../../hooks/useDeliveryParams";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { filterByMonth } from "../../utils/filterDataByParams";
import { getModelCount } from "../../utils/dataProcessingUtils";

export default function PendingProductionModel() {
  const { month } = useDeliveryParams();
  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );
  let filteredData = filterByMonth(workStatusData, month);
  const monthData = getModelCount(filteredData);
  
  return (
    <LoadingAndErrorWrapper
      isLoading={isLoadingWorkStatus}
      error={workStatusError}
    >
      <Box>
        <CommonTable
          data={monthData}
          mode="model"
          textHeader="รุ่น"
        />
      </Box>
    </LoadingAndErrorWrapper>
  );
}
