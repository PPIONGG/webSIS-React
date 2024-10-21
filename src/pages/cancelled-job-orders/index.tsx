import { Box } from "@mui/material";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import CollapsibleTableCancelledJobOrder from "../../common/CollapsibleTableCancelledJobOrder";

export default function CancelledJobOrders() {
  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );
  console.log(workStatusData);
  return (
    <LoadingAndErrorWrapper
      isLoading={isLoadingWorkStatus}
      error={workStatusError}
    >
      <Box>
        <CollapsibleTableCancelledJobOrder
          data={workStatusData}
        />
      </Box>
    </LoadingAndErrorWrapper>
  );
}
