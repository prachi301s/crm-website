import PropTypes from "prop-types";

//* Modal for form layout
import FormModal from "../Layout/Modal-Layout/Form-Modals/FormModal";

//* mui icon
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

//* form
import AddCustomerPhoneForm from "../Form/AddCustomerPhoneForm";

function AddCustomerPhoneModal({ open, handleClose }) {
    return (
        <FormModal
            open={open}
            Icon={<EditOutlinedIcon fontSize='medium' />}
            heading={"add_new_phone"}
            handleClose={handleClose}
            height={36}
            width={36}
            maxWidth={"sm"}
            buttonNameOne={"save"}
        >
            <AddCustomerPhoneForm />
        </FormModal>
    );
}

AddCustomerPhoneModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default AddCustomerPhoneModal;
