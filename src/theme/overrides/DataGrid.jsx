// import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

//  changing the scrollbar color of mui grid
//  https://github.com/mui/mui-x/issues/7527

//  changing the radius of scrollbar of mui grid
//  https://stackoverflow.com/questions/73165668/change-width-color-and-corner-radius-of-the-scrollbar

export default function DataGrid(theme) {
    return {
        MuiDataGrid: {
            styleOverrides: {
                root: {
                    "& .MuiDataGrid-cell": {
                        "&:last-child": {
                            borderRight: "none",
                        },
                        // ":nth-last-child(2)": {
                        //     borderRight: 0,
                        // },
                        // ":nth-last-of-type(2)": {
                        //     borderRight: 0,
                        // },
                    },
                    "& .MuiDataGrid-cell:focus-within, & .MuiDataGrid-cell:focus":
                        {
                            outline: "none",
                        },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: `${theme.palette.primary.light}`,
                    },
                    "& .MuiDataGrid-columnHeader:focus-within, & .MuiDataGrid-columnHeader:focus ":
                        {
                            outline: "none",
                        },
                    ".MuiDataGrid-columnHeaderTitle": {
                        fontWeight: 400,
                    },
                    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
                        width: "0.4em",
                        height: "0.4em",
                    },
                    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
                        background: "#d9d9d9",
                        borderRadius: "180px",
                    },
                    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb": {
                        backgroundColor: "#fdb6d5",
                        borderRadius: "180px",
                    },
                    "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-thumb:hover":
                        {
                            background: "#fdb6d5",
                        },
                },
            },
        },
    };
}
