import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMainData } from "../store/main";
import { AppDispatch } from "../store/Store";

export function usePageTitle() {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>(); 
  useEffect(() => {
    const path = location.pathname;
    let status  = null;

    if (path.startsWith("/pending-delivery")) {
      document.title = "ค้างส่ง - SIS";
      status = "Remain";
    } else if (path.startsWith("/monthly-pending-delivery")) {
      document.title = "ค้างส่งตามเดือน - SIS";
      status = "Remain";
    } else if (path.startsWith("/pending-production")) {
      document.title = "รอผลิต - SIS";
      status = "Wait";
    } else if (path.startsWith("/production-in-progress")) {
      document.title = "อยู่ระหว่างการผลิต/เสร็จ - SIS";
    } else if (path === "/cancelled-job-orders") {
      document.title = "รายการยกเลิกเลขที่ใบสั่งงาน - SIS";
    } else if (path === "/delivery-schedule") {
      document.title = "ตารางจัดส่งตู้ - SIS";
    } else {
      document.title = "SIS";
    }

    if (status) {
      dispatch(fetchMainData({ status, userName: "sa" }));
    }
  }, [location]);
}
