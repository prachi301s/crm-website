import PropTypes from "prop-types";

//* Action layout for Modal
import ActionModal from "../Layout/Modal-Layout/Action-Modals/ActionModal";

//* mui icons
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";

const NonExistentContactModal = ({ open, handleClose }) => {
    return (
        //   Mark contact as Non existent
        <ActionModal
            open={open}
            Icon={<PersonOffOutlinedIcon fontSize='medium' />}
            heading={"mark_contact_as_non_existent"}
            textOne={"you_are_going_to_mark_a_customer_as_non_existent"}
            textTwo={"are_you_sure"}
            handleClose={handleClose}
            height={34}
            width={34}
        />
    );
};

NonExistentContactModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default NonExistentContactModal;
