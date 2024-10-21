import Box from "@mui/material/Box";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";
import CommonTable from "../../common/Table";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { useDeliveryParams } from "../../hooks/useDeliveryParams";
import { filterByMonth } from "../../utils/filterDataByParams";
import { getProductionCount } from "../../utils/dataProcessingUtils";

export default function ProductionInProgressProduction() {
  const { month } = useDeliveryParams();
  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );
  let filteredData = filterByMonth(workStatusData, month);
  const productionData = getProductionCount(filteredData);

  return (
    <LoadingAndErrorWrapper
      isLoading={isLoadingWorkStatus}
      error={workStatusError}
    >
      <Box>
        <CommonTable
          data={productionData}
          mode="production"
          textHeader="Production"
          disable={true}
        />
      </Box>
    </LoadingAndErrorWrapper>
  );
}
