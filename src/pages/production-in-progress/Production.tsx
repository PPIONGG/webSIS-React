import Box from "@mui/material/Box";
import TableModel from "../../common/table-model";

const items = [
  { id: 1, text: "04", count: 5 },
  { id: 2, text: "05", count: 2 },
];

export default function ProductionInProgressProduction() {
  return (
    <Box>
      <TableModel data={items} mode="production" textHeader="Production"  disable={true}  />
    </Box>
  );
}
