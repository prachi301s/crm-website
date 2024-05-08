import PropTypes from "prop-types";

import { Fragment } from "react";

//* libraries
import { useTranslation } from "react-i18next";

//* mui components
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//* mui icons
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";

//* custom components
import CustomIcon from "../../../Elements/Icons/CustomIcon";
import CustomIconButton from "../../../Elements/Icons/CustomIconButton";

//* custom layout
import ModalLayout from "../ModalLayout";

const ActionModal = ({
    children,
    open,
    Icon,
    heading,
    textOne,
    textTwo,
    handleClose,
    height,
    width,
    maxWidth,
    button,
    buttonName,
    buttonNameOne,
    buttonNameTwo,
    justifyContent,
}) => {
    const { t } = useTranslation();
    return (
        <ModalLayout
            open={open}
            handleClose={handleClose}
            maxWidth={maxWidth || "xs"}
        >
            <Stack
                direction='row'
                justifyContent={justifyContent || "center"}
                alignItems={"center"}
                spacing={2}
                pt={3}
                pl={justifyContent && 3}
                px={2}
            >
                {Icon && (
                    <CustomIcon Icon={Icon} height={height} width={width} />
                )}
                {heading && (
                    <Typography variant='h6' textAlign={"center"}>
                        {t(heading)}
                    </Typography>
                )}
            </Stack>

            {children ? (
                children
            ) : (
                <Fragment>
                    {textOne || textTwo ? (
                        <DialogContent>
                            {textOne && (
                                <DialogContentText color="black" textAlign={"center"}>
                                    {t(textOne)}
                                </DialogContentText>
                            )}
                            {textTwo && (
                                <DialogContentText color="black" textAlign={"center"} my={1}>
                                    {t(textTwo)}
                                </DialogContentText>
                            )}
                        </DialogContent>
                    ) : null}
                </Fragment>
            )}
            <DialogActions sx={{ justifyContent: "center", px: 10, mb: 1, mt : 3 }}>
                {button === 1 ? (
                    <CustomIconButton
                        variant={"contained"}
                        fullWidth
                        icon={<TaskAltOutlinedIcon fontSize='small' />}
                        name={t(buttonName || "ok")}
                        onClick={handleClose}
                    />
                ) : (
                    <>
                        <CustomIconButton
                            variant={"contained"}
                            fullWidth
                            icon={<TaskAltOutlinedIcon fontSize='small' />}
                            name={t(buttonNameOne || "yes")}
                        />
                        <CustomIconButton
                            variant={"outlined"}
                            fullWidth
                            icon={<CancelOutlinedIcon fontSize='small' />}
                            name={t(buttonNameTwo || "no")}
                            onClick={handleClose}
                        />
                    </>
                )}
            </DialogActions>
        </ModalLayout>
    );
};

ActionModal.propTypes = {
    children: PropTypes.node,
    handleClose: PropTypes.func.isRequired,
    heading: PropTypes.string,
    maxWidth: PropTypes.string,
    Icon: PropTypes.any,
    textOne: PropTypes.string,
    textTwo: PropTypes.string,
    open: PropTypes.bool.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
    button: PropTypes.number,
    buttonName: PropTypes.string,
    buttonNameOne: PropTypes.string,
    buttonNameTwo: PropTypes.string,
    justifyContent: PropTypes.string,
};

export default ActionModal;
