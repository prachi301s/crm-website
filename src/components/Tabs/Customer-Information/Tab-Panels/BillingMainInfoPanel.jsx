import PropTypes from "prop-types";
import { useState } from "react";

//*  mui component
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Popover from "@mui/material/Popover";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

//* mui icon
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CallIcon from "@mui/icons-material/Call";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SearchIcon from "@mui/icons-material/Search";

//* zustand modal store
import useModalStore from "../../../../app/store";

//* modals
import AddCustomerPhoneModal from "../../../Modal/AddCustomerPhoneModal";
import CustomerSearchModal from "../../../Modal/CustomerSearchModal";
import ModifyCustomerDataModal from "../../../Modal/ModifyCustomerDataModal";
import DeleteModal from "../../../Modal/DeleteModal";
import CustomModificationModal from "../../../Modal/CustomModificationModal";
import { Fragment } from "react";
import ShowData from "../../../Display-Data/ShowData";
import SendEmailModal from "../../../Modal/SendEmailModal";

const BillingMainInfoPanel = () => {
  const {
    customerSearch,
    modifyCustomerData,
    openModal,
    closeModal,
    mobileCallDelete,
    mobileCallEdit,
    sendEmail,
  } = useModalStore((state) => ({
    customerSearch: state.customerSearch,
    modifyCustomerData: state.modifyCustomerData,
    openModal: state.openModal,
    closeModal: state.closeModal,
    mobileCallDelete: state.mobileCallDelete,
    mobileCallEdit: state.mobileCallEdit,
    sendEmail: state.sendEmail,
  }));

  return (
    <Grid container spacing={1}>
    
      <Grid item xs={12} direction="row" justifyContent="right">
        <Stack direction="row" justifyContent="flex-end">
          <Button
            variant="contained"
            sx={{
              justifyItems: "flex-end",
              height: 36,
              minWidth: 40,
              padding: "6px 6px",
            }}
            onClick={() => openModal("modifyCustomerData")}
          >
            <BorderColorIcon
              sx={{
                fontSize: 18,
              }}
            />
          </Button>
        </Stack>
      </Grid>
  
      <Grid item xs={6}>
        <ShowData dataValue={"Name"} />
      </Grid>
      <Grid item xs={6}>
        <ShowData dataValue={"Address"} />
      </Grid>

      <Grid item xs={4}>
        <ShowData dataValue={"City"} />
      </Grid>
      <Grid item xs={4}>
        <ShowData dataValue={"State"} />
      </Grid>
      <Grid item xs={4}>
        <ShowData dataValue={"Country"} />
      </Grid>
      <Grid
        item
        xs={6}
        onClick={() => openModal("sendEmail")}
        sx={{ cursor: "pointer" }}
      >
        <ShowData
          dataValue={"Email"}
          endIcon={<MailOutlineIcon fontSize="small" />}
        />
      </Grid>
      <Grid item xs={6}>
        <ShowData dataValue={"Phone"} />
      </Grid>
      <ModifyCustomerDataModal
        open={modifyCustomerData}
        handleClose={() => closeModal("modifyCustomerData")}
      />
      <SendEmailModal
        open={sendEmail}
        handleClose={() => closeModal("sendEmail")}
      />
    </Grid>
  );
};

export default BillingMainInfoPanel;
