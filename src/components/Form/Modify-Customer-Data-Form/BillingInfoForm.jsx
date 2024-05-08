//* mui components
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";

//* libraries
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

//* custom components
import ControllerTextField from "../../Elements/TextField/ControllerTextField";
import ControllerSelectField from "../../Elements/TextField/ControllerSelectField";

const                                                                                                                                                       BillingInfoForm = () => {
    const { t } = useTranslation();
    const { control } = useForm({
        defaultValues: {
            companyName: "",
            address: "",
            city: "",
            state: "",
            country: "",
            typeOfClient: "",
            email: "",
            zip_code: "",
        },
    });
    return (
        <Grid container rowSpacing={2}>
            <Grid item xs={12}>
                <Grid item container columnSpacing={2}>
                    <Grid item xs={3}>
                        <ControllerTextField
                            control={control}
                            name={"companyName"}
                            mainLabel={t("company_name")}
                            variant={"filled"}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ControllerTextField
                            control={control}
                            name={"address"}
                            mainLabel={t("address")}
                            variant={"filled"}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <ControllerSelectField
                            control={control}
                            name={"city"}
                            mainLabel={t("city")}
                        >
                            {["type-1", "type-2", "type-3"].map((item) => (
                                <MenuItem key={item} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </ControllerSelectField>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid item container columnSpacing={2}>
                    <Grid item xs={4}>
                        <ControllerSelectField
                            control={control}
                            name={"state"}
                            mainLabel={t("state")}
                            variant={"filled"}
                        >
                            {["type-1", "type-2", "type-3"].map((item) => (
                                <MenuItem key={item} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </ControllerSelectField>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerSelectField
                            control={control}
                            name={"country"}
                            mainLabel={t("country")}
                            variant={"filled"}
                        >
                            {["type-1", "type-2", "type-3"].map((item) => (
                                <MenuItem key={item} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </ControllerSelectField>
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerSelectField
                            control={control}
                            name={"typeOfClient"}
                            mainLabel={t("type_of_client")}
                        >
                            {["type-1", "type-2", "type-3"].map((item) => (
                                <MenuItem key={item} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </ControllerSelectField>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid item container columnSpacing={2}>
                    <Grid item xs={8}>
                        <ControllerTextField
                            control={control}
                            name={"email"}
                            mainLabel={t("email")}
                            variant={"filled"}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <ControllerTextField
                            control={control}
                            name={"zip_code"}
                            mainLabel={t("zip_code")}
                            variant={"filled"}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default BillingInfoForm;
