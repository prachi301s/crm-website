import PropTypes from "prop-types";

//* mui components
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";

//* react-hook-form
import { Controller } from "react-hook-form";

//* mui x components
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//* dependency for date picker
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";

export const ControllerDateField = ({
    mainLabel,
    control,
    name,
    // errorFlag,
    // errorText,
    openTo,
    shouldDisableYear,
    disableFuture,
    // lang,
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
                            <DatePicker
                                slotProps={{
                                    textField: {
                                        size: "small",
                                        variant: "filled",
                                        hiddenLabel: true,
                                    },
                                }}
                                inputFormat={"DD.MM.yyy"}
                                disableFuture={disableFuture}
                                shouldDisableYear={shouldDisableYear}
                                openTo={openTo}
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
ControllerDateField.propTypes = {
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
