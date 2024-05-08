import PropTypes from "prop-types";

import { forwardRef } from "react";

//* mui components
import Dialog from "@mui/material/Dialog";
import Grow from "@mui/material/Grow";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Transition = forwardRef(function Transition(props, ref) {
    return <Grow ref={ref} {...props} />;
});

const ModalLayout = ({ children, open, handleClose, maxWidth }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Dialog
            maxWidth={maxWidth}
            fullWidth
            fullScreen={fullScreen}
            open={open}
            scroll='body'
            TransitionComponent={Transition}
            transitionDuration={500}
            keepMounted
            onClose={handleClose}
            aria-describedby='alert-dialog-slide-description'
            aria-labelledby='responsive-dialog-title'
        >
            {children}
        </Dialog>
    );
};

ModalLayout.propTypes = {
    children: PropTypes.node,
    handleClose: PropTypes.func,
    open: PropTypes.bool,
    maxWidth: PropTypes.string,
};

export default ModalLayout;
