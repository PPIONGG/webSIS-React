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
import { CommonCollapsibleTableProps } from "../types/Common";
import styles from "./CollapsibleTable.module.scss";
import { ResWorkStatus } from "../types/ResponseAPI";

function groupBySO(data: ResWorkStatus[]) {
  return data.reduce(
    (groups, row) => {
      const so = row.soNoOther;
      if (so) {
        if (!groups[so]) {
          groups[so] = [];
        }
        groups[so].push(row);
      }
      return groups;
    },
    {} as {
      [key: string]: ResWorkStatus[];
    }
  );
}

// Helper function to format values
function formatValue(value: string | number | Date | undefined): string {
  if (value instanceof Date) {
    return value.toLocaleDateString();
  }
  if (typeof value === "string") {
    const date = new Date(value);
    return isNaN(date.getTime()) ? value : date.toLocaleDateString();
  }
  return value !== undefined ? value.toString() : "N/A";
}

export default function CommonCollapsibleTable({
  data,
  controls,
}: CommonCollapsibleTableProps) {
  const [open, setOpen] = React.useState<{ [key: string]: boolean }>({});
  const groupedData = groupBySO(data);
  const toggleGroup = (so: string) => {
    setOpen((prev) => ({
      ...prev,
      [so]: !prev[so],
    }));
  };

  return (
    <Box className={styles.container}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {controls.map((column) => (
                <TableCell key={column.field} className={styles.headerCell}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(groupedData).map((so) => (
              <React.Fragment key={so}>
                <TableRow>
                  <TableCell
                    colSpan={controls.length}
                    className={styles.groupHeader}
                  >
                    <IconButton size="small" onClick={() => toggleGroup(so)}>
                      {open[so] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                    <Box
                      component="span"
                      className={styles.groupText}
                      sx={{ marginLeft: "10px" }}
                    >
                      {so}
                      <Box component="span" className={styles.countBadge}>
                        {groupedData[so].length}
                      </Box>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ padding: "0px" }}
                    colSpan={controls.length}
                  >
                    <Collapse in={open[so]} timeout="auto" unmountOnExit>
                      <Box>
                        <Table size="small" aria-label="so details">
                          <TableBody>
                            {groupedData[so].map((row, index) => (
                              <TableRow key={index} className={styles.dataRow}>
                                {controls.map((column) => (
                                  <TableCell
                                    key={column.field}
                                    className={styles.headerCell}
                                  >
                                    {formatValue(
                                      row[column.field as keyof ResWorkStatus]
                                    )}
                                  </TableCell>
                                ))}
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
