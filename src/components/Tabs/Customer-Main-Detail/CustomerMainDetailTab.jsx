import { useState, useCallback } from "react";

//* mui components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { styled, useTheme } from "@mui/material";
// import TABS_LABEL from "../../../options/CustomerMainDetailTabs";
//* mui icons
import DiscountIcon from "@mui/icons-material/Discount";
import CampaignIcon from "@mui/icons-material/Campaign";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PublicIcon from "@mui/icons-material/Public";
import InfoIcon from "@mui/icons-material/Info";

// custom component
import TabPanel from "../../Elements/TabPanel/TabPanel";
import SalesTab from "../Sales/SalesTab";
import PromotionInfoBox from "../../InfoBox/PromotionInfoBox";
import ExhibitorsInfoBox from "../../InfoBox/ExhibitorsInfoBox";
import RankingInfoBox from "../../InfoBox/RankingInfoBox";
import WebInfoBox from "../../InfoBox/WebInfoBox";
import InformationTab from "../Information/InformationTab";

const TABS_LABEL = [
    {
        id: 1,
        label: "sales",
        icon: <DiscountIcon />,
    },
    {
        id: 2,
        label: "promotion",
        icon: <CampaignIcon />,
    },
    {
        id: 3,
        label: "exhibitors",
        icon: <LocalOfferIcon />,
    },
    {
        id: 4,
        label: "ranking",
        icon: <LeaderboardIcon />,
    },
    {
        id: 5,
        label: "web",
        icon: <PublicIcon />,
    },
    {
        id: 6,
        label: "information",
        icon: <InfoIcon />,
    },
];

const StyledTab = styled(Tab)(({ theme }) => {
    return {
        "&.MuiTab-root": {
            color: theme.palette.primary.dark,
            fontSize: 14,
            fontWeight: 400,
            "&.Mui-selected": {
                fontWeight: 500,
                // backgroundColor: theme.palette.grey[200],
                color: theme.palette.grey[900],
                // borderRadius: 5,
            },
            "&.MuiButtonBase-root": {
                padding: "6px 6px",
                minHeight: 34,
                textTransform: "capitalize",
            },
        },
    };
});

// eslint-disable-next-line no-unused-vars
const StyledTabs = styled(Tabs)(({ theme, ...props }) => {
    return {
        "&.MuiTabs-root": {
            minHeight: 36,
            padding: 4,
        },
        "& .MuiTabs-flexContainer": {
            justifyContent: "space-between",
        },
        "& .MuiTabs-indicator": {
            display: "none", // Remove the indicator
        },
    };
});

function a11yProps(index) {
    return {
        id: `tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
}

function CustomerMainDetailTab() {
    const theme = useTheme();
    const [currentTab, setCurrentTab] = useState(0);
    const handleTabs = useCallback((e, value) => {
        setCurrentTab(value);
    }, []);
    return (
        <Stack
            sx={{
                width: "100%",
                rowGap: 1,
            }}
        >
            <Box
                sx={{
                    bgcolor: theme.palette.secondary.main,
                    borderRadius: 1,
                    boxShadow: "0 4px 12px #0F11140F",
                }}
            >
                <StyledTabs value={currentTab} onChange={handleTabs} aria-label="tabs">
                    {TABS_LABEL?.map((tab, index) => (
                        <StyledTab
                            disableRipple
                            key={`tab-label-${index}`}
                            icon={tab.icon}
                            iconPosition="start"
                            label={tab.label}
                            {...a11yProps(index)}
                        />
                    ))}
                </StyledTabs>
            </Box>
            <Box>
                <TabPanel value={currentTab} index={0}>
                    <SalesTab />
                </TabPanel>
                <TabPanel value={currentTab} index={1}>
                    <PromotionInfoBox />
                </TabPanel>
                <TabPanel value={currentTab} index={2}>
                    <ExhibitorsInfoBox />
                </TabPanel>
                <TabPanel value={currentTab} index={3}>
                    <RankingInfoBox />
                </TabPanel>
                <TabPanel value={currentTab} index={4}>
                    <WebInfoBox />
                </TabPanel>
                <TabPanel value={currentTab} index={5}>
                    <InformationTab />
                </TabPanel>
            </Box>
        </Stack>
    );
}

export default CustomerMainDetailTab;
