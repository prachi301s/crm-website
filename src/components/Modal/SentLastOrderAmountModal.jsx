import PropTypes from "prop-types";

//* Action layout for Modal
import ActionModal from "../Layout/Modal-Layout/Action-Modals/ActionModal";

const SentLastOrderAmountModal = ({ open, handleClose }) => {
    return (
        // Sent Last Order Amount
        <ActionModal
            open={open}
            textOne={"the_amount_of_the_customers_last_order_has_been_sent"}
            handleClose={handleClose}
            height={34}
            width={34}
            button={1}
        />
    );
};

SentLastOrderAmountModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default SentLastOrderAmountModal;
