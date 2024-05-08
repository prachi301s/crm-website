//* mui components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";

//* custom layout
import PageLayout from "../../components/Layout/PageLayout";
import TableLayout from "../../components/Layout/TableLayout";
import TableLayoutHeader from "../../components/Headers/TableLayoutHeader";

//* forms
import BillingSearchListForm from "../../components/Form/Billing-Client-Form/BillingSearchListForm";

//* custom components
import StatisticsDataBox from "../../components/Statistics-Data/StatisticsDataBox";

//* table
import BillingSalesListTable from "../../components/Table/BillingSalesListTable";

//* library
import { useTranslation } from "react-i18next";

const BillingSalesList = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    return (
        <PageLayout pageHeading={"sales_list"}>
            <Stack spacing={2}>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid item container columnSpacing={2}>
                            <Grid item xs={4}>
                                <Box
                                    sx={{
                                        backgroundColor: `${theme.palette.secondary.main}`,
                                        border: `1px solid ${theme.palette.primary.light}`,
                                        boxShadow: "0 4px 12px #0F11140F",
                                        padding: "10px",
                                        borderRadius: "10px",
                                    }}
                                >
                                    <BillingSearchListForm />
                                </Box>
                            </Grid>
                            <Grid item xs={8}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: `${theme.palette.secondary.main}`,
                                        border: `1px solid ${theme.palette.primary.light}`,
                                        boxShadow: "0 4px 12px #0F11140F",
                                        padding: "10px",
                                        borderRadius: "10px",
                                        height: "100%",
                                    }}
                                >
                                    <Stack
                                        direction={"row"}
                                        spacing={2}
                                        alignItems={"center"}
                                        justifyContent={"center"}
                                    >
                                        <Button variant={"contained"}>
                                            {t("order_do_not_prepare")}
                                        </Button>
                                        <Button variant={"contained"}>
                                            {t("order_stopped_in_shipments")}
                                        </Button>
                                        <Button variant={"contained"}>
                                            {t(
                                                "see_order_pending_authorized_gift"
                                            )}
                                        </Button>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={12}>
                        <TableLayout>
                            <TableLayoutHeader buttons={["send_to_excel"]}>
                                <StatisticsDataBox
                                    label={"number_of_orders"}
                                    quantity={200}
                                    containerStyleProps={{ width: 200 }}
                                    labelStyleProps={{ fontSize: 14 }}
                                />

                                <StatisticsDataBox
                                    label={"total_amount_of_orders"}
                                    quantity={200}
                                    containerStyleProps={{ width: 240 }}
                                    labelStyleProps={{ fontSize: 14 }}
                                />
                            </TableLayoutHeader>
                            <BillingSalesListTable />
                        </TableLayout>
                    </Grid>
                </Grid>
            </Stack>
        </PageLayout>
    );
};

export default BillingSalesList;
