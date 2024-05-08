//* mui components
import Grid from "@mui/material/Grid";

//* custom components
import ControllerTextField from "../../Elements/TextField/ControllerTextField";

//* libraries
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const BillingAgencyIssueNumberForm = () => {
    const { t } = useTranslation();
    const { control } = useForm({
        defaultValues: {
            typeNumber: "",
        },
    });
    return (
        <Grid container>
            <Grid item xs={12}>
                <ControllerTextField
                    control={control}
                    name={"typeNumber"}
                    placeholder={t("type_number")}
                    multiline
                    minRows={3}
                />
            </Grid>
        </Grid>
    );
};

export default BillingAgencyIssueNumberForm;
