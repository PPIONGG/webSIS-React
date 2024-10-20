import { Box } from "@mui/material";
import TableModel from "../../common/Table";
import { pendingDeliveryModelItems } from "../../mockData/MockData";

export default function MonthlyPendingDeliveryDay() {
  return (
    <Box>
      <TableModel
        data={pendingDeliveryModelItems}
        mode="day"
        textHeader="วันที่จัดส่ง"
      />
    </Box>
  );
}
