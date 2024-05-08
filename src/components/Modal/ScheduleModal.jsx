import PropTypes from "prop-types";

//* form
import ScheduleForm from "../Form/ScheduleForm";

//* Form layout for Modal
import FormModal from "../Layout/Modal-Layout/Form-Modals/FormModal";

//* mui icons
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";

const ScheduleModal = ({ open, handleClose }) => {
    return (
        // Schedule a call
        <FormModal
            open={open}
            Icon={<ContactPhoneOutlinedIcon fontSize='medium' />}
            heading={"schedule_a_call"}
            handleClose={handleClose}
            height={36}
            width={36}
            maxWidth={"sm"}
        >
            <ScheduleForm />
        </FormModal>
    );
};

ScheduleModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default ScheduleModal;
