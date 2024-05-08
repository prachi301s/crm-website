//* libraries
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

//* mui components
import Grid from "@mui/material/Grid";

//* custom components
import ControllerTextField from "../Elements/TextField/ControllerTextField";
import ControllerSelectField from "../Elements/TextField/ControllerSelectField";

const PassNoteColleagueForm = () => {
    const { t } = useTranslation();
    const { control } = useForm({
        defaultValues: {
            user: "",
            notes: "",
        }, // set initial values to empty object or array if you want.
    });
    return (
        <Grid container spacing={2} p={3}>
            <Grid item xs={12}>
                <ControllerSelectField
                    control={control}
                    variant={"filled"}
                    name={"user"}
                    mainLabel={t("user")}
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

export default PassNoteColleagueForm;
