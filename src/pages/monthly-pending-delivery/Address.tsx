import { Box } from "@mui/material";
import { useDeliveryParams } from "../../hooks/useDeliveryParams";
import { useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import LoadingAndErrorWrapper from "../../common/LoadingAndErrorWrapper";
import CommonTable from "../../common/Table";
import {
  filterByDay,
  filterByModel,
  filterByMonth,
} from "../../utils/filterDataByParams";
import { getAddressCount } from "../../utils/dataProcessingUtils";

export default function MonthlyPendingDeliveryAddress() {
  const { month, day, model } = useDeliveryParams();
  const { workStatusData, isLoadingWorkStatus, workStatusError } = useSelector(
    (state: RootState) => state.main
  );
  let filteredData = filterByMonth(workStatusData, month);
  filteredData = filterByDay(filteredData, day);
  filteredData = filterByModel(filteredData, model);
  const addressData = getAddressCount(filteredData);

  return (
    <LoadingAndErrorWrapper
      isLoading={isLoadingWorkStatus}
      error={workStatusError}
    >
      <Box>
        <CommonTable
          data={addressData}
          mode="address"
          textHeader="ที่อยู่ลูกค้า"
        />
      </Box>
    </LoadingAndErrorWrapper>
  );
}
