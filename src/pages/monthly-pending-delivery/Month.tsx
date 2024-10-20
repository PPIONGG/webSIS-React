import { Box } from '@mui/material';
import TableModel from '../../common/Table';
import { items } from '../../mockData/MockData';

export default function MonthlyPendingDeliveryMonth() {
      return (
        <Box>
          <TableModel data={items} mode="month" textHeader = "งานค้างส่งตามเดือน"/>
        </Box>
      );
    }