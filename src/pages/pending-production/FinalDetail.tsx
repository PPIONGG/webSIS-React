import { Box } from "@mui/material";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";
import CommonCollapsibleTable from "../../common/CollapsibleTable";
import { useDeliveryParams } from "../../hooks/useDeliveryParams";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { filterByModel, filterByMonth } from "../../utils/filterDataByParams";
import { tablePendingProductionControls } from "../../config";

export default function PendingProductionFinalDetails() {
  const { month, model } = useDeliveryParams();
  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );
  let filteredData = filterByMonth(workStatusData, month);
  filteredData = filterByModel(filteredData, model);

  return (
    <LoadingAndErrorWrapper
      isLoading={isLoadingWorkStatus}
      error={workStatusError}
    >
      <Box>
        <CommonCollapsibleTable
          data={filteredData}
          controls={tablePendingProductionControls}
        />
      </Box>
    </LoadingAndErrorWrapper>
  );
}
