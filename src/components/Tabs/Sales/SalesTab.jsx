import { useState, useCallback } from "react";

//* custom layout
import TabLayout from "../../Layout/TabLayout";

//* Tab panel
import TabPanel from "../../Elements/TabPanel/TabPanel";

//* panel
import OrdersPlacedPanel from "./Tab-Panels/OrdersPlacedPanel";
import SalesSummaryPanel from "./Tab-Panels/SalesSummaryPanel";

const TABS_LABEL = ["sales summary", "orders placed"];

const SalesTab = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabs = useCallback((e, value) => {
        setCurrentTab(value);
    }, []);
    return (
        <TabLayout
            tabLabels={TABS_LABEL}
            value={currentTab}
            handleChange={handleTabs}
            isCentered
            styledTabsProps={{
                minheight: 28,
            }}
            styledTabProps={{
                buttonheight: 25,
            }}
        >
            <TabPanel value={currentTab} index={0}>
                <SalesSummaryPanel />
            </TabPanel>
            <TabPanel value={currentTab} index={1}>
                <OrdersPlacedPanel />
            </TabPanel>
        </TabLayout>
    );
};

export default SalesTab;
