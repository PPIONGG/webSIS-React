import { Box } from "@mui/material";
import CommonCollapsibleTable from "../../common/CollapsibleTable";
import { useDeliveryParams } from "../../hooks/useDeliveryParams";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";
import { tablePendingDeliveryControls } from "../../config";
import { filterByModel, filterByMonth } from "../../utils/filterDataByParams";

export default function PendingDeliveryFinalDetails() {
  const { model, month } = useDeliveryParams();
  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );

  let filteredData = filterByModel(workStatusData, model);
  filteredData = filterByMonth(filteredData, month);

  return (
    <LoadingAndErrorWrapper
      isLoading={isLoadingWorkStatus}
      error={workStatusError}
    >
      <Box>
        <CommonCollapsibleTable
          data={filteredData}
          controls={tablePendingDeliveryControls}
        />
      </Box>
    </LoadingAndErrorWrapper>
  );
}
