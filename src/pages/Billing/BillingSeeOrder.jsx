import { useForm } from "react-hook-form";
//* mui component
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

//*custom component
import ControllerCheckbox from "../../components/Elements/Checkbox/ControllerCheckbox";
import CustomerInfoTab from "../../components/Tabs/Customer-Information/CustomerInfoTab";
import OrderLineInfoBox from "../../components/InfoBox/OrderLineInfoBox";
import QuickOrderLineInfoBox from "../../components/InfoBox/QuickOrderLineInfoBox";
import OrderNoteInfoBox from "../../components/InfoBox/OrderNoteInfoBox";

//* mui icon
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import useModalStore from "../../app/store";
import SelectPaymentMethodModal from "../../components/Modal/SelectPaymentMethodModal";
import CustomerMainDetailTab from "../../components/Tabs/Customer-Main-Detail/CustomerMainDetailTab";
import OrderDescriptionBox from "../../components/InfoBox/OrderDescriptionBox";
import SeeOrderDescriptionBox from "../../components/InfoBox/SeeOrderDescriptionBox";

const checkboxStyle = {
  padding: "4px",
};

function BillingSeeOrder() {
  const { control } = useForm();
  const { openModal, closeModal, paymentMethod } = useModalStore((state) => ({
    openModal: state.openModal,
    closeModal: state.closeModal,
    paymentMethod: state.paymentMethod,
  }));
  return (
    <Grid container columnSpacing={3} rowSpacing={3}>
      <Grid item xs={12}>
        <Stack></Stack>
      </Grid>
      <Grid item md={8} xs={12}>
        <Grid item container rowSpacing={1}>
          <Grid item xs={12}>
            <SeeOrderDescriptionBox />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} xs={12}>
        <Grid item container >
          <Grid item xs={12}>
            <CustomerInfoTab />
          </Grid>
          {/* <Grid item xs={12}>
                        <QuickOrderLineInfoBox />
                    </Grid> */}
          {/* <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                boxShadow: "0 4px 12px #0F11140F",
                borderRadius: "10px",
              }}
              variant="outlined"
            >
              <Stack
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Stack>
                  <ControllerCheckbox
                    control={control}
                    name={"noBag"}
                    checkboxLabel={"Do Not Include Bag"}
                    checkboxStyle={checkboxStyle}
                    disableMainLabelSpace
                  />
                  <ControllerCheckbox
                    control={control}
                    name={"noOrderPrepare"}
                    checkboxLabel={"Do Not Prepare the order"}
                    checkboxStyle={checkboxStyle}
                    disableMainLabelSpace
                  />
                </Stack>
                <Button
                  startIcon={<MonetizationOnOutlinedIcon />}
                  variant="contained"
                  onClick={() => openModal("paymentMethod")}
                >
                  Way to pay
                </Button>
              </Stack>
            </Paper>
          </Grid> */}
          {/* <Grid item xs={12}>
            <OrderNoteInfoBox />
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item xs={24} >
        <OrderLineInfoBox />
      </Grid>
      <SelectPaymentMethodModal
        open={paymentMethod}
        handleClose={() => closeModal("paymentMethod")}
      />
    </Grid>
  );
}

export default BillingSeeOrder;
