import { useState, useCallback } from "react";

//* options
import TABS_LABEL from "../../../options/CallInfoTabs";

//* custom layout
import TabLayout from "../../Layout/TabLayout";

//* Tab Panel
import TabPanel from "../../Elements/TabPanel/TabPanel";

//* panels
import PendingCallsPanel from "./Tab-Panels/PendingCallsPanel";
import CallRecordsPanel from "./Tab-Panels/CallRecordsPanel";
import ClaimCallsPanel from "./Tab-Panels/ClaimCallsPanel";

function CallsInfoTab() {
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabs = useCallback((e, value) => {
        setCurrentTab(value);
    }, []);

    return (
        <TabLayout
            tabLabels={TABS_LABEL}
            isCentered
            value={currentTab}
            handleChange={handleTabs}
            styledTabsProps={{
                minheight: 28,
            }}
            styledTabProps={{
                buttonheight: 25,
            }}
        >
            <TabPanel value={currentTab} index={0}>
                <PendingCallsPanel />
            </TabPanel>
            <TabPanel value={currentTab} index={1}>
                <CallRecordsPanel />
            </TabPanel>
            <TabPanel value={currentTab} index={2}>
                <ClaimCallsPanel />
            </TabPanel>
        </TabLayout>
    );
}

export default CallsInfoTab;
