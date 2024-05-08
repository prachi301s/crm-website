//* mui components
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

//* custom components
import StatisticsDataBox from "../../../Statistics-Data/StatisticsDataBox";

//* mui-x-grid
import { DataGrid } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";

const ordersData = [
    {
        id: 1,
        label: "Frequency",
        value: 200,
    },
    {
        id: 2,
        label: "Last 365 Days",
        value: 200,
    },
    {
        id: 3,
        label: "Last Month",
        value: 200,
    },
    {
        id: 4,
        label: "Average Amount",
        value: 200,
    },
    {
        id: 5,
        label: "Last Order Days",
        value: 200,
    },
    {
        id: 6,
        label: "No. Orders",
        value: 200,
    },
    {
        id: 7,
        label: "First Order",
        value: 200,
    },
];

const yearName = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const SalesSummaryPanel = () => {
    const theme = useTheme();
    const data = [
        { id: 1, year: "2020" },
        { id: 2, year: "2020" },
        { id: 3, year: "2020" },
        { id: 4, year: "2020" },
        { id: 5, year: "2020" },
        { id: 6, year: "2020" },
        { id: 7, year: "2020" },
        { id: 8, year: "2020" },
    ];

    const getRows = () => {
        let rows = [];
        data?.forEach((agent) => {
            const { id, year } = agent;
            rows.push({
                id,
                year,
            });
        });
        return rows;
    };

    const columns = [
        {
            field: "year",
            headerName: "Year",
            width: 80,
        },
        ...yearName.map((col) => ({
            field: col?.toLocaleLowerCase(),
            headerName: col,
            minWidth: 50,
            flex: 1,
        })),
        {
            field: "Total",
            headerName: "Total",
            // flex: 1,
            minWidth: 60,
        },
    ];
    return (
        <Grid container spacing={1}>
            {ordersData?.map((order) => (
                <Grid item xs={3} key={order.id}>
                    <StatisticsDataBox label={order.label} quantity={order.value} />
                </Grid>
            ))}
            <Grid item xs={12}>
                <Paper sx={{ width: "100%", height: 170 }}>
                    <DataGrid
                        rowHeight={40}
                        rows={getRows()}
                        columns={columns}
                        sx={{
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: `${theme.palette.primary.dark}`,
                                color: `${theme.palette.secondary.main}`,
                            },
                            "& .MuiDataGrid-sortIcon": {
                                opacity: 1,
                                color: `${theme.palette.secondary.main}`,
                            },
                            "& .MuiDataGrid-menuIconButton": {
                                opacity: 1,
                                color: `${theme.palette.secondary.main}`,
                            },
                        }}
                        showCellVerticalBorder
                        density="compact"
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

export default SalesSummaryPanel;
