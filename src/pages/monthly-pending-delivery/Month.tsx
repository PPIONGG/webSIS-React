import { Box } from '@mui/material';
import React from 'react'
import TableModel from '../../common/table-model';

export default function MonthlyPendingDeliveryMonth() {
    const items = [
        { id: 1, text: "04", count: 5 },
        { id: 2, text: "05", count: 2 },
        { id: 3, text: "06", count: 2 },
        { id: 4, text: "07", count: 2 },
        { id: 5, text: "08", count: 2 },
      ];
    
      return (
        <Box>
          <TableModel data={items} mode={"month"} textHeader = "งานค้างส่งตามเดือน"/>
        </Box>
      );
    }