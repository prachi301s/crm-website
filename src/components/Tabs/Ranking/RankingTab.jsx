import { useState, useCallback } from "react";

//* Tab panel
import TabPanel from "../../Elements/TabPanel/TabPanel";

//* custom layout
import TabLayout from "../../Layout/TabLayout";

//* panel
import CustomerRankingPanel from "./Tab-Panels/CustomerRankingPanel";
import GeneralRankingPanel from "./Tab-Panels/GeneralRankingPanel";

const TABS_LABEL = ["ranking general", "customer ranking"];

const RankingTab = () => {
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
            mainBoxStyle={{
                boxShadow: "none",
                border: 0,
            }}
        >
            <TabPanel value={currentTab} index={0}>
                <GeneralRankingPanel />
            </TabPanel>
            <TabPanel value={currentTab} index={1}>
                <CustomerRankingPanel />
            </TabPanel>
        </TabLayout>
    );
};

export default RankingTab;
