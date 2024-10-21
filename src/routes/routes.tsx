import { Navigate, Route } from "react-router-dom";
import PendingDeliveryModel from "../pages/pending-delivery/Model";
import PendingDeliveryMonth from "../pages/pending-delivery/Month";
import PendingDeliveryFinalDetails from "../pages/pending-delivery/FinalDetail";
import MonthlyPendingDeliveryMonth from "../pages/monthly-pending-delivery/Month";
import MonthlyPendingDeliveryDay from "../pages/monthly-pending-delivery/Day";
import MonthlyPendingDeliveryModel from "../pages/monthly-pending-delivery/Model";
import CancelledJobOrders from "../pages/cancelled-job-orders";
import DeliverySchedule from "../pages/delivery-schedule";
import MonthlyPendingDeliveryAddress from "../pages/monthly-pending-delivery/Address";
import MonthlyPendingDeliveryFinalDetail from "../pages/monthly-pending-delivery/FinalDetail";
import PendingProductionFinalDetails from "../pages/pending-production/FinalDetail";
import PendingProductionModel from "../pages/pending-production/Model";
import PendingProductionMonth from "../pages/pending-production/Month";
import ProductionInProgressMonth from "../pages/production-in-progress/Month";
import ProductionInProgressProduction from "../pages/production-in-progress/Production";
import CompletedProduction from "../pages/completed-production";

export const routes = (
  <>
    <Route path="pending-delivery" element={<PendingDeliveryModel />} />
    <Route
      path="pending-delivery/model/:model"
      element={<PendingDeliveryMonth />}
    />
    <Route
      path="pending-delivery/model/:model/month/:month"
      element={<PendingDeliveryFinalDetails />}
    />

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

    <Route path="pending-production" element={<PendingProductionMonth />} />
    <Route
      path="pending-production/month/:month"
      element={<PendingProductionModel />}
    />
    <Route
      path="pending-production/month/:month/model/:model"
      element={<PendingProductionFinalDetails />}
    />

    <Route
      path="production-in-progress"
      element={<ProductionInProgressMonth />}
    />
    <Route
      path="production-in-progress/month/:month"
      element={<ProductionInProgressProduction />}
    />
    <Route
      path="completed-production"
      element={<CompletedProduction />}
    />
    <Route path="cancelled-job-orders" element={<CancelledJobOrders />} />
    <Route path="delivery-schedule" element={<DeliverySchedule />} />
    <Route path="*" element={<Navigate to="pending-delivery" replace />} />
  </>
);
