import Box from "@mui/material/Box";
import TableModel from "../../common/Table";

const items = [
  { id: 1, text: "04", count: 5 },
  { id: 2, text: "05", count: 2 },
];

export default function PendingProductionMonth() {
  return (
    <Box>
      <TableModel data={items} mode="month" textHeader="งานค้างส่งตามเดือน" />
    </Box>
  );
}
