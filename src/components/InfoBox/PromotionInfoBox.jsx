//* custom components
import ShowData from "../Display-Data/ShowData";

//* custom layout
import InfoBoxLayout from "../Layout/InfoBoxLayout";

//* mui component
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box, useTheme } from "@mui/material";

//* mui-x-grid
import { DataGrid } from "@mui/x-data-grid";
import {
    perfume1,
    perfume2,
    perfume3,
    perfume4,
    perfume5,
    perfume6,
    perfume7,
    perfume8,
} from "../../utils/ImageImports";
import { useState } from "react";

const data = [
    {
        id: 1,
        promotionalName: "1",
        img: perfume1,
        activeFor: "1",
        giftFor: "1",
        finishDate: "10-05-23",
        note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid consequatur sint dignissimos? Ipsa explicabo cumque sed fuga vitae voluptas.",
    },
    {
        id: 2,
        promotionalName: "2",
        img: perfume2,
        activeFor: "2",
        giftFor: "2",
        finishDate: "13-05-23",
        note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid consequatur sint dignissimos? Ipsa explicabo cumque sed fuga vitae voluptas.",
    },
    {
        id: 3,
        promotionalName: "3",
        img: perfume3,
        activeFor: "3",
        giftFor: "3",
        finishDate: "12-05-23",
        note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid consequatur sint dignissimos? Ipsa explicabo cumque sed fuga vitae voluptas.",
    },
    {
        id: 4,
        promotionalName: "5",
        img: perfume4,
        activeFor: "1",
        giftFor: "1",
        finishDate: "16-05-23",
        note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid consequatur sint dignissimos? Ipsa explicabo cumque sed fuga vitae voluptas.",
    },
    {
        id: 5,
        promotionalName: "4",
        img: perfume5,
        activeFor: "3",
        giftFor: "4",
        finishDate: "15-05-23",
        note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid consequatur sint dignissimos? Ipsa explicabo cumque sed fuga vitae voluptas.",
    },
    {
        id: 6,
        promotionalName: "5",
        img: perfume6,
        activeFor: "4",
        giftFor: "1",
        finishDate: "16-02-24",
        note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid consequatur sint dignissimos? Ipsa explicabo cumque sed fuga vitae voluptas.",
    },
    {
        id: 7,
        promotionalName: "7",
        img: perfume7,
        activeFor: "6",
        giftFor: "1",
        finishDate: "10-05-23",
        note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid consequatur sint dignissimos? Ipsa explicabo cumque sed fuga vitae voluptas.",
    },
    {
        id: 8,
        promotionalName: "8",
        img: perfume8,
        activeFor: "8",
        giftFor: "14",
        finishDate: "20-05-23",
        note: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aliquid consequatur sint dignissimos? Ipsa explicabo cumque sed fuga vitae voluptas.",
    },
];

const getRows = () => {
    let rows = [];
    data?.forEach((agent) => {
        const { id, promotionalName } = agent;
        rows.push({
            id,
            promotionalName,
        });
    });
    return rows;
};

const columns = [
    {
        field: "promotionalName",
        headerName: "Promotional Name",
        headerAlign: "center",
        align: "center",
        minWidth: 250,
        flex: 1,
    },
];

const PromotionInfoBox = () => {
    const theme = useTheme();

    const [selectedPromotion, setSelectedPromotion] = useState({
        id: "",
        promotionalName: "",
        img: null,
        activeFor: "",
        giftFor: "",
        finishDate: "",
        note: "",
    });

    const handleSelectPromotion = (id) => {
        const selectedData = data.find((promotionalData) => promotionalData.id === id);
        setSelectedPromotion(selectedData);
    };

    return (
        <InfoBoxLayout infoTitle={"Active Promotion for this Customer"}>
            <Grid container columnSpacing={2}>
                <Grid item xs={6} lg={4}>
                    <Paper sx={{ height: 220 }}>
                        <DataGrid
                            rowHeight={40}
                            rows={getRows()}
                            columns={columns}
                            showCellVerticalBorder
                            onRowClick={(data) => handleSelectPromotion(data?.row?.id)}
                            density="compact"
                            hideFooterPagination
                            hideFooterSelectedRowCount
                            hideFooter
                            sx={{
                                ".MuiDataGrid-row:hover": {
                                    cursor: "pointer",
                                },
                            }}
                            // disableSelectionOnClick
                            disableColumnSelector
                            disableColumnMenu
                        />
                    </Paper>
                </Grid>
                <Grid item xs={6} lg={3}>
                    <InfoBoxLayout
                        infoTitle={"Promotional"}
                        infoTextVariant={"body2"}
                        headerVariant="light"
                        containerStyleProps={{
                            border: `1px solid ${theme.palette.primary.light}`,
                            boxShadow: "none",
                        }}
                    >
                        <Box
                            sx={{
                                height: 170,
                            }}
                        >
                            {selectedPromotion?.img === null ? (
                                <Typography variant="subtitle2" textAlign={"center"}>
                                    <em>No Promotion Selected</em>
                                </Typography>
                            ) : (
                                <img
                                    src={selectedPromotion?.img}
                                    style={{
                                        objectFit: "cover",
                                        height: "100%",
                                        width: "100%",
                                    }}
                                />
                            )}
                        </Box>
                    </InfoBoxLayout>
                </Grid>
                <Grid item xs={12} lg={5}>
                    <Grid item container rowSpacing={1}>
                        <Grid item xs={12}>
                            <Grid
                                item
                                container
                                sx={{
                                    alignItems: "center",
                                }}
                            >
                                <Grid item xs={3}>
                                    <Typography variant="body2">Active For</Typography>
                                </Grid>
                                <Grid item xs={9}>
                                    <ShowData dataValue={selectedPromotion?.activeFor} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid
                                item
                                container
                                sx={{
                                    alignItems: "center",
                                }}
                            >
                                <Grid item xs={3}>
                                    <Typography variant="body2">Gift For</Typography>
                                </Grid>
                                <Grid item xs={9}>
                                    <ShowData dataValue={selectedPromotion?.giftFor} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid
                                item
                                container
                                sx={{
                                    alignItems: "center",
                                }}
                            >
                                <Grid item xs={3}>
                                    <Typography variant="body2">Finish Date</Typography>
                                </Grid>
                                <Grid item xs={9}>
                                    <ShowData dataValue={selectedPromotion?.finishDate} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <ShowData
                                boxSxProps={{
                                    alignItems: "flex-start",
                                    height: 100,
                                }}
                                dataValue={selectedPromotion?.note}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </InfoBoxLayout>
    );
};

export default PromotionInfoBox;
