import PropTypes from "prop-types";

//* mui icons
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

//* form
import EmailPendingCallForm from "../Form/EmailPendingCallForm";

//* Form layout for Modal
import FormModal from "../Layout/Modal-Layout/Form-Modals/FormModal";

const EditPendingCallModal = ({ open, handleClose }) => {
    return (
        <FormModal
            open={open}
            Icon={<EditOutlinedIcon fontSize='medium' />}
            heading={"edit_pending_call"}
            handleClose={handleClose}
            height={36}
            width={36}
            maxWidth={"sm"}
            buttonNameOne={"save"}
        >
            <EmailPendingCallForm />
        </FormModal>
    );
};

EditPendingCallModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default EditPendingCallModal;
