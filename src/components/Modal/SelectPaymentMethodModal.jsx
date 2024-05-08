import PropTypes from "prop-types";

//* Form layout for Modal
import FormModal from "../Layout/Modal-Layout/Form-Modals/FormModal";

//* custom components
import ControllerSelectField from "../Elements/TextField/ControllerSelectField";

//* mui components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";

//* mui icons
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

//* libraries
import { useForm } from "react-hook-form";
import ControllerTextField from "../Elements/TextField/ControllerTextField";

const PAYMENT_OPTION = [
    {
        value: "",
        label: "Select an option",
    },
    {
        value: "against_reimbursement",
        label: "Against Reimbursement",
    },
    {
        value: "bank",
        label: "Bank",
    },
    {
        value: "credit_card",
        label: "Credit Card",
    },
    {
        value: "transfer",
        label: "Transfer",
    },
];

const SelectPaymentMethodModal = ({ open, handleClose }) => {
    const { control, watch } = useForm({
        defaultValues: {
            paymentOption: null,
        },
    });
    const watchPayType = watch("paymentOption");
    return (
        // Schedule a call
        <FormModal
            open={open}
            Icon={<MonetizationOnOutlinedIcon fontSize="medium" />}
            heading={"Select Payment Method"}
            handleClose={handleClose}
            height={36}
            width={36}
            maxWidth={"sm"}
        >
            <Box p={3}>
                <ControllerSelectField control={control} name={"paymentOption"}>
                    {PAYMENT_OPTION.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                            {item.label}
                        </MenuItem>
                    ))}
                </ControllerSelectField>
                {watchPayType === "credit_card" && (
                    <Grid container mt={2} columnSpacing={2}>
                        <Grid item xs={6}>
                            <ControllerTextField
                                control={control}
                                name={"creditCardNumber"}
                                variant="filled"
                                placeholder={"Enter Credit Card Number"}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <ControllerTextField
                                control={control}
                                name={"creditCardExp"}
                                variant="filled"
                                placeholder={"Credit Card Expiration"}
                            />
                        </Grid>
                    </Grid>
                )}
            </Box>
        </FormModal>
    );
};

SelectPaymentMethodModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default SelectPaymentMethodModal;
