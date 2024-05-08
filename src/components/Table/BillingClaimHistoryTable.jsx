//* mui components
import Paper from "@mui/material/Paper";

//* mui-x components
import { DataGrid } from "@mui/x-data-grid";

const BillingClaimHistoryTable = () => {
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
    );
};

export default BillingClaimHistoryTable;
