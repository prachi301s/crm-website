//* mui component
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

//* custom component
// import SecondaryNavigation from "../../components/Navigation/SecondaryNavigation";
import CustomerInfoTab from "../../components/Tabs/Customer-Information/CustomerInfoTab";
import CallsInfoTab from "../../components/Tabs/Calls-Information/CallsInfoTab";

// import { Outlet } from "react-router-dom";
import CustomerMainDetailTab from "../../components/Tabs/Customer-Main-Detail/CustomerMainDetailTab";
import StartCallWorkForm from "../../components/Form/Start-Call-Form/StartCallWorkForm";

const Home = () => {
    return (
        <Grid container columnSpacing={1}>
            <Grid item md={8} xs={12}>
                {/* <Grid item container rowSpacing={1}>
                    <Grid item xs={12}>
                        <SecondaryNavigation />
                    </Grid>
                    <Grid item xs={12}>
                        <Outlet />
                    </Grid>
                </Grid> */}
                <Stack spacing={2}>
                    <CustomerMainDetailTab />
                    <StartCallWorkForm />
                </Stack>
            </Grid>
            <Grid item md={4} xs={12}>
                <Grid item container rowSpacing={1}>
                    <Grid item xs={12}>
                        <CustomerInfoTab />
                    </Grid>
                    <Grid item xs={12}>
                        <CallsInfoTab />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Home;
