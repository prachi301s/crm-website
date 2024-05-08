//*  mui component
import Grid from "@mui/material/Grid";

//* hook form
import { useForm } from "react-hook-form";

//* custom component
import ControllerCheckbox from "../../../Elements/Checkbox/ControllerCheckbox";
import ShowData from "../../../Display-Data/ShowData";

const checkboxStyle = {
    padding: "4px",
};

const BillingInfoPanel = () => {
    const { control } = useForm({
        defaultValues: {
            businessName: "",
            tin: "",
            address: "",
            city: "",
            state: "",
            country: "",
            zipcode: "",
        },
    });
    return (
        <Grid container rowSpacing={1}>
            <Grid item xs={12}>
                <ShowData dataValue={"Business name"} />
            </Grid>
            <Grid item container spacing={1}>
                <Grid item xs={6}>
                    <ShowData dataValue={"Tin"} />
                </Grid>
                <Grid item xs={6}>
                    <ShowData dataValue={"Address"} />
                </Grid>
                <Grid item xs={6}>
                    <ShowData dataValue={"City"} />
                </Grid>
                <Grid item xs={6}>
                    <ShowData dataValue={"State"} />
                </Grid>
                <Grid item xs={6}>
                    <ShowData dataValue={"Country"} />
                </Grid>
                <Grid item xs={6}>
                    <ShowData dataValue={"zipcode"} />
                </Grid>
            </Grid>
            <Grid item container>
                <Grid item xs={12}>
                    <ControllerCheckbox
                        control={control}
                        name="hasNoEmail"
                        checkboxLabel={"Customer has no Email"}
                        checkboxStyle={checkboxStyle}
                        disableMainLabelSpace
                    />
                </Grid>
                <Grid item xs={12}>
                    <ControllerCheckbox
                        control={control}
                        name="noCallWanted"
                        checkboxLabel={"Customer does not want Calls"}
                        checkboxStyle={checkboxStyle}
                        disableMainLabelSpace
                    />
                </Grid>
                <Grid item xs={12}>
                    <ControllerCheckbox
                        control={control}
                        name="noEmailWanted"
                        checkboxLabel={"Customer does not want Emails"}
                        checkboxStyle={checkboxStyle}
                        disableMainLabelSpace
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default BillingInfoPanel;
