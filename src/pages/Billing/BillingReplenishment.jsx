//* mui component
import Grid from "@mui/material/Grid";

//*custom component
import CustomerInfoTab from "../../components/Tabs/Customer-Information/CustomerInfoTab";
import OrderLineInfoBox from "../../components/InfoBox/OrderLineInfoBox";
import QuickOrderLineInfoBox from "../../components/InfoBox/QuickOrderLineInfoBox";

//* mui icon
import CustomerMainDetailTab from "../../components/Tabs/Customer-Main-Detail/CustomerMainDetailTab";

function BillingReplenishment() {
    return (
        <Grid container columnSpacing={1}>
            <Grid item md={8} xs={12}>
                <Grid item container rowSpacing={1}>
                    <Grid item xs={12}>
                        <CustomerMainDetailTab />
                    </Grid>
                    <Grid item xs={12}>
                        <OrderLineInfoBox />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={4} xs={12}>
                <Grid item container rowSpacing={1}>
                    <Grid item xs={12}>
                        <CustomerInfoTab />
                    </Grid>
                    <Grid item xs={12}>
                        <QuickOrderLineInfoBox />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default BillingReplenishment;
