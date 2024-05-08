//* mui components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

//* mui-x components
import { DataGrid } from "@mui/x-data-grid";

//* custom components
import StatisticsDataBox from "../Statistics-Data/StatisticsDataBox";

//* libraries
import { useTranslation } from "react-i18next";

const BillingProductReceivedTable = () => {
    const { t } = useTranslation();

    const data = [
        {
            id: 1,
            code: "1",
            description: "",
            amount: "",
        },
        {
            id: 2,
            code: "1",
            description: "",
            amount: "",
        },
        {
            id: 3,
            code: "1",
            description: "",
            amount: "",
        },
        {
            id: 4,
            code: "1",
            description: "",
            amount: "",
        },
        {
            id: 5,
            code: "1",
            description: "",
            amount: "",
        },
        {
            id: 6,
            code: "1",
            description: "",
            amount: "",
        },
        {
            id: 7,
            code: "1",
            description: "",
            amount: "",
        },
        {
            id: 8,
            code: "1",
            description: "",
            amount: "",
        },
        {
            id: 9,
            code: "1",
            description: "",
            amount: "",
        },
        {
            id: 10,
            code: "1",
            description: "",
            amount: "",
        },
        {
            id: 11,
            code: "1",
            description: "",
            amount: "",
        },
        {
            id: 12,
            code: "1",
            description: "",
            amount: "",
        },
    ];

    const getRows = () => {
        let rows = [];
        data?.forEach((agent) => {
            const { id, code, description, amount } = agent;
            rows.push({
                id,
                code,
                description,
                amount,
            });
        });
        return rows;
    };

    const columns = [
        {
            field: "code",
            headerName: "Code",
            width: 280,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "description",
            headerName: "Description",
            flex: 1,
            minWidth: 150,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "amount",
            headerName: "Amount",
            // flex: 1,
            // minWidth: 150,
            width: 320,
            headerAlign: "center",
            align: "center",
        },
    ];

    return (
        <Grid container rowSpacing={2}>
            <Grid item xs={12}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                    {/* <Stack direction={"row"} spacing={2}> */}
                    <Grid container columnSpacing={2}>
                        <Grid item xs={3}>
                            <StatisticsDataBox
                                label={"product"}
                                isInput
                                // quantity={200}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <StatisticsDataBox
                                label={"amount"}
                                isInput
                                // quantity={200}

                            />
                        </Grid>
                    </Grid>
                    {/* </Stack> */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Stack direction={"row"} spacing={2}>
                            <Button
                                variant={"contained"}
                                size='small'
                                sx={{ px: 3 }}
                            >
                                {t("add")}
                            </Button>
                            <Button
                                variant={"contained"}
                                size='small'
                                sx={{ px: 3 }}
                            >
                                {t("modify")}
                            </Button>
                            <Button
                                variant={"contained"}
                                size='small'
                                sx={{ px: 3 }}
                            >
                                {t("remove")}
                            </Button>
                        </Stack>
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ height: 200, width: "100%" }}>
                    <DataGrid
                        rowHeight={40}
                        columnHeaderHeight={40}
                        rows={getRows()}
                        columns={columns}
                        showCellVerticalBorder
                        density='standard'
                        hideFooterPagination
                        hideFooterSelectedRowCount
                        hideFooter
                        disableRowSelectionOnClick
                        disableSelectionOnClick
                        disableColumnSelector
                        disableColumnMenu
                    />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default BillingProductReceivedTable;
