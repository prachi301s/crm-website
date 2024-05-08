import PropTypes from "prop-types";
import MobileEditForm from "../Form/Mobile-Form/MobileEditForm";
import FormModal from "../Layout/Modal-Layout/Form-Modals/FormModal";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const CustomModificationModal = ({ open, handleClose, heading }) => {
    return (
        <FormModal
            open={open}
            handleClose={handleClose}
            heading={heading || "phone"}
            Icon={<EditOutlinedIcon fontSize='medium' />}
            buttonNameOne={"yes"}
            buttonNameTwo={"no"}
            height={36}
            width={36}
            maxWidth={"xs"}
        >
            <MobileEditForm />
        </FormModal>
    );
};

CustomModificationModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    heading: PropTypes.string,
    open: PropTypes.bool.isRequired,
};

export default CustomModificationModal;
