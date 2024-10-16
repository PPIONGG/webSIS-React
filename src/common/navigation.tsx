import PanToolAltOutlinedIcon from '@mui/icons-material/PanToolAltOutlined';

export const navigation = [
  {
    text: "ค้างส่ง",
    icon: <PanToolAltOutlinedIcon sx={{rotate: "90deg"}}/>, 
    path: "/pending-delivery",
  },
  {
    text: "ค้างส่งตามเดือน",
    icon: <PanToolAltOutlinedIcon sx={{rotate: "90deg"}}/>, 
    path: "/monthly-pending-delivery",
  },
  {
    text: "รอผลิต",
    icon: <PanToolAltOutlinedIcon sx={{rotate: "90deg"}}/>, 
    path: "/pending-production",
  },
  {
    text: "อยู่ระหว่างการผลิต/เสร็จ",
    icon: <PanToolAltOutlinedIcon sx={{rotate: "90deg"}}/>, 
    path: "/production-in-progress",
  },
  {
    text: "รายการยกเลิกเลขที่ใบสั่งงาน",
    icon: <PanToolAltOutlinedIcon sx={{rotate: "90deg"}}/>, 
    path: "/cancelled-job-orders",
  },
  {
    text: "ตารางจัดส่งตู้",
    icon: <PanToolAltOutlinedIcon sx={{rotate: "90deg"}}/>, 
    path: "/delivery-schedule",
  },
];
