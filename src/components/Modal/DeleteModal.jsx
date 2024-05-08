import PropTypes from "prop-types";

//* Action layout for Modal
import ActionModal from "../Layout/Modal-Layout/Action-Modals/ActionModal";

//* mui icons
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";

const DeleteModal = ({ open, handleClose, heading, textOne, textTwo, Icon }) => {
    return (
        // Delete modal
        <ActionModal
            open={open}
            Icon={Icon || <PersonOffOutlinedIcon fontSize="medium" />}
            heading={heading || "delete_new_contact"}
            textOne={textOne}
            textTwo={textTwo}
            handleClose={handleClose}
            height={34}
            width={34}
        />
    );
};

DeleteModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    heading: PropTypes.string,
    textOne: PropTypes.string,
    textTwo: PropTypes.string,
    Icon: PropTypes.any,
};

export default DeleteModal;
