import { KeyboardArrowUp, KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Collapse,
} from "@mui/material";
import React from "react";
import styles from "./CollapsibleTableCancelledJobOrder.module.scss";
import { CommonCollapsibleTableCancelledJobOrderProps } from "../types/Common";
import { groupBySoNoOther } from "../utils/groupTableBySo";

export default function CollapsibleTableCancelledJobOrder({
  data,
}: CommonCollapsibleTableCancelledJobOrderProps) {
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({});
  // ต้องเป็น groupByWorkOrderNo แต่ ยังไม่มีข้อมูล
  const groupedData = groupBySoNoOther(data);
  const toggleGroup = (so: string) => {
    setOpen((prev) => ({
      ...prev,
      [so]: !prev[so],
    }));
  };

  return (
    <Box className={styles.container}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table" sx={{ tableLayout: "fixed" }}>
          <TableHead>
            <TableRow>
              <TableCell>รุ่น</TableCell>
              <TableCell>เลขที่ใบสั่งงาน</TableCell>
              <TableCell>หมายเลขตู้</TableCell>
              <TableCell>หมายเหตุ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(groupedData).map((so) => (
              <React.Fragment key={so}>
                <TableRow>
                  <TableCell colSpan={4} className={styles.groupHeader}>
                    <IconButton size="small" onClick={() => toggleGroup(so)}>
                      {open[so] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                    <Box
                      component="span"
                      className={styles.groupText}
                      sx={{ marginLeft: "10px" }}
                    >
                      <Box
                        component="span"
                        sx={{ textDecoration: "line-through" }}
                      >
                        {so}
                      </Box>
                      <Box component="span" className={styles.countBadge}>
                        {groupedData[so].length}
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ padding: "0px" }} colSpan={4}>
                    <Collapse in={open[so]} timeout="auto" unmountOnExit>
                      <Box>
                        <Table size="small" aria-label="so details">
                          <TableBody>
                            {groupedData[so].map((row, index) => (
                              <TableRow key={index} className={styles.dataRow}>
                                <TableCell
                                  sx={{
                                    color: "royalblue",
                                    fontWeight: "bold",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  {row.modelCode}
                                  jijgigijggoijgoijgogjogjogijogijgoijgoijgojgoijgoijgoijg
                                </TableCell>
                                <TableCell>{row.soNoOther}</TableCell>
                                <TableCell>{row.cabinetNo}</TableCell>
                                <TableCell>{row.note ?? "-"}</TableCell>
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
