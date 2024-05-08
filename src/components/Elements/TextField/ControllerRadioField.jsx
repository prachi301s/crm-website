import PropTypes from "prop-types";

//* mui components
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

//* react-hook-form
import { Controller } from "react-hook-form";
import { RadioGroup } from "@mui/material";
function ControllerRadioField({
    row,
    children,
    mainLabel,
    control,
    name,
    errorFlag,
    errorText,
}) {
    return (
        <FormControl variant='outlined' fullWidth size={"small"}>
            {mainLabel && (
                <Typography component={"label"} fontWeight={500}>
                    {mainLabel}
                </Typography>
            )}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <RadioGroup row={row} {...field}>
                        {children}
                    </RadioGroup>
                )}
            />
            {errorFlag ? (
                <Typography variant='caption' color='error'>
                    {errorText}
                </Typography>
            ) : null}
        </FormControl>
    );
}

ControllerRadioField.propTypes = {
    control: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    row: PropTypes.any,
    mainLabel: PropTypes.string,
    children: PropTypes.node,
    errorFlag: PropTypes.bool,
    errorText: PropTypes.string,
};

export default ControllerRadioField;
