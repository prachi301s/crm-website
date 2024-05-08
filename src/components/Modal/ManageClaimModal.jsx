import PropTypes from "prop-types";

//* Action layout for Modal
import ActionModal from "../Layout/Modal-Layout/Action-Modals/ActionModal";

//* mui icons
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import BillingManageClaimForm from "../Form/Billing-Client-Form/BillingManageClaimForm";
import FormModal from "../Layout/Modal-Layout/Form-Modals/FormModal";
import ReceiptIcon from '@mui/icons-material/Receipt';

const ManageClaimModal = ({
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
      Icon={<ReceiptIcon fontSize="medium" />}
      heading={"Make a claim to the transport agency"}
      handleClose={handleClose}
      height={36}
      width={36}
      maxWidth={"sm"}
      // buttonNameOne={"Accept"}
    >
      <BillingManageClaimForm/>
    </FormModal>
  );
};

export default ManageClaimModal;
