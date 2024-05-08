import PropTypes from "prop-types";

//* libraries
import { useTranslation } from "react-i18next";

//* mui components
import DialogActions from "@mui/material/DialogActions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//* mui icons
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

//* custom components
import CustomIconButton from "../Elements/Icons/CustomIconButton";
import ModalLayout from "../Layout/Modal-Layout/ModalLayout";

const btnSx = {
    height: 54,
};

const SendEmailModal = ({ open, handleClose }) => {
    const { t } = useTranslation();
    return (
        <ModalLayout open={open} handleClose={handleClose} maxWidth={"sm"}>
            <Stack
                direction="row"
                justifyContent={"space-between"}
                alignItems={"center"}
                spacing={2}
                pt={3}
                pl={3}
                px={2}
            >
                <Typography variant="h6" textAlign={"center"}>
                    {t("send_email")}
                </Typography>
                <ClearIcon
                    onClick={handleClose}
                    sx={{
                        cursor: "pointer",
                    }}
                />
            </Stack>

            <DialogActions sx={{ justifyContent: "center", px: 2, mb: 1, mt: 3 }}>
                <CustomIconButton
                    variant={"contained"}
                    fullWidth
                    icon={<EmailOutlinedIcon fontSize="large" />}
                    name={"New blank Email"}
                    onClick={handleClose}
                    sx={btnSx}
                />

                <CustomIconButton
                    variant={"contained"}
                    fullWidth
                    icon={<EmailOutlinedIcon fontSize="large" />}
                    name={"New Email From A template"}
                />
                <CustomIconButton
                    variant={"contained"}
                    fullWidth
                    icon={<SummarizeOutlinedIcon fontSize="large" />}
                    name={"Perfume list"}
                    onClick={handleClose}
                    sx={btnSx}
                />
            </DialogActions>
        </ModalLayout>
    );
};

SendEmailModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default SendEmailModal;
