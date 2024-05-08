import PropTypes from "prop-types";

//* mui components
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

//* react-hook-form
import { Controller } from "react-hook-form";

//* mui x components
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";

//* dependency for date picker
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

export const ControllerTimeField = ({
    mainLabel,
    control,
    name,
    // errorFlag,
    // errorText,
    ...props
}) => {
    return (
        <FormControl variant="outlined" fullWidth>
            <Typography component={"label"} fontWeight={500}>
                {mainLabel}
            </Typography>
            <Controller
                control={control}
                name={name}
                render={({ field: { onChange, value } }) => {
                    return (
                        <LocalizationProvider
                            dateAdapter={AdapterLuxon}
                            // adapterLocale={lang}
                        >
                            <TimePicker
                                slotProps={{
                                    textField: {
                                        size: "small",
                                        variant: "filled",
                                        hiddenLabel: true,
                                    },
                                }}
                                viewRenderers={{
                                    hours: renderTimeViewClock,
                                    minutes: renderTimeViewClock,
                                    seconds: renderTimeViewClock,
                                }}
                                value={value}
                                onChange={(value) => onChange(value)}
                                {...props}
                            />
                        </LocalizationProvider>
                    );
                }}
            />
        </FormControl>
    );
};
ControllerTimeField.propTypes = {
    control: PropTypes.any,
    disableFuture: PropTypes.any,
    // errorFlag: PropTypes.any,
    // errorText: PropTypes.string,
    mainLabel: PropTypes.string,
    // lang: PropTypes.any,
    name: PropTypes.string,
    openTo: PropTypes.any,
    shouldDisableYear: PropTypes.any,
};
