//* mui components

import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//* mui icon
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

//* mui-x-grid
import { DataGrid } from "@mui/x-data-grid";

//* hook-form
import { useForm } from "react-hook-form";

//* store
import useModalStore from "../../app/store";

//* custom component
import ControllerTextField from "../Elements/TextField/ControllerTextField";
import SelectProductModal from "../Modal/SelectProductModal";
import DeleteModal from "../Modal/DeleteModal";
import { useState } from "react";

//button style
const btnSx = {
  height: 32,
};

const data = [
  { id: 1, code: "2020", description: "1", amount: 1 },
  { id: 2, code: "2023", description: "1", amount: 1 },
  { id: 3, code: "2024", description: "1", amount: 1 },
  { id: 4, code: "2021", description: "1", amount: 1 },
  { id: 5, code: "2020", description: "1", amount: 1 },
  { id: 6, code: "2020", description: "1", amount: 1 },
  { id: 7, code: "2020", description: "1", amount: 1 },
];

const getRows = () => {
  let rows = [];
  data?.forEach((agent) => {
    const { id, code, description, amount } = agent;
    rows.push({
      id,
      code,
      description,
      amount,
    });
  });
  return rows;
};

const columns = [
  {
    field: "code",
    headerName: "Code",
    width: 250,
  },

  {
    field: "description",
    headerName: "Description",
    flex: 1,
    minWidth: 50,
  },
  {
    field: "amount",
    headerName: "Amount",
    flex: 1,
    minWidth: 50,
  },
];

function PackDataTable() {
  const { openModal, closeModal, selectProduct, deletePackData } =
    useModalStore((state) => ({
      openModal: state.openModal,
      closeModal: state.closeModal,
      selectProduct: state.selectProduct,
      deletePackData: state.deletePackData,
    }));
  const { control } = useForm();
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectionChange = (e) => {
    const clickedRowId = e.row;

    if (selectedRows.includes(clickedRowId)) {
      // If the ID is already in the array, remove it
      setSelectedRows((prevRows) =>
        prevRows.filter((rowId) => rowId !== clickedRowId)
      );
    } else {
      // If the ID is not in the array, add it
      setSelectedRows((prevRows) => [...prevRows, clickedRowId]);
    }
  };

  // const isDeleteButtonActive = selectedRows.length > 0;
  return (
    <Paper
      elevation={0}
      variant="outlined"
      sx={{
        padding: 1.5,
        width: "100%",
        boxShadow: "0 4px 12px #0F11140F",
      }}
    >
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={1}
      >
        <Stack flexDirection={"row"} columnGap={2}>
          <Button
            variant="contained"
            size="small"
            sx={btnSx}
            startIcon={<AddIcon />}
            onClick={() => openModal("selectProduct")}
          >
            Add
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={btnSx}
            startIcon={<RemoveCircleOutlineIcon />}
            onClick={() => openModal("deletePackData")}
            disabled={selectedRows.length === 0}
          >
            Delete
          </Button>
        </Stack>
        <Stack flexDirection={"row"} alignItems={"center"} columnGap={2}>
          <Typography variant="body2">Number of item</Typography>
          <ControllerTextField
            control={control}
            variant="filled"
            name="noOfItem"
            sx={{
              width: 60,
            }}
            disableFullWidth
          />
        </Stack>
      </Stack>
      <Paper
        sx={{
          height: 205,
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
          // disableRowSelectionOnClick
          disableSelectionOnClick
          disableColumnSelector
          disableColumnMenu
          onRowClick={(e) => {
            handleSelectionChange(e);
          }}
        />
      </Paper>
      <SelectProductModal
        open={selectProduct}
        handleClose={() => closeModal("selectProduct")}
      />
      <DeleteModal
        open={deletePackData}
        handleClose={() => closeModal("deletePackData")}
        heading={"Delete Product From Pack Inventory"}
        textOne={"Are you sure You want to delete this article from the packs?"}
        Icon={<DeleteForeverIcon />}
      />
    </Paper>
  );
}

export default PackDataTable;
