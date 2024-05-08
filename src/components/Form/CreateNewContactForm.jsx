//* mui components
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";

//* libraries
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

//* custom components
import ControllerTextField from "../Elements/TextField/ControllerTextField";
import ControllerSelectField from "../Elements/TextField/ControllerSelectField";

const CreateNewContactForm = () => {
    const { t } = useTranslation();
    const { control } = useForm({
        defaultValues: {
            companyName: "",
            contact: "",
            typeClient: "",
            address: "",
            city: "",
            state: "",
            country: "",
            zipCode: "",
            phone: "",
            businessName: "",
            nif: "",
        },
    });
    return (
        <Grid container spacing={2} p={3}>
            <Grid item xs={4}>
                <ControllerTextField
                    control={control}
                    variant={"filled"}
                    name={"companyName"}
                    mainLabel={t("company_name")}
                />
            </Grid>
            <Grid item xs={4}>
                <ControllerTextField
                    control={control}
                    variant={"filled"}
                    name={"contact"}
                    mainLabel={t("contact")}
                />
            </Grid>
            <Grid item xs={4}>
                <ControllerSelectField
                    control={control}
                    name={"typeClient"}
                    mainLabel={t("type_client")}
                >
                    {["type-1", "type-2", "type-3"].map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </ControllerSelectField>
            </Grid>
            <Grid item xs={8}>
                <ControllerTextField
                    control={control}
                    variant={"filled"}
                    name={"address"}
                    mainLabel={t("address")}
                />
            </Grid>
            <Grid item xs={4}>
                <ControllerTextField
                    control={control}
                    variant={"filled"}
                    name={"city"}
                    mainLabel={t("city")}
                />
            </Grid>
            <Grid item xs={4}>
                <ControllerSelectField
                    control={control}
                    name={"state"}
                    mainLabel={t("state")}
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
                >
                    {["type-1", "type-2", "type-3"].map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </ControllerSelectField>
            </Grid>
            <Grid item xs={4}>
                <ControllerTextField
                    control={control}
                    variant={"filled"}
                    name={"zipCode"}
                    mainLabel={t("zip_code")}
                />
            </Grid>
            <Grid item xs={4}>
                <ControllerTextField
                    control={control}
                    variant={"filled"}
                    name={"phone"}
                    mainLabel={t("phone")}
                />
            </Grid>
            <Grid item xs={4}>
                <ControllerTextField
                    control={control}
                    variant={"filled"}
                    name={"businessName"}
                    mainLabel={t("business_name")}
                />
            </Grid>
            <Grid item xs={4}>
                <ControllerTextField
                    control={control}
                    variant={"filled"}
                    name={"nif"}
                    mainLabel={t("nif_dni")}
                />
            </Grid>
        </Grid>
    );
};

export default CreateNewContactForm;
