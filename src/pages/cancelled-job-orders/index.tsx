import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  IconButton,
  Collapse,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

// ฟังก์ชันสร้างข้อมูล
function createData(
  orderDate: string,
  deliveryDate: string,
  status: string,
  so: string
) {
  return { orderDate, deliveryDate, status, so };
}

// ฟังก์ชันกรุ๊ปข้อมูลตาม so
function groupBySO(
  data: {
    orderDate: string;
    deliveryDate: string;
    status: string;
    so: string;
  }[]
) {
  return data.reduce(
    (groups, row) => {
      const so = row.so;
      if (!groups[so]) {
        groups[so] = [];
      }
      groups[so].push(row);
      return groups;
    },
    {} as {
      [key: string]: {
        orderDate: string;
        deliveryDate: string;
        status: string;
        so: string;
      }[];
    }
  );
}

export default function CancelledJobOrders() {
  const rows = [
    createData("16/03/24", "11/04/24", "โกดังคุ้มเกล้า", "IPD-020"),
    createData("16/03/24", "11/04/24", "โกดังคุ้มเกล้า", "IPD-020"),
    createData("16/03/24", "11/04/24", "โกดังคุ้มเกล้า", "IPD-021"),
    createData("16/03/24", "11/04/24", "โกดังคุ้มเกล้า", "IPD-021"),
    createData("16/03/24", "11/04/24", "โกดังคุ้มเกล้า", "IPD-023"),
  ];

  // กรุ๊ปข้อมูลตามค่า SO
  const groupedData = groupBySO(rows);

  // สถานะสำหรับจัดการการเปิด/ปิดของแต่ละ SO
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({});

  const toggleGroup = (so: string) => {
    setOpen((prev) => ({
      ...prev,
      [so]: !prev[so], // สลับสถานะการเปิด/ปิดของแต่ละ SO
    }));
  };

  return (
    <Box sx={{ paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "20px", width: "33%" }}>
                วันที่สั่งสินค้า
              </TableCell>
              <TableCell sx={{ fontSize: "20px", width: "33%" }}>
                วันที่ส่งสินค้า
              </TableCell>
              <TableCell sx={{ fontSize: "20px", width: "34%" }}>
                สถานะ
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* แสดงข้อมูลที่กรุ๊ปตามค่า SO */}
            {Object.keys(groupedData).map((so) => (
              <React.Fragment key={so}>
                {/* หัวข้อของแต่ละกรุ๊ปตามค่า SO */}
                <TableRow>
                  <TableCell
                    colSpan={3}
                    sx={{
                      backgroundColor: "#f5f5f5",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    <IconButton size="small" onClick={() => toggleGroup(so)}>
                      {open[so] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                    <Box component="span" sx={{ marginLeft: "10px" }}>
                      {so}
                      <Box
                        component="span"
                        sx={{
                          marginLeft: "10px",
                          backgroundColor: "#D9D9D9",
                          padding: "2px",
                          fontSize: "20px",
                          fontWeight: "bold",
                          borderRadius : "5px",
                        }}
                      >
                        {groupedData[so].length}
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
                {/* ข้อมูลภายในกรุ๊ปแต่ละ SO */}
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={3}
                  >
                    <Collapse in={open[so]} timeout="auto" unmountOnExit>
                      <Box sx={{ marginTop: 1, marginBottom: 1 }}>
                        <Table size="small" aria-label="so details">
                          <TableBody>
                            {groupedData[so].map((row, index) => (
                              <TableRow
                                key={index}
                                sx={{
                                  height: "60px",
                                  "&:last-child td, &:last-child th": {
                                    border: 0,
                                  },
                                }}
                              >
                                <TableCell
                                  sx={{ fontSize: "20px", width: "33%" }}
                                >
                                  {row.orderDate}
                                </TableCell>
                                <TableCell
                                  sx={{ fontSize: "20px", width: "33%" }}
                                >
                                  {row.deliveryDate}
                                </TableCell>
                                <TableCell
                                  sx={{ fontSize: "20px", width: "34%" }}
                                >
                                  {row.status}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
