import PropTypes from "prop-types";

//* mui components
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";

//* Action layout for Modal
import ActionModal from "../Layout/Modal-Layout/Action-Modals/ActionModal";

//* mui icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

//* options
import { TEMPLATE_OPTIONS } from "../../options/TemplateOptions";

//* libraries
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const SendTemplateModal = ({ open, handleClose }) => {
    const theme = useTheme();
    return (
        // Send Template
        <ActionModal
            open={open}
            Icon={<WhatsAppIcon fontSize='medium' />}
            heading={"send_a_whatsApp_template"}
            handleClose={handleClose}
            height={40}
            width={40}
            buttonNameOne={"send"}
            buttonNameTwo={"cancel"}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                    my: 3,
                }}
            >
                <SimpleBar
                    style={{
                        maxHeight: 150,
                        justifyContent: "center",
                        width: 300,
                        border: `1px solid ${theme.palette.primary.light}`,
                        borderRadius: 10,
                        boxShadow: "0 4px 12px #0F11140F",
                    }}
                >
                    <List dense>
                        {TEMPLATE_OPTIONS.map((option, i) => (
                            <ListItem disablePadding key={i}>
                                <ListItemButton>
                                    <ListItemText primary={option} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </SimpleBar>
            </Box>
        </ActionModal>
    );
};

SendTemplateModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default SendTemplateModal;
