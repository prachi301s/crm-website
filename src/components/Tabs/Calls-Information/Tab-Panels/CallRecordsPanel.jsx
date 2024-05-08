import { useState } from "react";
import PropTypes from "prop-types";

//* mui component
import ButtonBase from "@mui/material/ButtonBase";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";

//* mui-x
import { DataGrid } from "@mui/x-data-grid";

//* lib
import { DateTime } from "luxon";

//* mui icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditPendingCallModal from "../../../Modal/EditPendingCallModal";
import useModalStore from "../../../../app/store";
import DeleteModal from "../../../Modal/DeleteModal";

const date = DateTime.now().toFormat("dd/MM/yy");

const data = [
  { id: 1, date: date, user: "", result: "", reference: "" },
  { id: 2, date: date, user: "", result: "", reference: "" },
  { id: 3, date: date, user: "", result: "", reference: "" },
  { id: 4, date: date, user: "", result: "", reference: "" },
  { id: 5, date: date, user: "", result: "", reference: "" },
  { id: 6, date: date, user: "", result: "", reference: "" },
  { id: 7, date: date, user: "", result: "", reference: "" },
  { id: 8, date: date, user: "", result: "", reference: "" },
];

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

const CallRecordsPanel = () => {
  const { openModal, closeModal, editPendingCall, completeCall, deleteCall } =
    useModalStore((state) => ({
      openModal: state.openModal,
      closeModal: state.closeModal,
      editPendingCall: state.editPendingCall,
      completeCall: state.completeCall,
      deleteCall: state.deleteCall,
    }));
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const getRows = () => {
    let rows = [];
    data?.forEach((agent) => {
      const { id, user, result, reference } = agent;
      rows.push({
        id,
        date,
        user,
        result,
        reference,
      });
    });
    return rows;
  };

  const columns = [
    {
      field: "date",
      headerName: "Date",
      width: 90,
    },
    {
      field: "user",
      headerName: "User",
      width: 70,
    },
    {
      field: "result",
      headerName: "Result",
      width: 70,
    },
    {
      field: "reference",
      headerName: "Reference",
      width: 100,
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      minWidth: 50,
      sortable: false,
      disableBubbleEvent: true,
      renderCell: () => (
        <ButtonBase
          sx={{
            bgcolor: "rgb(53 119 241 / 10%)",
            padding: "2px 6px",
          }}
          onClick={handleClick}
        >
          <MoreHorizIcon
            sx={{
              fontSize: 16,
            }}
            color="info"
          />
        </ButtonBase>
      ),
    },
  ];
  return (
    <Paper sx={{ height: 200, width: "100%" }}>
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
            openModal("editPendingCall");
            handleClose();
          }}
          Icon={EditOutlinedIcon}
          label={"Edit"}
        />

        <OptionMenuItem
          onClick={() => {
            openModal("deleteCall");
            handleClose();
          }}
          Icon={DeleteOutlineOutlinedIcon}
          label={"Delete"}
        />
      </Menu>
      <EditPendingCallModal
        open={editPendingCall}
        handleClose={() => closeModal("editPendingCall")}
      />

      <DeleteModal
        open={deleteCall}
        handleClose={() => closeModal("deleteCall")}
        heading={"are_you_sure_you_want_to_delete_this_phone"}
      />
    </Paper>
  );
};

export default CallRecordsPanel;
