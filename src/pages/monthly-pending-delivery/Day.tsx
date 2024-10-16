import { Box } from '@mui/material';
import TableModel from '../../common/table-model';

export default function MonthlyPendingDeliveryDay() {
    const items = [
        { id: 1, text: "04-11-2024", count: 5 },
        { id: 2, text: "04-18-2024", count: 2 },
        { id: 3, text: "04-21-2024", count: 3 },
        { id: 4, text: "04-25-2024", count: 9 },
        { id: 5, text: "04-27-2024", count: 11 },
      ];
    
      return (
        <Box>
          <TableModel data={items} mode={"day"} textHeader = "วันที่จัดส่ง"/>
        </Box>
      );
    }