//* mui components
import PropTypes from "prop-types";

//* mui components
import ButtonBase from "@mui/material/ButtonBase";

//* mui icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const ActionButton = ({ handleClick }) => {
    return (
        <ButtonBase
            sx={{
                bgcolor: "rgb(53 119 241 / 10%)",
                padding: "2px 6px",
            }}
            onClick={handleClick}
        >
            <MoreHorizIcon
                sx={{
                    fontSize: 16,
                }}
                color='info'
            />
        </ButtonBase>
    );
};

ActionButton.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

export default ActionButton;
