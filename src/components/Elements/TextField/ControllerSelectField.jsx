import PropTypes from "prop-types";

//* mui components
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

//* react-hook-form
import { Controller } from "react-hook-form";

const ControllerSelectField = ({ children, size, mainLabel, name, control, errorFlag, props }) => {
    return (
        <FormControl variant="filled" fullWidth size={size || "small"}>
            {mainLabel && (
                <Typography component={"label"} fontWeight={500}>
                    {mainLabel}
                </Typography>
            )}
            <Controller
                control={control}
                name={name}
                render={({ field }) => {
                    return (
                        <Select displayEmpty hiddenLabel {...field} error={errorFlag} {...props}>
                            {children}
                        </Select>
                    );
                }}
            />
        </FormControl>
    );
};

ControllerSelectField.propTypes = {
    children: PropTypes.node,
    control: PropTypes.any,
    errorFlag: PropTypes.any,
    mainLabel: PropTypes.string,
    size: PropTypes.string,
    name: PropTypes.string,
    props: PropTypes.object,
};

export default ControllerSelectField;
