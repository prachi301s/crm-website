//* custom layout
import InfoBoxLayout from "../Layout/InfoBoxLayout";

//* mui components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//* mui-x-grid
import { DataGrid } from "@mui/x-data-grid";
import ShowData from "../Display-Data/ShowData";
import { Button, useTheme } from "@mui/material";
import {
    exb1,
    exb10,
    exb2,
    exb3,
    exb4,
    exb5,
    exb6,
    exb7,
    exb8,
    exb9,
} from "../../utils/ImageImports";
import { useState } from "react";

const data = [
    { id: 1, exhibitor: "Art de perfume", amount: "", sendDate: "", exbImg: exb1 },
    { id: 2, exhibitor: "Blocki", amount: "", sendDate: "", exbImg: exb2 },
    { id: 3, exhibitor: "Stephanie de brujn", amount: "", sendDate: "", exbImg: exb3 },
    { id: 4, exhibitor: "Etat libre d orange", amount: "", sendDate: "", exbImg: exb4 },
    { id: 5, exhibitor: "Les", amount: "", sendDate: "", exbImg: exb5 },
    { id: 6, exhibitor: "lorenzo", amount: "", sendDate: "", exbImg: exb6 },
    { id: 7, exhibitor: "Ramon", amount: "", sendDate: "", exbImg: exb7 },
    { id: 8, exhibitor: "Noeme", amount: "", sendDate: "", exbImg: exb8 },
    { id: 9, exhibitor: "perfume", amount: "", sendDate: "", exbImg: exb9 },
    { id: 10, exhibitor: "thameen", amount: "", sendDate: "", exbImg: exb10 },
];

const getRows = () => {
    let rows = [];
    data?.forEach((agent) => {
        const { id, exhibitor, amount, sendDate, exbImg } = agent;
        rows.push({
            id,
            exhibitor,
            amount,
            sendDate,
            exbImg,
        });
    });
    return rows;
};

const columns = [
    {
        field: "exhibitor",
        headerName: "Exhibitor",
        width: 250,
    },

    {
        field: "amount",
        headerName: "Amount",
        flex: 1,
        minWidth: 150,
    },
    {
        field: "sendDate",
        headerName: "Send Date",
        flex: 1,
        minWidth: 150,
    },
];

const ExhibitorsInfoBox = () => {
    const theme = useTheme();
    const [exhibitorImg, setExhibitorImg] = useState(null);

    const handleSelectExhibitor = (img) => {
        setExhibitorImg(img);
    };

    return (
        <InfoBoxLayout infoTitle={"Exhibitors that the client has"}>
            <Grid container columnSpacing={2} rowSpacing={1}>
                <Grid item xs={12}>
                    <Stack direction={"row"} alignItems={"center"} columnGap={2}>
                        <Stack direction={"row"} alignItems={"center"} width={"40%"} columnGap={2}>
                            <Typography>Status</Typography>
                            <ShowData
                                dataValue={"Status"}
                                boxSxProps={{
                                    width: 200,
                                }}
                            />
                        </Stack>
                        <Stack direction={"row"} alignItems={"center"} flex={1} columnGap={2}>
                            <Button variant="contained" fullWidth>
                                Not Exposed
                            </Button>
                            <Button variant="contained" fullWidth>
                                Retire the exhibitor definitely
                            </Button>
                            <Button variant="contained" fullWidth>
                                Replaced the Display
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={8}>
                    <Paper sx={{ height: 210 }}>
                        <DataGrid
                            rowHeight={40}
                            rows={getRows()}
                            onRowClick={(data) => {
                                handleSelectExhibitor(data?.row?.exbImg);
                            }}
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
                </Grid>
                <Grid item xs={4}>
                    <Box
                        sx={{
                            height: 210,
                            padding: 0.5,
                            border: `1px solid ${theme.palette.primary.light}`,
                            boxShadow: "0 4px 12px #0F11140F",
                        }}
                    >
                        {exhibitorImg === null ? (
                            <Typography variant="subtitle2" textAlign={"center"}>
                                <em>No Exhibitor Selected</em>
                            </Typography>
                        ) : (
                            <img
                                src={exhibitorImg}
                                style={{
                                    objectFit: "cover",
                                    height: "100%",
                                    width: "100%",
                                }}
                            />
                        )}
                    </Box>
                </Grid>
            </Grid>
        </InfoBoxLayout>
    );
};

export default ExhibitorsInfoBox;
