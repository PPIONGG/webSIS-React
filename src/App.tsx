import { Navigate, Route, Routes } from "react-router-dom";
import PendingDeliveryModel from "./pages/pending-delivery/Model";
import PendingDeliveryMonth from "./pages/pending-delivery/Month";
import PendingDeliveryFinalDetails from "./pages/pending-delivery/FinalDetail";
import MonthlyPendingDeliveryModel from "./pages/monthly-pending-delivery/Model";
import MonthlyPendingDeliveryMonth from "./pages/monthly-pending-delivery/Month";
import MonthlyPendingDeliveryAddress from "./pages/monthly-pending-delivery/Address";
import MonthlyPendingDeliveryDay from "./pages/monthly-pending-delivery/Day";
import MonthlyPendingDeliveryFinalDetail from "./pages/monthly-pending-delivery/FinalDetail";
import PendingProductionMonth from "./pages/pending-production/Month";
import PendingProductionModel from "./pages/pending-production/Model";
import PendingProductionFinalDetails from "./pages/pending-production/FinalDetail";
import ProductionInProgressMonth from "./pages/production-in-progress/Month";
import ProductionInProgressProduction from "./pages/production-in-progress/Production";
import CancelledJobOrders from "./pages/cancelled-job-orders";
import DeliverySchedule from "./pages/delivery-schedule";
import LayoutDelivery from "./layouts/main";
import { usePageTitle } from "./hooks/usePageTitle";


function App() {
  usePageTitle()

  
  return (
    <Routes>
      <Route path="/" element={<LayoutDelivery />}>
        {/* ค้างส่ง */}
        <Route path="pending-delivery" element={<PendingDeliveryModel />} />
        <Route
          path="pending-delivery/model/:model"
          element={<PendingDeliveryMonth />}
        />
        <Route
          path="pending-delivery/model/:model/month/:month"
          element={<PendingDeliveryFinalDetails />}
       />
        {/* ค้างส่งตามเดือน */}
        <Route
          path="monthly-pending-delivery"
          element={<MonthlyPendingDeliveryMonth />}
        />
        <Route
          path="monthly-pending-delivery/month/:month"
          element={<MonthlyPendingDeliveryDay />}
        />
        <Route
          path="monthly-pending-delivery/month/:month/day/:day"
          element={<MonthlyPendingDeliveryModel />}
        />
        <Route
          path="monthly-pending-delivery/month/:month/day/:day/model/:model"
          element={<MonthlyPendingDeliveryAddress />}
        />
        <Route
          path="monthly-pending-delivery/month/:month/day/:day/model/:model/address/:address"
          element={<MonthlyPendingDeliveryFinalDetail />}
        />
        {/* รอผลิต */}
        <Route path="pending-production" element={<PendingProductionMonth />} />
        <Route
          path="pending-production/month/:month"
          element={<PendingProductionModel />}
        />
        <Route
          path="pending-production/month/:month/model/:model"
          element={<PendingProductionFinalDetails />}
        />
        {/* อยู่ระหว่างการผลิต/เสร็จ */}
        <Route
          path="production-in-progress"
          element={<ProductionInProgressMonth />}
        />
        <Route
          path="production-in-progress/month/:month"
          element={<ProductionInProgressProduction />}
        />
        {/* รายการยกเลิกเลขที่ใบสั่งงาน */}
        <Route path="cancelled-job-orders" element={<CancelledJobOrders />} />
        {/* ตารางจัดส่งตู้ */}
        <Route path="delivery-schedule" element={<DeliverySchedule />} />
        <Route path="*" element={<Navigate to="pending-delivery" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
