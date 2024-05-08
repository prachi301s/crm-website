import PropTypes from "prop-types";

//* mui components
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useTheme, styled } from "@mui/material";

const StyledTab = styled(Tab)(({ theme, ...props }) => {
    return {
        "&.MuiTab-root": {
            color:
                props?.colorvariant === "dark"
                    ? theme.palette.secondary.main
                    : theme.palette.primary.dark,
            fontSize: 12,
            fontWeight: 400,
            "&.Mui-selected": {
                fontWeight: 500,
                backgroundColor:
                    props?.colorvariant === "dark"
                        ? theme.palette.secondary.main
                        : theme.palette.grey[200],
                color: theme.palette.grey[900],
                borderRadius: 5,
            },
            "&.MuiButtonBase-root": {
                textTransform: "capitalize",
                padding: props?.buttonPadding || "6px 6px",
                minHeight: props?.buttonHeight || 34,
            },
        },
    };
});

// eslint-disable-next-line no-unused-vars
const StyledTabs = styled(Tabs)(({ theme, ...props }) => {
    return {
        "&.MuiTabs-root": {
            minHeight: props?.minHeight || 36,
            padding: 4,
        },
        // "& .MuiTabs-flexContainer": {
        //     justifyContent: "space-between",
        // },
        "& .MuiTabs-indicator": {
            //! dont remove the space between & and MuiTabs
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

export default function TabLayout(props) {
    const {
        tabLabels,
        children,
        colorVariant = "light",
        isCentered,
        value,
        handleChange,
        mainBoxStyle,
        innerBoxStyle,
        styledTabProps,
        styledTabsProps,
    } = props;
    const theme = useTheme();

    return (
        <Box
            sx={{
                width: "100%",
                bgcolor: theme.palette.secondary.main,
                borderRadius: "10px",
                border: "1px solid #E7E7E7;",
                boxShadow: "0 4px 12px #0F11140F",
                ...mainBoxStyle,
            }}
        >
            <Box
                sx={{
                    bgcolor:
                        colorVariant === "dark"
                            ? theme.palette.primary.dark
                            : theme.palette.secondary.main,
                    borderBottom: 1,
                    borderColor:
                        colorVariant === "dark"
                            ? theme.palette.secondary.main
                            : theme.palette.primary.light,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,

                    ...innerBoxStyle,
                }}
            >
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    centered={isCentered}
                    aria-label="tabs"
                    {...styledTabsProps}
                >
                    {tabLabels?.map((label, index) => (
                        <StyledTab
                            colorvariant={colorVariant}
                            key={`tab-label-${index}`}
                            label={label}
                            {...styledTabProps}
                            {...a11yProps(index)}
                        />
                    ))}
                </StyledTabs>
            </Box>
            <Box sx={{ p: 1 }}>{children}</Box>
        </Box>
    );
}

TabLayout.propTypes = {
    children: PropTypes.node,
    tabLabels: PropTypes.array.isRequired,
    value: PropTypes.number.isRequired,
    handleChange: PropTypes.func.isRequired,
    isCentered: PropTypes.bool,
    colorVariant: PropTypes.string,
    mainBoxStyle: PropTypes.object,
    innerBoxStyle: PropTypes.object,
    styledTabsProps: PropTypes.object,
    styledTabProps: PropTypes.object,
};
