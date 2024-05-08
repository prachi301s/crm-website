import PropTypes from "prop-types";

//* mui components
import { Button } from "@mui/material";

//* libraries
import { useTranslation } from "react-i18next";

const CustomIconButton = ({ variant, icon, name, ...props }) => {
    const { t } = useTranslation();
    return (
        <Button variant={variant} startIcon={icon} size='small' {...props}>
            {t(name)}
        </Button>
    );
};

CustomIconButton.propTypes = {
    icon: PropTypes.any,
    name: PropTypes.string,
    variant: PropTypes.string,
};

export default CustomIconButton;
