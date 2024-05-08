import { useCallback, useState } from "react";

//* options
import TABS_LABEL, {
  BILLING_TABS_LABEL,
} from "../../../options/CustomerInfoTabs";

//* custom layout
import TabLayout from "../../Layout/TabLayout";

//* Tab Panel
import TabPanel from "../../Elements/TabPanel/TabPanel";

//* Panel
import AdditionalInfoPanel from "./Tab-Panels/AdditionalInfoPanel";
import BillingInfoPanel from "./Tab-Panels/BillingInfoPanel";
import CommentPanel from "./Tab-Panels/CommentPanel";
import MainInfoPanel from "./Tab-Panels/MainInfoPanel";

import { useLocation } from "react-router-dom";
import BillingMainInfoPanel from "./Tab-Panels/BillingMainInfoPanel";

function CustomerInfoTab() {
  const [currentTab, setCurrentTab] = useState(0);
  const location = useLocation();
  const handleTabs = useCallback((e, value) => {
    setCurrentTab(value);
  }, []);
  const isNewOrderRoute =
    location.pathname === "/billing-new-order" ||
    location.pathname === "/billing-replenishment" ||
    location.pathname === "/see-order" ||
    location.pathname === "/edit-order";
  console.log(isNewOrderRoute);
  return (
    <TabLayout
      tabLabels={!isNewOrderRoute ? TABS_LABEL : BILLING_TABS_LABEL}
      value={currentTab}
      handleChange={handleTabs}
      colorVariant={"dark"}
      styledTabsProps={{
        minheight: 28,
      }}
      styledTabProps={{
        buttonheight: 25,
      }}
    >
      {isNewOrderRoute ? (
        <>
          <TabPanel value={currentTab} index={0}>
            <BillingMainInfoPanel />
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            <BillingInfoPanel />
          </TabPanel>
        </>
      ) : (
        <>
          <TabPanel value={currentTab} index={0}>
            <MainInfoPanel />
          </TabPanel>
          <TabPanel value={currentTab} index={1}>
            <BillingInfoPanel />
          </TabPanel>

          <TabPanel value={currentTab} index={2}>
            <AdditionalInfoPanel />
          </TabPanel>
          <TabPanel value={currentTab} index={3}>
            <CommentPanel />
          </TabPanel>
        </>
      )}
    </TabLayout>
  );
}

export default CustomerInfoTab;
