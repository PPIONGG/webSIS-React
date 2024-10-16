import { Box } from '@mui/material';
import React from 'react'
import TableModel from '../../common/table-model';

export default function MonthlyPendingDeliveryModel() {
    const items = [
        { id: 1, text: "RDS-0685i", count: 5 },
      ];
    
      return (
        <Box>
          <TableModel data={items} mode={"model"} textHeader = "รุ่น"/>
        </Box>
      );
    }