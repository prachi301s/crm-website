import { useCallback, useState, Fragment } from "react";

//* router
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

//* styled mui component
import DropdownMenu from "../Elements/Menu/DropdownMenu";

//* mui components
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

//* mui icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

//* images
import { logo } from "../../utils/ImageImports";

//* nav items
import { NAV_ITEMS } from "../../options/NavigationOptions";
import { useTranslation } from "react-i18next";

//* zustand store
import useModalStore from "../../app/store";

//* Modal
import ContactModal from "../Modal/ContactModal";
import DeleteModal from "../Modal/DeleteModal";
import NonExistentContactModal from "../Modal/NonExistentContactModal";
import ScheduleModal from "../Modal/ScheduleModal";
import PassNoteColleagueModal from "../Modal/PassNoteColleagueModal";
import SendTemplateModal from "../Modal/SendTemplateModal";
import SendMessageModal from "../Modal/SendMessageModal";
import SentLastOrderAmountModal from "../Modal/SentLastOrderAmountModal";
import useLoginStore from "../../app/loginStore";

const MainNavigation = () => {
    const { t } = useTranslation();
    const { handleLogout } = useLoginStore((state) => ({
        handleLogout: state.handleLogout,
    }));
    const theme = useTheme();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElSubNav, setAnchorElSubNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const {
        contact,
        deleteContact,
        nonExistent,
        scheduleCall,
        passNote,
        openModal,
        closeModal,
        sendTemplate,
        sendMessage,
        sentLastOrderAmount,
    } = useModalStore((state) => ({
        contact: state.contact,
        deleteContact: state.deleteContact,
        nonExistent: state.nonExistent,
        scheduleCall: state.scheduleCall,
        passNote: state.passNote,
        openModal: state.openModal,
        closeModal: state.closeModal,
        sendTemplate: state.sendTemplate,
        sendMessage: state.sendMessage,
        sentLastOrderAmount: state.sentLastOrderAmount,
    }));

    const handleOpenNavMenu = (index, event) => {
        setAnchorElNav({ [index]: event.currentTarget });
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleOpenSubNavMenu = (event) => {
        setAnchorElSubNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseSubNavMenu = () => {
        setAnchorElSubNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleClickNavigation = useCallback(
        (menu, event) => {
            if (menu && menu.subMenu) {
                handleOpenSubNavMenu(event);
                return;
            }
            if (menu && menu.modalKey) {
                openModal(menu.modalKey);
                handleCloseNavMenu();
                return;
            }
            if (menu && menu.link) {
                navigate(menu.link);
                handleCloseNavMenu();
                return;
            }
        },
        [navigate, openModal]
    );

    const handleClickSubMenuNavigation = useCallback(
        (menu) => {
            if (menu && menu.link) {
                navigate(menu.link);
                handleCloseNavMenu();
                handleCloseSubNavMenu();
            }
            return null;
        },
        [navigate]
    );

    const handleMenuLogout = () => {
        handleLogout();
        handleCloseUserMenu();
    };

    return (
        <>
            <AppBar
                position='static'
                elevation={0}
                color='secondary'
                sx={{
                    boxShadow: "0 4px 12px #0F11140F",
                    px: 5,
                }}
            >
                <Toolbar
                    sx={{
                        "&.MuiToolbar-root": {
                            minHeight: 56,
                        },
                    }}
                    variant='dense'
                    disableGutters
                >
                    <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
                        <Link to='/'>
                            <img
                                src={logo}
                                alt='larome paris'
                                style={{
                                    width: 100,
                                }}
                            />
                        </Link>
                    </Box>
                    {/* mobile-menu */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {/* {NAV_ITEMS.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))} */}
                        </Menu>
                    </Box>
                    {/* mobile-menu-end */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            justifyContent: "center",
                            gap: 3,
                        }}
                    >
                        {NAV_ITEMS.map((navItem) => (
                            <Fragment key={navItem.id}>
                                <Button
                                    id='nav-menu'
                                    aria-controls={
                                        open ? "nav-menu" : undefined
                                    }
                                    aria-haspopup='true'
                                    aria-expanded={open ? "true" : undefined}
                                    variant='text'
                                    disableElevation
                                    onClick={(event) =>
                                        handleOpenNavMenu(navItem.id, event)
                                    }
                                    endIcon={
                                        anchorElNav &&
                                        anchorElNav[navItem.id] ? (
                                            <KeyboardArrowUpIcon />
                                        ) : (
                                            <KeyboardArrowDownIcon />
                                        )
                                    }
                                    sx={{
                                        fontWeight: 400,
                                    }}
                                >
                                    {t(navItem.menu)}
                                </Button>
                                <DropdownMenu
                                    anchorEl={
                                        anchorElNav && anchorElNav[navItem.id]
                                    }
                                    keepMounted
                                    open={Boolean(
                                        anchorElNav && anchorElNav[navItem.id]
                                    )}
                                    onClose={handleCloseNavMenu}
                                >
                                    {navItem?.menuItem?.map((menu) => {
                                        return (
                                            <Box key={menu.id}>
                                                <MenuItem
                                                    selected={
                                                        menu.link &&
                                                        pathname?.includes(
                                                            menu.link
                                                        )
                                                    }
                                                    onClick={(event) =>
                                                        handleClickNavigation(
                                                            menu,
                                                            event
                                                        )
                                                    }
                                                    sx={{
                                                        pr: menu?.subMenu && 0,
                                                    }}
                                                >
                                                    {t(menu.label)}
                                                    {menu?.subMenu && (
                                                        <KeyboardArrowRightIcon
                                                            sx={{
                                                                color: theme
                                                                    .palette
                                                                    .primary
                                                                    .main,
                                                            }}
                                                        />
                                                    )}
                                                </MenuItem>
                                                {menu.subMenu && (
                                                    <DropdownMenu
                                                        id='nested-menu'
                                                        aria-labelledby='nested-menu'
                                                        anchorEl={
                                                            anchorElSubNav
                                                        }
                                                        open={Boolean(
                                                            anchorElSubNav
                                                        )}
                                                        onClose={
                                                            handleCloseSubNavMenu
                                                        }
                                                        anchorOrigin={{
                                                            vertical: "top",
                                                            horizontal: "right",
                                                        }}
                                                        transformOrigin={{
                                                            vertical: "top",
                                                            horizontal: "left",
                                                        }}
                                                    >
                                                        {menu.subMenu.map(
                                                            (subMenu) => {
                                                                return (
                                                                    <MenuItem
                                                                        key={
                                                                            subMenu.id
                                                                        }
                                                                        onClick={() =>
                                                                            handleClickSubMenuNavigation(
                                                                                subMenu
                                                                            )
                                                                        }
                                                                    >
                                                                        {t(
                                                                            subMenu.label
                                                                        )}
                                                                    </MenuItem>
                                                                );
                                                            }
                                                        )}
                                                    </DropdownMenu>
                                                )}
                                            </Box>
                                        );
                                    })}
                                </DropdownMenu>
                            </Fragment>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Stack
                            flexDirection={"row"}
                            alignItems={"center"}
                            gap={1}
                        >
                            <Tooltip title='Open settings'>
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt='Remy Sharp'
                                        sx={{ width: 32, height: 32 }}
                                        src='/static/images/avatar/2.jpg'
                                    />
                                </IconButton>
                            </Tooltip>
                            <Stack>
                                <Typography variant='body1'>Name</Typography>
                                <Typography
                                    variant='caption'
                                    color={theme.palette.primary.main}
                                >
                                    Admin
                                </Typography>
                            </Stack>
                        </Stack>
                        <Menu
                            sx={{ mt: "45px" }}
                            id='menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem onClick={handleMenuLogout}>
                                <Typography textAlign='center'>
                                    {t("logout")}
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Contact modal */}
            <ContactModal
                open={contact}
                handleClose={() => closeModal("contact")}
            />

            {/* Delete Contact modal */}
            <DeleteModal
                open={deleteContact}
                handleClose={() => closeModal("deleteContact")}
                textOne={"you_are_going_to_delete_a_customer_record"}
                textTwo={"are_you_sure_to_delete_this_tab"}
            />

            {/* Non existent contact modal */}
            <NonExistentContactModal
                open={nonExistent}
                handleClose={() => closeModal("nonExistent")}
            />

            {/* Schedule modal */}
            <ScheduleModal
                open={scheduleCall}
                handleClose={() => closeModal("scheduleCall")}
            />

            {/* Pass a note to a colleague modal */}
            <PassNoteColleagueModal
                open={passNote}
                handleClose={() => closeModal("passNote")}
            />

            {/* Send Template */}
            <SendTemplateModal
                open={sendTemplate}
                handleClose={() => closeModal("sendTemplate")}
            />

            {/* Send Message */}
            <SendMessageModal
                open={sendMessage}
                handleClose={() => closeModal("sendMessage")}
            />

            {/* Sent Last order amount */}
            <SentLastOrderAmountModal
                open={sentLastOrderAmount}
                handleClose={() => closeModal("sentLastOrderAmount")}
            />
        </>
    );
};

export default MainNavigation;
