//* mui components

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

//* mui-x-grid
import { DataGrid } from "@mui/x-data-grid";
import { perfume4 } from "../../../../utils/ImageImports";
//* custom components
import ShowData from "../../../Display-Data/ShowData";

function InfoPanel() {
    const theme = useTheme();
    const data = [
        { id: 1, year: "2020" },
        { id: 2, year: "2020" },
        { id: 3, year: "2020" },
        { id: 4, year: "2020" },
        { id: 5, year: "2020" },
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
             field: "Fragrance",                                   /*changed*/
            headerName: "Fragrance",
            width: 250,
        },

        {
            field: "Designer",
            headerName: "Designer",                                /*changed*/
            flex: 1,
            minWidth: 100,
        },
        {
            field: "Loronme",                                     /*changed*/
            headerName: "Loronme",
            flex: 1,
            minWidth: 100,
        },
        {
            field: "Yodeyma",                                    /*changed*/
            headerName: "Yodeyma",
            flex: 1,
            minWidth: 100,
        },
    ];

    return (
        <Grid container columnSpacing={2}>
            <Grid item xs={3}>
                <Stack rowGap={1}>
                    <Box
                        sx={{
                            height: 200,
                            padding: 0.5,
                            border: `1px solid ${theme.palette.primary.light}`,
                            boxShadow: "0 4px 12px #0F11140F",
                        }}
                    >
                        <img
                            src={perfume4}
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                    <Typography variant="h6" textAlign={"center"}>
                        Character Olfactive
                    </Typography>
                    <Box sx={{ bgcolor: theme.palette.primary.light, borderRadius: 1, p: 0.5 }}>
                        <Typography textAlign={"center"}>Olfactory Family</Typography>
                    </Box>
                </Stack>
            </Grid>
            <Grid item xs={9}>
                <Stack rowGap={1}>
                    <Paper sx={{ height: 170 }}>
                        <DataGrid
                            rowHeight={40}
                            rows={getRows()}
                            columns={columns}
                            showCellVerticalBorder
                            density="compact"
                            hideFooterPagination
                            hideFooterSelectedRowCount
                            hideFooter
                            disableColumnSelector
                            disableColumnMenu
                        />
                    </Paper>
                    <ShowData
                        dataValue={
                            // "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet temporibus assumenda in eum, tenetur sequi."
                            "Description here"
                        }
                        boxSxProps={{
                            height: 90,
                            alignItems: "flex-start",
                        }}
                    />
                </Stack>
            </Grid>
        </Grid>
    );
}

export default InfoPanel;
