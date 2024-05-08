import Grid from "@mui/material/Grid";
import PageLayout from "../../components/Layout/PageLayout";
import BillingPendingListTable from "../../components/Table/BillingPendingListTable";

const BillingPendingReturn = () => {
    return (
        <PageLayout
            pageHeading={"pending_return_list"}
            button={["send_to_excel"]}
        >
            <Grid container>
                <Grid
                    item
                    xs={12}
                    sx={{
                        backgroundColor: "#fff",
                        border: "1px solid #E7E7E7",
                        boxShadow: "0 4px 12px #0F11140F",
                        padding: "10px",
                        borderRadius: "10px",
                    }}
                >
                    <BillingPendingListTable />
                </Grid>
            </Grid>
        </PageLayout>
    );
};

export default BillingPendingReturn;
