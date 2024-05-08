import PropTypes from "prop-types";

//* mui components
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";

//* libraries
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

const ControllerCheckbox = ({
    name,
    mainLabel,
    control,
    checkboxLabel,
    checkboxLabelStyle,
    checkboxStyle,
    checkboxTypographyStyle,
    disableMainLabelSpace,
}) => {
    const { t } = useTranslation();
    return (
        <>
            {mainLabel && (
                <Typography component={"label"} fontWeight={500}>
                    {mainLabel}
                </Typography>
            )}
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <FormControlLabel
                        sx={{
                            mt: !disableMainLabelSpace && 2,
                            margin: 0,
                            ...checkboxLabelStyle,
                        }}
                        slotProps={{
                            typography: {
                                fontWeight: 700,
                                fontSize: 14,
                                ...checkboxTypographyStyle,
                            },
                        }}
                        control={
                            <Checkbox
                                sx={{ fontSize: 16, ...checkboxStyle }}
                                checked={field?.value}
                                onChange={(e) => field?.onChange(e.target.checked)}
                            />
                        }
                        label={t(checkboxLabel)}
                    />
                )}
            />
        </>
    );
};

ControllerCheckbox.propTypes = {
    control: PropTypes.any.isRequired,
    mainLabel: PropTypes.string,
    name: PropTypes.string.isRequired,
    checkboxLabel: PropTypes.string,
    checkboxLabelStyle: PropTypes.object,
    checkboxStyle: PropTypes.object,
    checkboxTypographyStyle: PropTypes.object,
    disableMainLabelSpace: PropTypes.bool,
};

export default ControllerCheckbox;
