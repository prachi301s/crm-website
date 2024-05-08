import React from "react";
import InfoBoxLayout from "../Layout/InfoBoxLayout";
import {
  Box,
  Grid,
  InputAdornment,
  InputLabel,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ShowData from "../Display-Data/ShowData";
import palette from "../../theme/palette";

const SeeOrderDescriptionBox = () => {
  return (
    <>
      <InfoBoxLayout     headerVariant={"dark"} infoTitle={"Description"}>
        <Grid      container spacing={1}   padding="0rem  0rem 0rem 0.2rem">
          <Grid item container xs={6} rowGap={1} padding="0.5  0.5rem 0.5rem 0.2rem" >
            <Grid
              item
              xs={12}
              spacing={3}
              sx={{
                backgroundColor: "#fff",
                border: `1px solid ${palette.primary.light}`,
                boxShadow: "0 4px 12px #0F11140F",
                padding: "10px",

                borderRadius: "10px",
              }}
            >
              <Stack direction="column" spacing={1}>
                <Stack direction="row" spacing={1}>
<Grid item xs={8}>
  <Typography  sx={{fontSize:'13px'}}  >Number Order</Typography>
  <ShowData />
  {/* <TextField
    variant={"filled"}
    name={"notes"}
    // mainLabel={"notes"}
    size="small"
  /> */}
</Grid>
<Grid item xs={4}>
  <Typography  sx={{fontSize:'13px'}}  >Date</Typography>
  <ShowData endIcon={<CalendarMonthIcon />} />
                    {/* <TextField
                      variant={"filled"}
                      name={"notes"}
                      // mainLabel={"notes"}
                      size="small"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end"  alignItems="center" >
                            <CalendarMonthIcon/>
                          </InputAdornment>
                        ),
                      }}
                    /> */}
                  </Grid>
                </Stack>
                <Grid item xs={12}>
                  <Typography  sx={{fontSize:'13px'}}  >Operator</Typography>
                  <ShowData />
                  {/* <TextField
                    variant={"filled"}
                    name={"notes"}
                    fullWidth
                    // mainLabel={"notes"}
                    size="small"
                  /> */}
                </Grid>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              spacing={2}
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #E7E7E7",
                boxShadow: "0 4px 12px #0F11140F",
                padding: "10px  10px 5px 10px",

                borderRadius: "10px",
              }}
            >
              <Stack direction="column" spacing={1}    padding={0}  >
                <Stack direction="row"     spacing={1}>
                  <Grid item xs={8}>
                    <Typography  sx={{fontSize:'13px'}}  >Issued By(Pack 1)</Typography>
                    <ShowData />
                    {/* <TextField
                      variant={"filled"}
                      name={"notes"}
                      mainLabel={"notes"}
                      size="small"
                    /> */}
                  </Grid>
                  <Grid item xs={4}>
                    <Typography  sx={{fontSize:'13px'}}  >Date PK 1</Typography>
                    <ShowData />
                    {/* <TextField
                      variant={"filled"}
                      name={"notes"}
                      mainLabel={"notes"}
                      size="small"
                    /> */}
                  </Grid>
                </Stack>
                <Stack direction="row" spacing={1}>
                  <Grid item xs={8}>
                    <Typography  sx={{fontSize:'13px'}}  >Issued By(Pack 1)</Typography>
                    <ShowData />
                    {/* <TextField
                      variant={"filled"}
                      name={"notes"}
                      mainLabel={"notes"}
                      size="small"
                    /> */}
                  </Grid>
                  <Grid item xs={4}>
                    <Typography  sx={{fontSize:'13px'}}  >Date PK 1</Typography>
                    <ShowData />
                    {/* <TextField
                      variant={"filled"}
                      name={"notes"}
                      mainLabel={"notes"}
                      size="small"
                    /> */}
                  </Grid>
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          <Grid item container xs={6} rowGap={1} padding="0.5  0.5rem 0.5rem 0.2rem">
            <Grid
              item
              xs={12}
              spacing={3}
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #E7E7E7",
                boxShadow: "0 4px 12px #0F11140F",
                padding: "10px",

                borderRadius: "10px",
              }}
            >
              <Stack direction="column" spacing={1}>
                <Grid item xs={12}>
                  <Typography  sx={{fontSize:'13px'}}  > Agency</Typography>
                  {/* <TextField
                    variant={"filled"}
                    fullWidth
                    size="small"
                    name={"notes"}
                    mainLabel={"notes"}
                  /> */}
                  <ShowData />
                </Grid>
                <Grid item xs={12}>
                  <Typography  sx={{fontSize:'13px'}}  >Expedition Number</Typography>
                  <ShowData />
                  {/* <TextField
                    variant={"filled"}
                    fullWidth
                    size="small"
                    name={"notes"}
                    mainLabel={"notes"}
                  /> */}
                </Grid>
                <Grid item xs={12}>
                  <Typography  sx={{fontSize:'13px'}}  >Shipment State</Typography>
                  {/* <TextField
                    variant={"filled"}
                    fullWidth
                    size="small"
                    mainLabel={"notes"}
                  /> */}
                  <ShowData />
                </Grid>
                <Stack direction="row" spacing={1}>
                  <Grid item xs={8}>
                    <Typography  sx={{fontSize:'13px'}}  >Number Package</Typography>
                    {/* <TextField
                      variant={"filled"}
                      size="small"
                      mainLabel={"notes"}
                    /> */}
                    <ShowData />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography sx={{ fontSize: "14px" }}>Kg</Typography>
                    <ShowData />
                    {/* <TextField
                      variant={"filled"}
                      // fullWidth
                      width="50%"
                      size="small"
                      mainLabel={"notes"}
                    /> */}
                  </Grid>
                </Stack>
              </Stack>
            </Grid>
            <Grid
              item
              xs={12}
              spacing={3}
              sx={{
                backgroundColor: "#fff",
                border: "1px solid #E7E7E7",
                boxShadow: "0 4px 12px #0F11140F",
                padding: "10px",

                borderRadius: "10px",
              }}
            >
              <Grid item xs={12}>
                <Typography  sx={{fontSize:'13px'}}  >Prep Date</Typography>
                {/* <TextField

                // component={<PlusOne/>}
                  variant={"filled"}
                  name={"notes"}
                  // mainLabel={"notes"}
                  size="small"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end"  alignItems="center" >
                        <CalendarMonthIcon/>
                      </InputAdornment>
                    ),
                  }}
                /> */}
                <ShowData endIcon={<CalendarMonthIcon />} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </InfoBoxLayout>
    </>
  );
};

export default SeeOrderDescriptionBox;

