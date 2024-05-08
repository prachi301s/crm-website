//* mui components
import Paper from "@mui/material/Paper";

//* mui-x components
import { DataGrid } from "@mui/x-data-grid";

//* libraries
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";

const date = DateTime.now().toFormat("dd/MM/yy");

const BillingPendingListTable = () => {
    const navigate = useNavigate();

    const data = [
        {
            id: 1,
            reference: "R-2020",
            companyName: "LAROME PARIS",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 2,
            reference: "R-2020",
            companyName: "Microsoft",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 3,
            reference: "R-2020",
            companyName: "Capgemini",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 4,
            reference: "R-2020",
            companyName: "Rolex",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 5,
            reference: "R-2020",
            companyName: "Fossil",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 6,
            reference: "R-2020",
            companyName: "Dun & Bradstreet,",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 7,
            reference: "R-2020",
            companyName: "GOOGLE",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 8,
            reference: "R-2020",
            companyName: "RADO",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 9,
            reference: "R-2020",
            companyName: "AXE",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 10,
            reference: "R-2020",
            companyName: "BMW",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 11,
            reference: "R-2020",
            companyName: "AUDI",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 12,
            reference: "R-2020",
            companyName: "FERRARI",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 13,
            reference: "R-2020",
            companyName: "Koenigsegg",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 14,
            reference: "R-2020",
            companyName: "Bugatti",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 15,
            reference: "R-2020",
            companyName: "Lamborghini",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 16,
            reference: "R-2020",
            companyName: "IBM",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 17,
            reference: "R-2020",
            companyName: "Calvin klein",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 18,
            reference: "R-2020",
            companyName: "Target",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
        {
            id: 19,
            reference: "R-2020",
            companyName: "Walmart",
            date: date,
            operator: "PACO",
            workerName: "DEOLINDA",
            agency: "GLS",
        },
    ];

    const getRows = () => {
        let rows = [];
        data?.forEach((agent) => {
            const { id, reference, companyName, date, operator, workerName, agency } = agent;
            rows.push({
                id,
                reference,
                companyName,
                date,
                operator,
                workerName,
                agency,
            });
        });
        return rows;
    };

    const columns = [
        {
            field: "reference",
            headerName: "Reference",
            width: 180,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "companyName",
            headerName: "Company Name",
            flex: 1,
            minWidth: 170,
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
            field: "operator",
            headerName: "Operator",
            flex: 1,
            minWidth: 30,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "workerName",
            headerName: "Worker Name",
            flex: 1,
            minWidth: 30,
            headerAlign: "center",
            align: "center",
        },
        {
            field: "agency",
            headerName: "Agency",
            flex: 1,
            minWidth: 30,
            headerAlign: "center",
            align: "center",
        },
    ];

    const handleNavigate = (id) => {
        navigate(`/billing-return-manage/${id}`);
    };

    return (
        <Paper sx={{ height: 510, width: "100%" }}>
            <DataGrid
                rowHeight={40}
                rows={getRows()}
                columns={columns}
                getRowId={(row) => row.id}
                onCellClick={(row) => {
                    handleNavigate(row?.id);
                }}
                sx={{
                    ".MuiDataGrid-row:hover": {
                        cursor: "pointer",
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

export default BillingPendingListTable;
