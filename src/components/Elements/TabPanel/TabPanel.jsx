import PropTypes from "prop-types";

//* mui components
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Fade
            in={value === index}
            style={{ transformOrigin: "center" }}
            {...(value === index ? { timeout: 700 } : {})}
        >
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`tabpanel-${index}`}
                aria-labelledby={`tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
            </div>
        </Fade>
    );
}

export default TabPanel;

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
