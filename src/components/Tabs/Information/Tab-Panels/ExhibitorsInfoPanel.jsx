//* mui components
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

//* mui-x-grid
import { DataGrid } from "@mui/x-data-grid";
import { useCallback } from "react";
import EXB_DATA from "../../../../options/DemoExhibitorData";
import { useState } from "react";

const columns = [
    {
        field: "code",
        headerName: "Code",
        width: 150,
    },

    {
        field: "description",
        headerName: "Description",
        flex: 1,
        minWidth: 250,
    },
];

function ExhibitorsInfoPanel() {
    const theme = useTheme();
    const [selectedExhibits, setSelectedExhibits] = useState(null);

    const getMainRows = useCallback(() => {
        let rows = [];
        EXB_DATA?.forEach((agent) => {
            const { id, code, description, contain } = agent;
            rows.push({
                id,
                code,
                description,
                contain,
            });
        });
        return rows;
    }, []);

    const getChildRows = useCallback(() => {
        let rows = [];
        selectedExhibits?.forEach((agent) => {
            const { id, code, description } = agent;
            rows.push({
                id,
                code,
                description,
            });
        });
        return rows;
    }, [selectedExhibits]);

    const handleSelectExhibit = (containArr) => {
        setSelectedExhibits(containArr);
    };

    return (
        <Grid container columnSpacing={3}>
            <Grid item xs={6}>
                <Paper
                    sx={{
                        height: 200,
                    }}
                    elevation={0}
                >
                    <DataGrid
                        rowHeight={40}
                        rows={getMainRows()}
                        columns={columns}
                        showCellVerticalBorder
                        onRowClick={(data) => handleSelectExhibit(data?.row.contain)}
                        density="compact"
                        hideFooterPagination
                        hideFooterSelectedRowCount
                        hideFooter
                        disableColumnSelector
                        disableColumnMenu
                    />
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper
                    sx={{
                        border: `1px solid ${theme.palette.primary.light}`,
                        py: 1,
                    }}
                    elevation={0}
                >
                    <Typography variant="h5" align="center">
                        Contains
                    </Typography>
                    <Paper sx={{ height: 150 }}>
                        {selectedExhibits ? (
                            <DataGrid
                                rowHeight={40}
                                rows={getChildRows()}
                                columns={columns}
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
                        ) : (
                            <Typography variant="subtitle2" textAlign={"center"}>
                                <em>No Exhibitor Selected</em>
                            </Typography>
                        )}
                    </Paper>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default ExhibitorsInfoPanel;
