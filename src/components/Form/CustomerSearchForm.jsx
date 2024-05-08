import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

//* mui components
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";

//* mui-x-grid
import { DataGrid } from "@mui/x-data-grid";

//* custom components
import ControllerSelectField from "../Elements/TextField/ControllerSelectField";
import ControllerTextField from "../Elements/TextField/ControllerTextField";

const CustomerSearchForm = () => {
    const { t } = useTranslation();
    const { control } = useForm({
        defaultValues: {
            result: "",
            worth: "",
        },
    });

    const data = [
        { id: 1, year: "2020", searchData: "Hello" },
        { id: 2, year: "2020", searchData: "Baby" },
        { id: 3, year: "2020", searchData: "How" },
        { id: 4, year: "2020", searchData: "are" },
        { id: 5, year: "2020", searchData: "you?" },
        { id: 6, year: "2020", searchData: "Char" },
        { id: 7, year: "2020", searchData: "bottle" },
        { id: 8, year: "2020", searchData: "vodka" },
    ];

    const getRows = () => {
        let rows = [];
        data?.forEach((agent) => {
            const { id, year, searchData } = agent;
            rows.push({
                id,
                year,
                searchData,
            });
        });
        return rows;
    };

    const columns = [
        {
            field: "year",
            headerName: "Company",
            width: 250,
        },
        {
            field: "searchData",
            headerName: "Address",
            flex: 1,
            minWidth: 150,
        },
    ];

    return (
        <Grid container spacing={2} p={3}>
            <Grid item xs={3}>
                <ControllerSelectField
                    control={control}
                    name={"result"}
                    mainLabel={t("to_look_for")}
                >
                    {["type-1", "type-2", "type-3"].map((item) => (
                        <MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>
                    ))}
                </ControllerSelectField>
            </Grid>
            <Grid item xs={9}>
                <ControllerTextField
                    control={control}
                    name={"worth"}
                    mainLabel={t("worth")}
                    variant={"filled"}
                />
            </Grid>
            <Grid item xs={12}>
                <Paper sx={{ height: 200, width: "100%" }}>
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
                </Paper>
            </Grid>
        </Grid>
    );
};

export default CustomerSearchForm;
