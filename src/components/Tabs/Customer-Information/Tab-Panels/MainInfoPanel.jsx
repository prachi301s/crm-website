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

const DATA = [
    { id: 1, phoneNumber: 9874561234, type: "Emergency Phone" },
    { id: 2, phoneNumber: 9874561234, type: "Emergency Phone" },
    { id: 3, phoneNumber: 9874561234, type: "Emergency Phone" },
];

const PhoneListItem = ({ item, handleMobileEdit, handleMobileDelete }) => {
    return (
        <MenuItem>
            <ListItemText>{item.phoneNumber}</ListItemText>
            <ListItemText>{item.type}</ListItemText>
            <Stack direction="row" divider={<Divider orientation="vertical" flexItem />}>
                <IconButton>
                    <CallIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={handleMobileEdit}>
                    <EditIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={handleMobileDelete}>
                    <ClearIcon fontSize="small" />
                </IconButton>
            </Stack>
        </MenuItem>
    );
};

PhoneListItem.propTypes = {
    handleMobileDelete: PropTypes.func.isRequired,
    handleMobileEdit: PropTypes.func.isRequired,
    item: PropTypes.any,
};

const MainInfoPanel = () => {
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

    const [anchorPhoneListEl, setAnchorPhoneListEl] = useState(null);
    const [openAddNewPhone, setOpenAddNewPhone] = useState(false);

    const handlePhoneList = (event) => {
        setAnchorPhoneListEl(event.currentTarget);
    };

    const handleClosePhoneList = () => {
        setAnchorPhoneListEl(null);
    };

    const handleOpenAddPhone = () => {
        setAnchorPhoneListEl(null);
        setOpenAddNewPhone(true);
    };

    const handleCloseAddPhone = () => {
        setOpenAddNewPhone(false);
    };

    const handleMobileEdit = () => {
        handleClosePhoneList();
        openModal("mobileCallEdit");
    };

    const handleMobileDelete = () => {
        handleClosePhoneList();
        openModal("mobileCallDelete");
    };

    const open = Boolean(anchorPhoneListEl);
    const id = open ? "phone-list" : undefined;

    return (
        <Grid container spacing={1}>
            <Grid
                item
                container
                justifyContent={"center"}
                sx={{
                    position: "relative",
                }}
            >
                <Grid item>
                    <Button
                        variant="contained"
                        startIcon={<SearchIcon />}
                        sx={{ width: 140, padding: "4px 16px" }}
                        onClick={() => openModal("customerSearch")}
                    >
                        Search
                    </Button>
                </Grid>
                <Button
                    variant="contained"
                    sx={{
                        position: "absolute",
                        right: 0,
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
            </Grid>
            <Grid item xs={6}>
                <ShowData dataValue={"Name"} />
            </Grid>
            <Grid item xs={6}>
                <ShowData dataValue={"Address"} />
            </Grid>

            <Grid item xs={3}>
                <ShowData dataValue={"City"} />
            </Grid>
            <Grid item xs={3}>
                <ShowData dataValue={"State"} />
            </Grid>
            <Grid item xs={3}>
                <ShowData dataValue={"Country"} />
            </Grid>
            <Grid item xs={3}>
                <ShowData dataValue={"Type"} />
            </Grid>
            <Grid item xs={6}>
                <ShowData dataValue={"Contact"} />
            </Grid>
            <Grid item xs={6} onClick={() => openModal("sendEmail")} sx={{ cursor: "pointer" }}>
                <ShowData dataValue={"Email"} endIcon={<MailOutlineIcon fontSize="small" />} />
            </Grid>
            <Grid item xs={12}>
                <Box
                    sx={{
                        width: "100%",
                        height: 32,
                        bgcolor: "rgba(0, 0, 0, 0.06)",
                        borderRadius: 1,
                        padding: "5px 18px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        cursor: "pointer",
                    }}
                    onClick={handlePhoneList}
                >
                    <Typography>Mobile</Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        {open ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
                    </Box>
                </Box>
            </Grid>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorPhoneListEl}
                onClose={handleClosePhoneList}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                slotProps={{
                    paper: {
                        sx: {
                            width: { lg: 420, xs: 500 },
                        },
                    },
                }}
            >
                <MenuList>
                    {DATA.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                <PhoneListItem
                                    item={item}
                                    handleMobileEdit={handleMobileEdit}
                                    handleMobileDelete={handleMobileDelete}
                                />
                            </Fragment>
                        );
                    })}

                    <Divider />
                    <MenuItem onClick={handleOpenAddPhone}>
                        <ListItemIcon>
                            <AddBoxOutlinedIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Add Phone</ListItemText>
                    </MenuItem>
                </MenuList>
            </Popover>
            {/* form modal */}
            <AddCustomerPhoneModal open={openAddNewPhone} handleClose={handleCloseAddPhone} />
            <CustomerSearchModal
                open={customerSearch}
                handleClose={() => closeModal("customerSearch")}
            />
            <ModifyCustomerDataModal
                open={modifyCustomerData}
                handleClose={() => closeModal("modifyCustomerData")}
            />
            <SendEmailModal open={sendEmail} handleClose={() => closeModal("sendEmail")} />
            <CustomModificationModal
                heading={"write_the_modification_of_this_phone"}
                open={mobileCallEdit}
                handleClose={() => closeModal("mobileCallEdit")}
            />
            <DeleteModal
                heading={"are_you_sure_you_want_to_delete_this_phone"}
                open={mobileCallDelete}
                handleClose={() => closeModal("mobileCallDelete")}
            />
        </Grid>
    );
};

export default MainInfoPanel;
