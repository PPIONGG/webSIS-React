import Box from "@mui/material/Box";
import CommonTable from "../../common/Table";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";

export default function PendingDeliveryModel() {

  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );

  const modelCount = workStatusData.reduce((acc: { [key: string]: number }, item) => {
    const model = item.modelCode;
    if (model) {
      acc[model] = (acc[model] || 0) + 1;
    }
    return acc;
  }, {} as { [key: string]: number });
  
  const modelData = Object.keys(modelCount).map((model, index) => ({
    id: index,
    text: model,
    count: modelCount[model],
  }));
    
  return (
    <LoadingAndErrorWrapper
      isLoading={isLoadingWorkStatus}
      error={workStatusError}
    >
      <Box>
        <CommonTable
          data={modelData}
          mode="model"
          textHeader="รุ่น"
        />
      </Box>
    </LoadingAndErrorWrapper>
  );
}
