import { Box } from "@mui/material";
import CommonCollapsibleTable from "../../common/CollapsibleTable";
import { useDeliveryParams } from "../../hooks/useDeliveryParams";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";
import { tablePendingDeliveryControls } from "../../config";

export default function PendingDeliveryFinalDetails() {
  const { model, month } = useDeliveryParams();
  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );

  const filteredData = workStatusData.filter(item => {
    const modelMatch = model === "All" || item.modelCode === model;
    const monthMatch = month === "All" || item.deliveryMonth === Number(month);
    return modelMatch && monthMatch;
  });
  
  return (
    <LoadingAndErrorWrapper
      isLoading={isLoadingWorkStatus}
      error={workStatusError}
    >
      <Box>
        <CommonCollapsibleTable data={filteredData} controls={tablePendingDeliveryControls} />
      </Box>
    </LoadingAndErrorWrapper>
  );
}
