import PropTypes from "prop-types";

//* mui components
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//* libraries
import { useTranslation } from "react-i18next";

const FormLayout = ({ heading, children }) => {
    const { t } = useTranslation();
    return (
        <Stack
            spacing={1}
            sx={{
                backgroundColor: " #fff",
                border: "1px solid #E7E7E7",
                boxShadow: "0 4px 12px #0F11140F",
                padding: "20px",
                borderRadius: "10px",
            }}
        >
            <Typography variant={"h5"}>{t(heading)}</Typography>
            {children}
        </Stack>
    );
};

FormLayout.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.node,
};

export default FormLayout;
