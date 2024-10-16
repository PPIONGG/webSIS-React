import Box from "@mui/material/Box";
import TableModel from "../../common/table-model";

export default function PendingProductionModel() {
  const items = [
    { id: 1, text: "IPD-020", count: 191 },
    { id: 2, text: "IPD-020M", count: 215 },
    { id: 3, text: "KDF-4721", count: 2 },
    { id: 4, text: "KDF-8721", count: 3 },
    { id: 5, text: "RDS-0685i", count: 7 },
    { id: 6, text: "RDS-1325i", count: 16 },
    { id: 7, text: "SCF3-1206A", count: 18 },
  ];

  return (
    <Box>
      <TableModel data={items} mode={"model"} textHeader = "รุ่น"/>
    </Box>
  );
}
