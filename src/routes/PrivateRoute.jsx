import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

//* component
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import AdminStock from "../pages/Admin-Stock/AdminStock";
import SalesTab from "../components/Tabs/Sales/SalesTab";
import InformationTab from "../components/Tabs/Information/InformationTab";
import PromotionInfoBox from "../components/InfoBox/PromotionInfoBox";
import ExhibitorsInfoBox from "../components/InfoBox/ExhibitorsInfoBox";
import RankingInfoBox from "../components/InfoBox/RankingInfoBox";
import WebInfoBox from "../components/InfoBox/WebInfoBox";
import AdminTeleMarketingCallSystem from "../pages/Admin-Stock/AdminTeleMarketingCallSystem";
import AdminTeleMarketingAuthorized from "../pages/Admin-Stock/AdminTeleMarketingAuthorized";
import AdminTeleMarketingPendingCall from "../pages/Admin-Stock/AdminTeleMarketingPendingCall";
// import BillingReturnManagement from "../pages/Billing/BillingReturnManagement";
import BillingPendingReturn from "../pages/Billing/BillingPendingReturn";
import BillingReturnManagement from "../pages/Billing/BillingReturnManagement";
import BillingSalesList from "../pages/Billing/BillingSalesList";
import BillingNewOrder from "../pages/Billing/BillingNewOrder";
import BillingReplenishment from "../pages/Billing/BillingReplenishment";
import BillingSeeOrder from "../pages/Billing/BillingSeeOrder";
import BillingEditOrder from "../pages/Billing/BillingEditOrder";

const PrivateRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>

      <Route path="/" element={<Home />}>
        <Route path="sales" element={<SalesTab />}></Route>
        <Route path="promotion" element={<PromotionInfoBox />}></Route>
        <Route path="exhibitors" element={<ExhibitorsInfoBox />}></Route>
        <Route path="ranking" element={<RankingInfoBox />}></Route>
        <Route path="web" element={<WebInfoBox />}></Route>
        <Route path="Information" element={<InformationTab />}></Route>
      </Route>

      {/* All admin pages */}
      <Route path="admin-stock" element={<AdminStock />} />
      <Route
        path="telemarketing-call-system"
        element={<AdminTeleMarketingCallSystem />}
      />
      <Route path="authorized" element={<AdminTeleMarketingAuthorized />} />
      <Route path="pending-call" element={<AdminTeleMarketingPendingCall />} />

      {/* All billing pages */}

      <Route path="billing-new-order" element={<BillingNewOrder />} />

      <Route path="billing-sales-list" element={<BillingSalesList />}>
        
      </Route>
      <Route path="see-order" element={<BillingSeeOrder />} />
      <Route path="edit-order" element={<BillingEditOrder />} />
      <Route path="billing-pending-return" element={<BillingPendingReturn />} />
      <Route
        path="billing-return-manage/:id"
        element={<BillingReturnManagement />}
      />
      <Route path="billing-replenishment" element={<BillingReplenishment />} />
    </Routes>
  );
};

export default PrivateRoute;
