import PropTypes from "prop-types";

//* Form layout for Modal
import FormModal from "../Layout/Modal-Layout/Form-Modals/FormModal";

//* form
import CreateNewContactForm from "../Form/CreateNewContactForm";

//* mui icons
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

const ContactModal = ({ open, handleClose }) => {
    return (
        // new contact
        <FormModal
            open={open}
            Icon={<PersonAddAltOutlinedIcon fontSize='medium' />}
            heading={"create_new_contact"}
            handleClose={handleClose}
            height={36}
            width={36}
        >
            <CreateNewContactForm />
        </FormModal>
    );
};

ContactModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default ContactModal;
