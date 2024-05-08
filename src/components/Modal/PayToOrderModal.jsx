import PropTypes from "prop-types";

//* Action layout for Modal
import ActionModal from "../Layout/Modal-Layout/Action-Modals/ActionModal";

//* mui icons
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import BillingPayOderForm from "../Form/Billing-Client-Form/BillingPayOderForm";
import FormModal from "../Layout/Modal-Layout/Form-Modals/FormModal";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";

const PayToOrderModal = ({
  open,
  handleClose,
  heading,
  textOne,
  textTwo,
  Icon,
}) => {
  return (
    // Delete modal
    <FormModal
      open={open}
        Icon={<ThumbsUpDownIcon fontSize="medium" />}        /*Not proper icon */
      heading={"Pay Order"}
      handleClose={handleClose}
      height={36}
      width={36}
      maxWidth={"sm"}
      // buttonNameOne={"Accept"}
    >
      <BillingPayOderForm />
    </FormModal>
  );
};

export default PayToOrderModal;
