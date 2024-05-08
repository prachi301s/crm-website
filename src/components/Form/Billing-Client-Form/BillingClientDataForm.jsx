//* mui components
import Grid from "@mui/material/Grid";

//* custom Controller for fields
import ControllerTextField from "../../Elements/TextField/ControllerTextField";

//* libraries
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import InfoBoxLayout from "../../Layout/InfoBoxLayout";
import { Typography } from "@mui/material";
import ShowData from "../../Display-Data/ShowData";

const BillingClientDataForm = () => {
  const { t } = useTranslation();
  const { control } = useForm({
    address: "",
    phoneNumber: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    workerName: "",
    wayOfPayment: "",
  });
  return (
    // <Grid container rowSpacing={2}>
    //   <Grid item xs={12}>
    //     <Grid item container columnSpacing={2}>
    //       <Grid item xs={8}>
    //         <ControllerTextField
    //           control={control}
    //           name={"address"}
    //           mainLabel={t("address")}
    //              variant={"filled"}

    //         />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <ControllerTextField
    //           control={control}
    //           name={"phoneNumber"}
    //           mainLabel={t("phone_number")}
    //              variant={"filled"}

    //         />
    //       </Grid>
    //     </Grid>
    //   </Grid>

    //   <Grid item xs={12}>
    //     <Grid item container columnSpacing={2}>
    //       <Grid item xs={4}>
    //         <ControllerTextField
    //           control={control}
    //           name={"city"}
    //           mainLabel={t("city")}
    //              variant={"filled"}

    //         />

    //       </Grid>
    //       <Grid item xs={4}>
    //         <ControllerTextField
    //           control={control}
    //           name={"state"}
    //           mainLabel={t("state")}
    //              variant={"filled"}

    //         />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <ControllerTextField
    //           control={control}
    //           name={"country"}
    //           mainLabel={t("country")}
    //              variant={"filled"}

    //         />
    //       </Grid>
    //     </Grid>
    //   </Grid>

    //   <Grid item xs={12}>
    //     <Grid item container columnSpacing={2}>
    //       <Grid item xs={4}>
    //         <ControllerTextField
    //           control={control}
    //           name={"zipCode"}
    //           mainLabel={t("zip_code")}
    //              variant={"filled"}

    //         />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <ControllerTextField
    //           control={control}
    //           name={"workerName"}
    //           mainLabel={t("worker_name")}
    //              variant={"filled"}

    //         />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <ControllerTextField
    //           control={control}
    //           name={"wayOfPayment"}
    //           mainLabel={t("way_of_payment")}
    //              variant={"filled"}

    //         />
    //       </Grid>
    //     </Grid>
    //   </Grid>
    // </Grid>

    <>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Grid item container columnSpacing={2}>
            <Grid item xs={8}>
              <Typography> Address</Typography>
              <ShowData
                dataValue="Address"
                boxSxProps={{ color: "primary.main" }}
              />
            </Grid>





            
            <Grid item xs={4}>
              <Typography> Phone Number</Typography>
              <ShowData
                dataValue="Phone Number"
                boxSxProps={{ color: "primary.main" }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid item container columnSpacing={2}>
            <Grid item xs={4}>
            <Typography> City</Typography>
            <ShowData
            
                dataValue="City"
                boxSxProps={{ color: "primary.main" }}
              />
            </Grid>
            <Grid item xs={4}>
            <Typography> state</Typography>
            <ShowData
            
                dataValue="state"
                boxSxProps={{ color: "primary.main" }}
              />
            </Grid>
            <Grid item xs={4}>
            <Typography>country</Typography>
            <ShowData
            
                dataValue="country"
                boxSxProps={{ color: "primary.main" }}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid item container columnSpacing={2}>
            <Grid item xs={4}>
            <Typography>zipCode</Typography>
            <ShowData
            
                dataValue="zipCode"
                boxSxProps={{ color: "primary.main" }}
              />
            </Grid>
            <Grid item xs={4}>
            <Typography>workerName</Typography>
            <ShowData
            
                dataValue="workerName"
                boxSxProps={{ color: "primary.main" }}
              />
            </Grid>
            <Grid item xs={4}>
            <Typography>wayOfPayment</Typography>
            <ShowData
            
                dataValue="wayOfPayment"
                boxSxProps={{ color: "primary.main" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default BillingClientDataForm;

// changed
