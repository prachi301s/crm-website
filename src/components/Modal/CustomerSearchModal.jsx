import PropTypes from "prop-types";

//* form
import CustomerSearchForm from "../Form/CustomerSearchForm";

//* Action layout for Modal
import ActionModal from "../Layout/Modal-Layout/Action-Modals/ActionModal";

const CustomerSearchModal = ({ open, handleClose }) => {
    return (
        <ActionModal
            open={open}
            heading={"contact_search_center"}
            handleClose={handleClose}
            button={1}
            maxWidth={"sm"}
            justifyContent={"initial"}
        >
            <CustomerSearchForm />
        </ActionModal>
    );
};

CustomerSearchModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default CustomerSearchModal;
