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

const ScheduleForm = () => {
    const { t } = useTranslation();
    const { control } = useForm({
        defaultValues: {
            contact: "",
            reference: "",
            user: "",
            date: null,
            notes: "",
        }, // set initial values to empty object
    });
    return (
        <Grid container spacing={2} p={3}>
            <Grid item xs={6}>
                <ControllerTextField
                    control={control}
                    variant={"filled"}
                    name={"contact"}
                    mainLabel={t("contact")}
                />
            </Grid>

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
            <Grid item xs={12}>
                <ControllerTextField
                    control={control}
                    variant={"filled"}
                    name={"notes"}
                    multiline
                    minRows={3}
                    mainLabel={t("notes")}
                />
            </Grid>
        </Grid>
    );
};

export default ScheduleForm;
