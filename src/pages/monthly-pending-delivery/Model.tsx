import { Box } from "@mui/material";
import TableModel from "../../common/Table";
import { items } from "../../mockData/MockData";

export default function MonthlyPendingDeliveryModel() {
  return (
    <Box>
      <TableModel data={items} mode="model" textHeader="รุ่น" />
    </Box>
  );
}
