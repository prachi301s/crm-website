import PropTypes from "prop-types";

//* mui components
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

//* Form layout for Modal
import FormModal from "../Layout/Modal-Layout/Form-Modals/FormModal";

//* mui icons
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

//* custom layout
import FormLayout from "../Layout/FormLayout";

//* custom components for form
import MainInfoForm from "../Form/Modify-Customer-Data-Form/MainInfoForm";
import BillingInfoForm from "../Form/Modify-Customer-Data-Form/BillingInfoForm";
import ControllerRadioField from "../Elements/TextField/ControllerRadioField";
import { useForm } from "react-hook-form";

const ModifyOrderLineModal = ({ open, handleClose }) => {
    const { control } = useForm();
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
                <FormLayout heading={"More Info"}>
                    <ControllerRadioField row control={control} name="updateInfoOption">
                        {[
                            { id: 1, label: "Update Info Forever", value: "updateInfoForever" },
                            {
                                id: 1,
                                label: "Update Info ONLY for this order",
                                value: "updateInfoOnthisOrder",
                            },
                        ].map((option) => (
                            <FormControlLabel
                                key={option.id}
                                label={option.label}
                                value={option.value}
                                control={<Radio />}
                            />
                        ))}
                    </ControllerRadioField>
                </FormLayout>
            </Stack>
        </FormModal>
    );
};

ModifyOrderLineModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default ModifyOrderLineModal;
