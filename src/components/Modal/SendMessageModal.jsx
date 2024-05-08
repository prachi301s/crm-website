import PropTypes from "prop-types";

//* Form layout for Modal
import FormModal from "../Layout/Modal-Layout/Form-Modals/FormModal";

//* mui icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

//* form
import SendWhatsappForm from "../Form/SendWhatsappForm";

const SendMessageModal = ({ open, handleClose }) => {
    return (
        // Send Message
        <FormModal
            open={open}
            Icon={<WhatsAppIcon fontSize='medium' />}
            heading={"send_a_WhatsApp"}
            handleClose={handleClose}
            height={34}
            width={34}
            buttonName={"send"}
            maxWidth={"xs"}
        >
            <SendWhatsappForm />
        </FormModal>
    );
};

SendMessageModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default SendMessageModal;
