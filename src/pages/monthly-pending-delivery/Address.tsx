import { Box } from "@mui/material";
import TableModel from "../../common/Table";
import { items } from "../../mockData/MockData";

export default function MonthlyPendingDeliveryAddress() {
  return (
    <Box>
      <TableModel data={items} mode={"address"} textHeader="ที่อยู่ลูกค้า" />
    </Box>
  );
}
