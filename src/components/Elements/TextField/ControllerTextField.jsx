import PropTypes from "prop-types";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import { Controller } from "react-hook-form";


const ControllerTextField = ({
  control,
  name,
  mainLabel,
  placeholder,
  size,
  disableFullWidth,
  errorFlag,
  errorText,
  icon,
  disabled,
  ...props
}) => {
  return (
    <FormControl variant="outlined" fullWidth={!disableFullWidth}>
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
            <TextField
              size={size || "small"}
              placeholder={placeholder || mainLabel}
              hiddenLabel
              fullWidth
              error={errorFlag}
              helperText={errorText}
              // disabled={disabled}
              {...field}
              {...props}
             
              InputProps={{
                startAdornment: icon && (
                  <InputAdornment position="start">{icon}</InputAdornment>
                ),
              }}
            />
          );
        }}
      />
    </FormControl>
  );
};

ControllerTextField.propTypes = {
  control: PropTypes.any.isRequired,
  disableFullWidth: PropTypes.any,
  errorFlag: PropTypes.bool,
  errorText: PropTypes.string,
  mainLabel: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
};

export default ControllerTextField;

