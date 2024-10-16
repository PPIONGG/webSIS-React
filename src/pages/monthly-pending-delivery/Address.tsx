import { Box } from '@mui/material';
import React from 'react'
import TableModel from '../../common/table-model';

export default function MonthlyPendingDeliveryAddress() {
    const items = [
        { id: 1, text: "โกดังคุ้มเกล้า", count: 5 },

      ];
    
      return (
        <Box>
          <TableModel data={items} mode={"address"} textHeader = "ที่อยู่ลูกค้า"/>
        </Box>
      );
    }