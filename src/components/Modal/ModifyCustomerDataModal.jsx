import PropTypes from "prop-types";

//* mui components
import Stack from "@mui/material/Stack";

//* Form layout for Modal
import FormModal from "../Layout/Modal-Layout/Form-Modals/FormModal";

//* mui icons
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

//* custom layout
import FormLayout from "../Layout/FormLayout";

//* custom components for form
import MainInfoForm from "../Form/Modify-Customer-Data-Form/MainInfoForm";
import BillingInfoForm from "../Form/Modify-Customer-Data-Form/BillingInfoForm";

const ModifyCustomerDataModal = ({ open, handleClose }) => {
    return (
        <FormModal
            open={open}
            Icon={<BorderColorOutlinedIcon fontSize="medium" />}
            heading={"modify_customer_data"}
            handleClose={handleClose}
            height={36}
            width={36}
            maxWidth={"lg"}
        >
            <Stack direction={"column"} spacing={2} p={2}>
                <FormLayout heading={"main_info"}>
                    <MainInfoForm />
                </FormLayout>
                <FormLayout heading={"billing_info"}>
                    <BillingInfoForm />
                </FormLayout>
            </Stack>
        </FormModal>
    );
};

ModifyCustomerDataModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default ModifyCustomerDataModal;
