import InfoBoxLayout from "../Layout/InfoBoxLayout";

//* mui component
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

//*mui icon
import GetAppIcon from "@mui/icons-material/GetApp";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const registrationChecklist = [
    "Registered",
    "Have You Bought on the web",
    "Dealer Code",
    "Dealer Code",
];

const authorizedChecklist = ["Authorized", "Have App", "Have App", "Have App"];

function WebInfoBox() {
    return (
        <InfoBoxLayout infoTitle={"web registration data"}>
            <Stack
                sx={{
                    flexDirection: "row",
                    justifyContent: "center",
                    columnGap: 10,
                }}
            >
                <Stack>
                    <List>
                        {registrationChecklist.map((listItem, index) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        {index % 3 ? (
                                            <CheckCircleOutlineIcon />
                                        ) : (
                                            <HighlightOffIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={listItem} />
                                </ListItem>
                            );
                        })}
                    </List>
                    <Button variant="contained" startIcon={<GetAppIcon />}>
                        Download App
                    </Button>
                </Stack>

                <Stack>
                    <List>
                        {authorizedChecklist.map((listItem, index) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        {index % 3 ? (
                                            <CheckCircleOutlineIcon />
                                        ) : (
                                            <HighlightOffIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={listItem} />
                                </ListItem>
                            );
                        })}
                    </List>
                    <Button variant="contained" startIcon={<HowToRegIcon />}>
                        Registration Professional
                    </Button>
                </Stack>
            </Stack>
        </InfoBoxLayout>
    );
}

export default WebInfoBox;
