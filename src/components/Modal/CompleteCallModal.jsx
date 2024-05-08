import PropTypes from "prop-types";

//* mui icons
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";

//* forms
import CompleteACallForm from "../Form/CompleteACallForm";

//* Action layout for Modal
import ActionModal from "../Layout/Modal-Layout/Action-Modals/ActionModal";

const CompleteCallModal = ({ open, handleClose }) => {
    return (
        <ActionModal
            open={open}
            Icon={<SupportAgentOutlinedIcon fontSize='medium' />}
            heading={"complete_a_call"}
            handleClose={handleClose}
            height={34}
            width={34}
            maxWidth={"sm"}
            justifyContent={"initial"}
        >
            <CompleteACallForm />
        </ActionModal>
    );
};

CompleteCallModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default CompleteCallModal;
