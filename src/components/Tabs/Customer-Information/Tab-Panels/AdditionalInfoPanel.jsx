//*  mui component
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";

//* hook form
import { useForm } from "react-hook-form";

//* custom component

import ControllerCheckbox from "../../../Elements/Checkbox/ControllerCheckbox";

//* mui icon

import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import { Button, IconButton, TextField } from "@mui/material";

import SelectPaymentMethodModal from "../../../Modal/SelectPaymentMethodModal";
import useModalStore from "../../../../app/store";

const AdditionalInfoPanel = () => {
  const { control } = useForm({
    defaultValues: {
      hasNoEmail: "",
      noCallWanted: "",
      noEmailWanted: "",
      paymentType: "",
    },
  });

  const { openModal, closeModal, paymentMethod } = useModalStore((state) => ({
    openModal: state.openModal,
    closeModal: state.closeModal,
    paymentMethod: state.paymentMethod,
  }));

  return (
    <Grid container rowSpacing={1}>
      <Grid item xs={12}>
        <ControllerCheckbox
          control={control}
          name="hasNoEmail"
          checkboxLabel={"Customer has no Email"}
          disableMainLabelSpace
        />
      </Grid>
      <Grid item xs={12}>
        <ControllerCheckbox
          control={control}
          name="noCallWanted"
          checkboxLabel={"Customer does not want Calls"}
          disableMainLabelSpace
        />
      </Grid>
      <Grid item xs={12}>
        <ControllerCheckbox
          control={control}
          name="noEmailWanted"
          checkboxLabel={"Customer does not want Emails"}
          disableMainLabelSpace
        />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        item
        xs={18}
      >
        <label htmlFor="way to pay">way to pay</label>

        <TextField
          sx={{ border: "none ", width: "100%" }}
          size="small"
          placeholder="Payment Type"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => openModal("paymentMethod")}
                  edge="end"
                >
                  <BorderColorIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>{" "}
      <SelectPaymentMethodModal
        open={paymentMethod}
        handleClose={() => closeModal("paymentMethod")}
      />
    </Grid>
  );
};

export default AdditionalInfoPanel;
