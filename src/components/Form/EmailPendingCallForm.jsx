//* libraries
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

//* mui components
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";

//* custom components
import ControllerTextField from "../Elements/TextField/ControllerTextField";
import ControllerSelectField from "../Elements/TextField/ControllerSelectField";
import { ControllerDateField } from "../Elements/TextField/ControllerDateField";
import ControllerCheckbox from "../Elements/Checkbox/ControllerCheckbox";

const EmailPendingCallForm = () => {
    const { t } = useTranslation();
    const { control } = useForm({
        defaultValues: {
            reference: "",
            user: "",
            date: null,
            setAnAlarm: null,
            notes: "",
        },
    });
    return (
        <Grid container spacing={3} p={3}>
            <Grid item xs={6}>
                <ControllerSelectField
                    control={control}
                    name={"reference"}
                    mainLabel={t("reference")}
                >
                    {["type-1", "type-2", "type-3"].map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </ControllerSelectField>
            </Grid>
            <Grid item xs={6}>
                <ControllerSelectField
                    control={control}
                    name={"user"}
                    mainLabel={t("user")}
                >
                    {["type-1", "type-2", "type-3"].map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </ControllerSelectField>
            </Grid>
            <Grid item xs={6}>
                <ControllerDateField
                    control={control}
                    name={"date"}
                    variant={"filled"}
                    mainLabel={t("date")}
                />
            </Grid>
            <Grid item xs={6}>
                <ControllerCheckbox
                    control={control}
                    name={"setAnAlarm"}
                    checkboxLabel={"set_an_alarm"}
                    checkboxStyle={{
                        fontSize: 28,
                    }}
                />
            </Grid>
            <Grid item xs={12}>
                <ControllerTextField
                    control={control}
                    name={"notes"}
                    mainLabel={"notes"}
                    multiline
                    minRows={3}
                />
            </Grid>
        </Grid>
    );
};

export default EmailPendingCallForm;
