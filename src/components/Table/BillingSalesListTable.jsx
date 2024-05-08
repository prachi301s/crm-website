import PropTypes from "prop-types";
//* mui components
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
//*mui Icons
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
//* mui-x components
import { DataGrid } from "@mui/x-data-grid";

//* libraries
import { DateTime } from "luxon";
import useModalStore from "../../app/store";
import { useState } from "react";

import { ListItemIcon, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PayToOrderModal from "../Modal/PayToOrderModal";
import ManageClaimModal from "../Modal/ManageClaimModal";
import AuthorizeGiftModal from "../Modal/AuthorizeGiftModal";

const date = DateTime.now().toFormat("dd/MM/yy");
const time = DateTime.now().toFormat("hh:mm");
const OptionMenuItem = ({ onClick, Icon, label }) => {
  return (
    <MenuItem onClick={onClick} sx={{ marginLeft: 5 }}>
      {Icon && (
        <ListItemIcon
          sx={{
            "&.MuiListItemIcon-root": {
              minWidth: "20px",
              color: "black",
              marginRight: 3,
            },
          }}
        >
          <Icon sx={{ fontSize: "25px" }} />
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

const BillingSalesListTable = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { openModal, closeModal, payToOrder, manageClaims, AuthorizeGift } =
    useModalStore((state) => ({
      openModal: state.openModal,
      closeModal: state.closeModal,
      payToOrder: state.payToOrder,
      manageClaims: state.manageClaims,
      AuthorizeGift: state.AuthorizeGift,
    }));
  const navigate = useNavigate();
  const handleSeeorder = () => {
    navigate("/see-order");
  };
  const handleEditorder = () => {
    navigate("/edit-order");
  };

  const handleSelectionChange = (event) => {
    setAnchorEl(event.row.id);
    setMenuOpen(true);
  };
  // Function to handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const data = [
    {
      id: 1,
      orderNo: "2020",
      firstDate: date,
      customer: "David",
      agent: 30,
      amount: "Hello",
      operator: 1,
      agency: 30,
      wayToPay: 30,
      expeditionNo: 30,
      situation: 30,
      secondDate: date,
      hour: time,
      phoneAgency: 30,
      schedule: 30,
    },
    {
      id: 2,
      orderNo: "2020",
      firstDate: date,
      customer: "David",
      agent: 30,
      amount: "Hello",
      operator: 1,
      agency: 30,
      wayToPay: 30,
      expeditionNo: 30,
      situation: 30,
      secondDate: date,
      hour: time,
      phoneAgency: 30,
      schedule: 30,
    },
    {
      id: 3,
      orderNo: "2020",
      firstDate: date,
      customer: "David",
      agent: 30,
      amount: "Hello",
      operator: 1,
      agency: 30,
      wayToPay: 30,
      expeditionNo: 30,
      situation: 30,
      secondDate: date,
      hour: time,
      phoneAgency: 30,
      schedule: 30,
    },
    {
      id: 4,
      orderNo: "2020",
      firstDate: date,
      customer: "David",
      agent: 30,
      amount: "Hello",
      operator: 1,
      agency: 30,
      wayToPay: 30,
      expeditionNo: 30,
      situation: 30,
      secondDate: date,
      hour: time,
      phoneAgency: 30,
      schedule: 30,
    },
    {
      id: 5,
      orderNo: "2020",
      firstDate: date,
      customer: "David",
      agent: 30,
      amount: "Hello",
      operator: 1,
      agency: 30,
      wayToPay: 30,
      expeditionNo: 30,
      situation: 30,
      secondDate: date,
      hour: time,
      phoneAgency: 30,
      schedule: 30,
    },
    {
      id: 6,
      orderNo: "2020",
      firstDate: date,
      customer: "David",
      agent: 30,
      amount: "Hello",
      operator: 1,
      agency: 30,
      wayToPay: 30,
      expeditionNo: 30,
      situation: 30,
      secondDate: date,
      hour: time,
      phoneAgency: 30,
      schedule: 30,
    },
    {
      id: 7,
      orderNo: "2020",
      firstDate: date,
      customer: "David",
      agent: 30,
      amount: "Hello",
      operator: 1,
      agency: 30,
      wayToPay: 30,
      expeditionNo: 30,
      situation: 30,
      secondDate: date,
      hour: time,
      phoneAgency: 30,
      schedule: 30,
    },
    {
      id: 8,
      orderNo: "2020",
      firstDate: date,
      customer: "David",
      agent: 30,
      amount: "Hello",
      operator: 1,
      agency: 30,
      wayToPay: 30,
      expeditionNo: 30,
      situation: 30,
      secondDate: date,
      hour: time,
      phoneAgency: 30,
      schedule: 30,
    },
    {
      id: 9,
      orderNo: "2020",
      firstDate: date,
      customer: "David",
      agent: 30,
      amount: "Hello",
      operator: 1,
      agency: 30,
      wayToPay: 30,
      expeditionNo: 30,
      situation: 30,
      secondDate: date,
      hour: time,
      phoneAgency: 30,
      schedule: 30,
    },
    {
      id: 10,
      orderNo: "2020",
      firstDate: date,
      customer: "David",
      agent: 30,
      amount: "Hello",
      operator: 1,
      agency: 30,
      wayToPay: 30,
      expeditionNo: 30,
      situation: 30,
      secondDate: date,
      hour: time,
      phoneAgency: 30,
      schedule: 30,
    },
    {
      id: 11,
      orderNo: "2020",
      firstDate: date,
      customer: "David",
      agent: 30,
      amount: "Hello",
      operator: 1,
      agency: 30,
      wayToPay: 30,
      expeditionNo: 30,
      situation: 30,
      secondDate: date,
      hour: time,
      phoneAgency: 30,
      schedule: 30,
    },
    {
      id: 12,
      orderNo: "2020",
      firstDate: date,
      customer: "David",
      agent: 30,
      amount: "Hello",
      operator: 1,
      agency: 30,
      wayToPay: 30,
      expeditionNo: 30,
      situation: 30,
      secondDate: date,
      hour: time,
      phoneAgency: 30,
      schedule: 30,
    },
  ];

  const getRows = () => {
    let rows = [];
    data?.forEach((d) => {
      const {
        id,
        orderNo,
        firstDate,
        customer,
        agent,
        amount,
        operator,
        agency,
        wayToPay,
        expeditionNo,
        situation,
        secondDate,
        hour,
        phoneAgency,
        schedule,
      } = d;
      rows.push({
        id,
        orderNo,
        firstDate,
        customer,
        agent,
        amount,
        operator,
        agency,
        wayToPay,
        expeditionNo,
        situation,
        secondDate,
        hour,
        phoneAgency,
        schedule,
      });
    });
    return rows;
  };

  const columns = [
    {
      field: "orderNo",
      headerName: "Order No.",
      width: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "firstDate",
      headerName: "Date",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "customer",
      headerName: "Customer",
      flex: 1,
      minWidth: 140,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "agent",
      headerName: "Agent",
      flex: 1,
      minWidth: 30,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "operator",
      headerName: "Operator",
      flex: 1,
      minWidth: 30,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "agency",
      headerName: "Agency",
      flex: 1,
      minWidth: 30,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "wayToPay",
      headerName: "Way to pay",
      flex: 1,
      minWidth: 30,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "expeditionNo",
      headerName: "Expedition No.",
      flex: 1,
      minWidth: 30,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "situation",
      headerName: "Situation",
      flex: 1,
      minWidth: 30,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "secondDate",
      headerName: "Date",
      flex: 1,
      minWidth: 30,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "hour",
      headerName: "Hour",
      flex: 1,
      minWidth: 30,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "phoneAgency",
      headerName: "Phone Agency",
      flex: 1,
      minWidth: 30,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "schedule",
      headerName: "Schedule",
      flex: 1,
      minWidth: 30,
      headerAlign: "center",
      align: "center",
    },
  ];
  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper sx={{ height: 330, width: "100%" }}>
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
            onRowClick={handleSelectionChange}
          />
          <Menu
            id="action-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{
              "aria-labelledby": "action-menu",
            }}
            slotProps={{
              paper: {
                sx: {
                  width: "31.25rem",
                  borderRadius: "1.25rem",
                  padding: "50px",
                },
              },
            }}
            sx={{
              "& .MuiMenuItem-root": {
                fontSize: "15px",
              },
              "& .MuiButtonBase-root": {
                px: 1,
              },
              borderRadius: "50%",
            }}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
          >
            <OptionMenuItem
              // onClick={() => {
              //     openModal("editPendingCall");
              //     handleClose();
              // }}
              Icon={FolderCopyOutlinedIcon}
              label={
                <Typography color="black" variant="body1">
                  Go to Customer file
                </Typography>
              }
            />
            <OptionMenuItem
              onClick={handleEditorder}
              Icon={ModeEditOutlineOutlinedIcon}
              label={
                <Typography color="black" variant="body1">
                  Edit order
                </Typography>
              }
            />
            <OptionMenuItem
              onClick={handleSeeorder}
              Icon={RemoveRedEyeOutlinedIcon}
              label={
                <Typography color="black" variant="body1">
                  See order
                </Typography>
              }
            />
            <OptionMenuItem
              onClick={() => {
                openModal("payToOrder");
                handleMenuClose();
                handleClose();
              }}
              Icon={PaymentOutlinedIcon}
              label={
                <Typography color="black" variant="body1">
                  Pay order
                </Typography>
              }
            />
            <OptionMenuItem
              onClick={() => {
                openModal("manageClaims");
                handleMenuClose();
                handleClose();
              }}
              Icon={SaveAsOutlinedIcon}
              label={
                <Typography color="black" variant="body1">
                  Manage claim
                </Typography>
              }
            />
            <OptionMenuItem
              onClick={() => {
                openModal("AuthorizeGift");
                handleMenuClose();
                handleClose();
              }}
              Icon={CardGiftcardOutlinedIcon}
              label={
                <Typography color="black" variant="body1">
                  Authorize gift
                </Typography>
              }
            />
          </Menu>
          <PayToOrderModal
            open={payToOrder}
            handleClose={() => closeModal("payToOrder")}
          />
          <ManageClaimModal
            open={manageClaims}
            handleClose={() => closeModal("manageClaims")}
          />

          <AuthorizeGiftModal
            open={AuthorizeGift}
            handleClose={() => closeModal("AuthorizeGift")}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BillingSalesListTable;
