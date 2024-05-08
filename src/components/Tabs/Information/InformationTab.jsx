import { useState, useCallback } from "react";

//* Tab Panel
import TabPanel from "../../Elements/TabPanel/TabPanel";

//* custom layout
import TabLayout from "../../Layout/TabLayout";

//* options
import TABS_LABEL from "../../../options/InformationTabs";

//* panel
import ExhibitorsInfoPanel from "./Tab-Panels/ExhibitorsInfoPanel";
import InfoPanel from "./Tab-Panels/InfoPanel";
import PriceInfoPanel from "./Tab-Panels/PriceInfoPanel";
import PromotionalInfo from "./Tab-Panels/PromotionalInfoPanel";

const InformationTab = () => {
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
        >
            <TabPanel value={currentTab} index={0}>
                <InfoPanel />
            </TabPanel>
            <TabPanel value={currentTab} index={1}>
                <PriceInfoPanel />
            </TabPanel>
            <TabPanel value={currentTab} index={2}>
                <ExhibitorsInfoPanel />
            </TabPanel>
            <TabPanel value={currentTab} index={3}>
                <PromotionalInfo />
            </TabPanel>
        </TabLayout>
    );
};

export default InformationTab;
