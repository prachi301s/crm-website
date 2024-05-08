import PropTypes from "prop-types";

//* mui components
import DialogActions from "@mui/material/DialogActions";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//* mui icons
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

// * custom layout
import ModalLayout from "../ModalLayout";

// * custom components
import CustomIcon from "../../../Elements/Icons/CustomIcon";
import CustomIconButton from "../../../Elements/Icons/CustomIconButton";

//* libraries
import { useTranslation } from "react-i18next";

const FormModal = ({
    children,
    open,
    heading,
    Icon,
    handleClose,
    height,
    width,
    maxWidth,
    buttonNameOne,
    buttonNameTwo,
}) => {
    const { t } = useTranslation();
    return (
        <ModalLayout
            open={open}
            handleClose={handleClose}
            maxWidth={maxWidth || "md"}
        >
            <Stack
                direction='row'
                justifyContent={"initial"}
                alignItems={"center"}
                spacing={2}
                pt={3}
                px={3}
            >
                {Icon && (
                    <CustomIcon Icon={Icon} height={height} width={width} />
                )}
                <Typography variant='h6'>{t(heading)}</Typography>
            </Stack>

            {children}

            <DialogActions sx={{ my: 1, mx: 2 }}>
                <CustomIconButton
                    sx={{ px: 5 }}
                    variant={"contained"}
                    icon={<TaskAltOutlinedIcon fontSize='small' />}
                    name={t(buttonNameOne || "accept")}
                />
                <CustomIconButton
                    sx={{ px: 5 }}
                    variant={"outlined"}
                    icon={<CancelOutlinedIcon fontSize='small' />}
                    name={t(buttonNameTwo || "cancel")}
                    onClick={handleClose}
                />
            </DialogActions>
        </ModalLayout>
    );
};

FormModal.propTypes = {
    children: PropTypes.node,
    handleClose: PropTypes.func.isRequired,
    heading: PropTypes.string,
    Icon: PropTypes.any,
    textOne: PropTypes.string,
    textTwo: PropTypes.string,
    open: PropTypes.bool.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
    maxWidth: PropTypes.string,
    buttonNameOne: PropTypes.string,
    buttonNameTwo: PropTypes.string,
};

export default FormModal;
