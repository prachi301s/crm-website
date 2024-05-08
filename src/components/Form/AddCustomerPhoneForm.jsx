//*  mui component
import Grid from "@mui/material/Grid";

//* libraries
import { useForm } from "react-hook-form";

//* custom components
import ControllerTextField from "../Elements/TextField/ControllerTextField";

function AddCustomerPhoneForm() {
    const { control } = useForm({
        defaultValues: {
            phone: "",
            label: "",
        },
    });
    return (
        <Grid container spacing={2} p={3}>
            <Grid item xs={12}>
                <ControllerTextField
                    control={control}
                    name={"name"}
                    variant='filled'
                    mainLabel={"Phone No."}
                    // placeholder={"Phone no."}
                />
            </Grid>
            <Grid item xs={12}>
                <ControllerTextField
                    control={control}
                    name={"name"}
                    variant='filled'
                    mainLabel={"Label"}
                    // placeholder={""}
                />
            </Grid>
        </Grid>
    );
}

export default AddCustomerPhoneForm;
