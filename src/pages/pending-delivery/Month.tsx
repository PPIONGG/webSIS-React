import Box from "@mui/material/Box";
import CommonTable from "../../common/Table";
import { useDeliveryParams } from "../../hooks/useDeliveryParams";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";

export default function PendingDeliveryMonth() {
  const { model } = useDeliveryParams();
  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );

  const filteredData =
    model === "All"
      ? workStatusData
      : workStatusData.filter((item) => item.modelCode === model);

  const monthData = filteredData.reduce(
    (acc: { [key: number]: number }, item) => {
      const month = item.deliveryMonth;
      if (month) {
        acc[month] = (acc[month] || 0) + 1;
      }
      return acc;
    },
    {} as { [key: number]: number }
  );

  const monthDataArray = Object.keys(monthData).map((month, index) => ({
    id: index,
    text: month.padStart(2, '0'),
    count: monthData[Number(month)],
  }));
  
  return (
    <LoadingAndErrorWrapper
      isLoading={isLoadingWorkStatus}
      error={workStatusError}
    >
      <Box>
        <CommonTable
          data={monthDataArray}
          mode="month"
          textHeader="งานค้างส่งตามเดือน"
        />
      </Box>
    </LoadingAndErrorWrapper>
  );
}
