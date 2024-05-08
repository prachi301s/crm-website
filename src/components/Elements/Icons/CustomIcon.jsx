import PropTypes from "prop-types";

//* mui components
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

const CustomIcon = ({ Icon, height, width }) => {
    const theme = useTheme();
    return (
        <Box
            display={"flex"}
            borderRadius={1}
            alignItems={"center"}
            justifyContent={"center"}
            height={height}
            width={width}
            bgcolor={theme.palette.primary.darker}
            color={theme.palette.grey[0]}
        >
            {Icon}
        </Box>
    );
};

CustomIcon.propTypes = {
    Icon: PropTypes.any,
    height: PropTypes.number,
    width: PropTypes.number,
};

export default CustomIcon;
