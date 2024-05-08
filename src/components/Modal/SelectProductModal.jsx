import PropTypes from "prop-types";

import Paper from "@mui/material/Paper";

import { DataGrid } from "@mui/x-data-grid";

import FormModal from "../Layout/Modal-Layout/Form-Modals/FormModal";

const data = [
    { id: 1, productCode: "2020", description: "1" },
    { id: 2, productCode: "2023", description: "1" },
    { id: 3, productCode: "2024", description: "1" },
    { id: 4, productCode: "2021", description: "1" },
    { id: 5, productCode: "2020", description: "1" },
    { id: 6, productCode: "2020", description: "1" },
    { id: 7, productCode: "2020", description: "1" },
    { id: 8, productCode: "2020", description: "1" },
    { id: 9, productCode: "2020", description: "1" },
];

const getRows = () => {
    let rows = [];
    data?.forEach((agent) => {
        const { id, productCode, description } = agent;
        rows.push({
            id,
            productCode,
            description,
        });
    });
    return rows;
};

const columns = [
    {
        field: "productCode",
        headerName: "Product Code",
        width: 250,
    },

    {
        field: "description",
        headerName: "Description",
        flex: 1,
        minWidth: 50,
    },
];

function SelectProductModal({ open, handleClose }) {
    return (
        <FormModal
            open={open}
            heading={"Select a product"}
            handleClose={handleClose}
            height={36}
            width={36}
            maxWidth={"sm"}
        >
            <Paper
                sx={{
                    height: 300,
                    p: 3,
                }}
                elevation={0}
            >
                <DataGrid
                    rowHeight={40}
                    rows={getRows()}
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
            </Paper>
        </FormModal>
    );
}
SelectProductModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default SelectProductModal;
