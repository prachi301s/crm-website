//* mui components
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

//* mui-x components
import { DataGrid } from "@mui/x-data-grid";

//* libraries
import { DateTime } from "luxon";

const date = DateTime.now().toFormat("dd/MM/yy");
const time = DateTime.now().toFormat("hh:mm");

const AdminStockCallSystemTable = () => {
    const data = [
        {
            id: 1,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 2,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 3,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 4,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 5,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 6,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 7,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 8,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 9,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 11,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 12,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 13,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 14,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 15,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 16,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 17,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 18,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
        {
            id: 19,
            operator: "2020",
            date: date,
            hour: time,
            type: 30,
            reason: "Hello",
            duration: 1,
            telephone: 30,
        },
    ];

    const getRows = () => {
        let rows = [];
        data?.forEach((agent) => {
            const {
                id,
                operator,
                date,
                hour,
                type,
                reason,
                duration,
                telephone,
            } = agent;
            rows.push({
                id,
                operator,
                date,
                hour,
                type,
                reason,
                duration,
                telephone,
            });
        });
        return rows;
    };

    const columns = [
        {
            field: "operator",
            headerName: "Operator",
            width: 180,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
            minWidth: 170,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "hour",
            headerName: "Hour",
            flex: 1,
            minWidth: 170,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "type",
            headerName: "Type",
            flex: 1,
            minWidth: 30,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "reason",
            headerName: "Reason",
            flex: 1,
            minWidth: 30,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "duration",
            headerName: "Duration",
            flex: 1,
            minWidth: 30,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "telephone",
            headerName: "Telephone",
            flex: 1,
            minWidth: 30,
            headerAlign: "center",
            align: "center",
        },
    ];

    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper sx={{ height: 430, width: "100%" }}>
                    <DataGrid
                        rowHeight={40}
                        rows={getRows()}
                        columns={columns}
                        showCellVerticalBorder
                        density='compact'
                        hideFooterPagination
                        hideFooterSelectedRowCount
                        hideFooter
                        disableRowSelectionOnClick
                        disableSelectionOnClick
                        disableColumnSelector
                        disableColumnMenu
                    />
                    {/* <ActionMenu
                        anchorEl={anchorEl}
                        open={open}
                        handleClose={handleClose}
                        menuItems={menuItems}
                    /> */}
                </Paper>
            </Grid>
        </Grid>
    );
};

export default AdminStockCallSystemTable;
