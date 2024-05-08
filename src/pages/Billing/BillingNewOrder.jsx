import { useForm } from "react-hook-form";
//* mui component
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
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
import PageLayout from "../../components/Layout/PageLayout";
import StatisticsDataBox from "../../components/Statistics-Data/StatisticsDataBox";
import { Typography, styled, useTheme } from "@mui/material";
import { PlaceOutlined } from "@mui/icons-material";
import Person3Icon from "@mui/icons-material/Person3";
const checkboxStyle = {
  padding: "4px",
};

function BillingNewOrder() {
  const { control } = useForm();
  const theme = useTheme();
  const { openModal, closeModal, paymentMethod } = useModalStore((state) => ({
    openModal: state.openModal,
    closeModal: state.closeModal,
    paymentMethod: state.paymentMethod,
  }));
  return (
    <>
      <Grid
        container
        sx={{
          bgcolor: theme.palette.secondary.main,
          // bgcolor: "red",
          width: "100%",
          borderRadius: 1,
          boxShadow: "0 4px 12px #0F11140F",
          //   padding: 1,
          marginBottom: 1,
        }}
      >
        <Grid
          container
          xs={8}
          px={6}
          direction={"row"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          // columnGap={1}
        >
          <Grid item xs={3}>
            <StatisticsDataBox
              label={"No. Order"}
              isInput
            
            />
          </Grid>
          <Grid item xs={3}>
            <StatisticsDataBox
              label={"Date"}
              isInput
            
            />
          </Grid>
          <Grid item  sm={3}>
            <StatisticsDataBox
              label={"Time"}
              isInput
             
            />
          </Grid>

          {/* </Stack> */}
        </Grid>
        <Grid  container xs={4} sm={4} p={1}>
          <Grid item sm={10} xs={4}>
            <Stack
              direction={"row"}
              spacing={2}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
              p={2}
            >
              <Person3Icon />
              <Typography fontWeight={600}> Worker Name</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      <Grid container columnSpacing={1}>
        <Grid item xs={12}>
          <Stack></Stack>
        </Grid>
        <Grid item md={8} xs={12}>
          <Grid item container rowSpacing={1}>
            <Grid item xs={12}>
              <CustomerMainDetailTab />
            </Grid>
            <Grid item xs={12}>
              <OrderLineInfoBox />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4} xs={12}>
          <Grid item container rowSpacing={1}>
            <Grid item xs={12}>
              <CustomerInfoTab />
            </Grid>
            <Grid item xs={12}>
              <QuickOrderLineInfoBox />
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
              <OrderNoteInfoBox />
            </Grid>
          </Grid>
        </Grid>
        <SelectPaymentMethodModal
          open={paymentMethod}
          handleClose={() => closeModal("paymentMethod")}
        />
      </Grid>
    </>
  );
}

export default BillingNewOrder;
