//* libraries
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

//* mui components
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";

//* custom components
import ControllerSelectField from "../Elements/TextField/ControllerSelectField";
import ControllerTextField from "../Elements/TextField/ControllerTextField";

const CompleteACallForm = () => {
    const { t } = useTranslation();
    const { control } = useForm({
        defaultValues: {
            result: "",
            notes: "",
        },
    });
    return (
        <Grid container spacing={3} p={3}>
            <Grid item xs={12}>
                <ControllerSelectField
                    control={control}
                    name={"result"}
                    mainLabel={t("result")}
                >
                    {["type-1", "type-2", "type-3"].map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </ControllerSelectField>
            </Grid>
            <Grid item xs={12}>
                <ControllerTextField
                    control={control}
                    name={"notes"}
                    mainLabel={t("notes")}
                    variant={"filled"}
                    multiline
                    minRows={5}
                />
            </Grid>
        </Grid>
    );
};

export default CompleteACallForm;
