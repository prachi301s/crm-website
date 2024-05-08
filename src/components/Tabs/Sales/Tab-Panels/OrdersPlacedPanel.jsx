//* mui components
import { useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";

//* mui-x-grid
import { DataGrid } from "@mui/x-data-grid";

//date
import { DateTime } from "luxon";

const date = DateTime.now().toFormat("dd-MM-yy");

const OrdersPlacedPanel = () => {
    const theme = useTheme();
    const data = [
        {
            id: 1,
            orderNo: "2-3068",
            date: date,
            amount: 50,
            agency: "Our Media",
            state: "",
            incidence: "",
        },
        {
            id: 2,
            orderNo: "2-3068",
            date: date,
            amount: 50,
            agency: "Express post",
            state: "",
            incidence: "",
        },
        { id: 3, orderNo: "2-3068", date: date, amount: 50, agency: "", state: "", incidence: "" },
        { id: 4, orderNo: "2-3068", date: date, amount: "", agency: "", state: "", incidence: "" },
        { id: 5, orderNo: "2-3068", date: date, amount: "", agency: "", state: "", incidence: "" },
        { id: 6, orderNo: "2-3068", date: date, amount: "", agency: "", state: "", incidence: "" },
        { id: 7, orderNo: "2-3068", date: date, amount: "", agency: "", state: "", incidence: "" },
        { id: 8, orderNo: "2-3068", date: date, amount: "", agency: "", state: "", incidence: "" },
    ];

    const getRows = () => {
        let rows = [];
        data?.forEach((agent) => {
            const { id, orderNo, date, amount, agency, state, incidence } = agent;
            rows.push({
                id,
                orderNo,
                date,
                amount,
                agency,
                state,
                incidence,
            });
        });
        return rows;
    };

    const columns = [
        {
            field: "orderNo",
            headerName: "Order No.",
            width: 250,
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
            minWidth: 60,
        },
        {
            field: "amount",
            headerName: "Amount",
            flex: 1,
            minWidth: 60,
        },
        {
            field: "agency",
            headerName: "Agency",
            flex: 1,
            minWidth: 60,
        },
        {
            field: "state",
            headerName: "State",
            flex: 1,
            minWidth: 60,
        },
        {
            field: "incidence",
            headerName: "Incidence",
            flex: 1,
            minWidth: 60,
        },
    ];

    return (
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
    );
};

export default OrdersPlacedPanel;
