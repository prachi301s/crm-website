//* mui components
import Grid from "@mui/material/Grid";

//* libraries
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

//* custom components
import ControllerTextField from "../Elements/TextField/ControllerTextField";

const SendWhatsappForm = () => {
    const { t } = useTranslation();
    const { control } = useForm({
        defaultValues: {
            notes: "",
        },
    });
    return (
        <Grid container p={3}>
            <Grid item xs={12}>
                <ControllerTextField
                    control={control}
                    name={"notes"}
                    mainLabel={t("notes")}
                    placeholder={t("notes")}
                    variant={"filled"}
                    multiline
                    minRows={5}
                />
            </Grid>
        </Grid>
    );
};

export default SendWhatsappForm;
