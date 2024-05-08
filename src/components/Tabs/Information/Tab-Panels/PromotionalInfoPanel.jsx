//* custom layout
import InfoBoxLayout from "../../../Layout/InfoBoxLayout";

//* mui components
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";
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
} from "../../../../utils/ImageImports";
import { useState } from "react";

const data = [
    {
        id: 1,
        code: "2020",
        img: perfume1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 2,
        code: "2023",
        img: perfume2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 3,
        code: "2024",
        img: perfume3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 4,
        code: "2021",
        img: perfume4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 5,
        code: "2020",
        img: perfume5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 6,
        code: "2020",
        img: perfume6,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 7,
        img: perfume7,
        code: "2020",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 8,
        img: perfume8,
        code: "2020",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
];

const getRows = () => {
    let rows = [];
    data?.forEach((agent) => {
        const { id, code, description } = agent;
        rows.push({
            id,
            code,
            description,
        });
    });
    return rows;
};

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

function PromotionalInfoPanel() {
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
        <InfoBoxLayout
            infoTitle={"promotional items"}
            containerStyleProps={{
                boxShadow: "none",
            }}
        >
            <Grid container columnSpacing={2}>
                <Grid item xs={9}>
                    <Paper sx={{ height: 170, width: "100%" }}>
                        <DataGrid
                            rowHeight={40}
                            rows={getRows()}
                            columns={columns}
                            showCellVerticalBorder
                            onRowClick={(data) => handleSelectPromotion(data?.row?.id)}
                            sx={{
                                ".MuiDataGrid-row:hover": {
                                    cursor: "pointer",
                                },
                            }}
                            density="compact"
                            hideFooterPagination
                            hideFooterSelectedRowCount
                            hideFooter
                            disableColumnSelector
                            disableColumnMenu
                        />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Box
                        sx={{
                            height: 170,
                            padding: 0.5,
                            border: `1px solid ${theme.palette.primary.light}`,
                            boxShadow: "0 4px 12px #0F11140F",
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
                </Grid>
            </Grid>
        </InfoBoxLayout>
    );
}

export default PromotionalInfoPanel;
