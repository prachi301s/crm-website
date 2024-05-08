import { useState } from "react";
import PropTypes from "prop-types";
//* mui components
import ButtonBase from "@mui/material/ButtonBase";
import Grid from "@mui/material/Grid";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";

//* mui icons
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";


//* mui-x-grid
import { DataGrid } from "@mui/x-data-grid";
import EditStockPacksModal from "../Modal/EditStockPacksModal";
import useModalStore from "../../app/store";

import DeleteModal from "../Modal/DeleteModal";
// import ActionMenu from "../Elements/Menu/ActionMenu";
// import ActionButton from "../Elements/Button/ActionButton";
const OptionMenuItem = ({ onClick, Icon, label }) => {
  return (
    <MenuItem onClick={onClick}>
      {Icon && (
        <ListItemIcon
          sx={{
            "&.MuiListItemIcon-root": {
              minWidth: "18px",
            },
          }}
        >
          <Icon sx={{ fontSize: "14px" }} />
        </ListItemIcon>
      )}
      {label}
    </MenuItem>
  );
};
OptionMenuItem.propTypes = {
  label: PropTypes.string,
  Icon: PropTypes.any,
  onClick: PropTypes.func,
};
const AdminStockPacksTable = () => {
  const { openModal, closeModal, editStockPacks, deleteStockPacks } =
    useModalStore((state) => ({
      openModal: state.openModal,
      closeModal: state.closeModal,
      editStockPacks: state.editStockPacks,

      deleteStockPacks: state.deleteStockPacks,
    }));
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const data = [
    { id: 1, code: "2020", description: "Hello", stock: 1, days: 30 },
    { id: 2, code: "2020", description: "How", stock: 1, days: 30 },
    { id: 3, code: "2020", description: "are", stock: 1, days: 30 },
    { id: 4, code: "2020", description: "you?", stock: 1, days: 30 },
    { id: 5, code: "2020", description: "I'm", stock: 1, days: 30 },
    { id: 6, code: "2020", description: "Fine", stock: 1, days: 30 },
    { id: 7, code: "2020", description: "what", stock: 1, days: 30 },
    { id: 8, code: "2020", description: "about", stock: 1, days: 30 },
    { id: 9, code: "2020", description: "you?", stock: 1, days: 30 },
    { id: 11, code: "2020", description: "Hello", stock: 1, days: 30 },
    { id: 12, code: "2020", description: "How", stock: 1, days: 30 },
    { id: 13, code: "2020", description: "are", stock: 1, days: 30 },
    { id: 14, code: "2020", description: "you?", stock: 1, days: 30 },
    { id: 15, code: "2020", description: "I'm", stock: 1, days: 30 },
    { id: 16, code: "2020", description: "Fine", stock: 1, days: 30 },
    { id: 17, code: "2020", description: "what", stock: 1, days: 30 },
    { id: 18, code: "2020", description: "about", stock: 1, days: 30 },
    { id: 19, code: "2020", description: "you?", stock: 1, days: 30 },
  ];

  const getRows = () => {
    let rows = [];
    data?.forEach((agent) => {
      const { id, code, description, stocks, days } = agent;
      rows.push({
        id,
        code,
        description,
        stocks,
        days,
      });
    });
    return rows;
  };

  const columns = [
    {
      field: "code",
      headerName: "Code",
      width: 80,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      minWidth: 170,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "stocks",
      headerName: "Stocks",
      flex: 1,
      minWidth: 170,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "days",
      headerName: "Days",
      flex: 1,
      minWidth: 30,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      minWidth: 50,
      headerAlign: "center",
      align: "center",
      sortable: false,
      disableBubbleEvent: true,
      renderCell: () => {
        return (
          <ButtonBase
            sx={{
              bgcolor: "rgb(53 119 241 / 10%)",
              padding: "2px 6px",
            }}
            onClick={(event) => handleClick(event)}
          >
            <MoreHorizIcon
              sx={{
                fontSize: 16,
              }}
              color="info"
            />
          </ButtonBase>
        );
      },
    },
  ];

 

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Paper sx={{ height: 450, width: "100%" }}>
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
            {/* <ActionMenu
                        anchorEl={anchorEl}
                        open={open}
                        handleClose={handleClose}
                        menuItems={menuItems}
                    /> */}
          </Paper>
        </Grid>
      </Grid>
      <Menu
        id="action-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "action-menu",
        }}
        slotProps={{
          paper: {
            sx: {
              width: "100px",
            },
          },
        }}
        sx={{
          "& .MuiMenuItem-root": {
            fontSize: "12px",
          },
          "& .MuiButtonBase-root": {
            px: 1,
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <OptionMenuItem
          onClick={() => {
            openModal("editStockPacks");
            handleClose();
          }}
          Icon={EditOutlinedIcon}
          label={"Edit"}
        />
        <OptionMenuItem
          onClick={() => {
            // openModal("completeCall");
            handleClose();
          }}
         Icon={CheckCircleOutlinedIcon}
          label={"Refresh"}
        />
        <OptionMenuItem
          onClick={() => {
            openModal("deleteStockPacks");
            handleClose();
          }}
          Icon={DeleteOutlineOutlinedIcon}
          label={"Delete"}
        />
      </Menu>
      <EditStockPacksModal
        open={editStockPacks}
        handleClose={() => closeModal("editStockPacks")}
      />
      <DeleteModal
      open={deleteStockPacks}
      handleClose={() => closeModal("deleteStockPacks")}
      heading={"Delete Product From Pack Inventory"}
      textOne={"Are you sure you want to delete this Article from the Packs?"}
      />
    </>
  );
};

export default AdminStockPacksTable;
