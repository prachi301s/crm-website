//* mui components
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

//* custom components
import ShowData from "../../../Display-Data/ShowData";

const rankingData = [
    {
        id: 1,
        rank: 1,
        perfume: "",
    },
    {
        id: 2,
        rank: 2,
        perfume: "",
    },
    {
        id: 3,
        rank: 3,
        perfume: "",
    },
    {
        id: 4,
        rank: 4,
        perfume: "",
    },
    {
        id: 5,
        rank: 5,
        perfume: "",
    },
    {
        id: 6,
        rank: 6,
        perfume: "",
    },
    {
        id: 7,
        rank: 7,
        perfume: "",
    },
    {
        id: 8,
        rank: 8,
        perfume: "",
    },
];

const CustomerRankingPanel = () => {
    return (
        <Grid container>
            <Grid item xs={6}>
                <Grid item container>
                    <Grid item xs={12}>
                        <Typography variant="h5" textAlign={"center"}>
                            Men&apos;s perfume
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item container spacing={1} px={4} py={1}>
                            {rankingData.map((rank) => {
                                return (
                                    <Grid item xs={6} key={rank.id}>
                                        <ShowData dataValue={"1s"} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="contained">Calculate</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6}>
                <Grid item container>
                    <Grid item xs={12}>
                        <Typography variant="h5" textAlign={"center"}>
                            Women&apos;s perfume
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item container spacing={1} px={4} py={1}>
                            {rankingData.map((rank) => {
                                return (
                                    <Grid item xs={6} key={rank.id}>
                                        <ShowData dataValue={"1s"} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Button variant="contained">Calculate</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CustomerRankingPanel;
