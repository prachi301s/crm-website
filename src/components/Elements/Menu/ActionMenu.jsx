//* mui components
import PropTypes from "prop-types";

//* mui components
import ButtonBase from "@mui/material/ButtonBase";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//* mui icons
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const ActionMenu = ({
    anchorEl,
    open,
    handleClose,
    menuItems,
    handleClick,
}) => {
    return (
        <>
            <ButtonBase
                sx={{
                    bgcolor: "rgb(53 119 241 / 10%)",
                    padding: "2px 6px",
                }}
                onClick={handleClick}
            >
                <MoreHorizIcon
                    sx={{
                        fontSize: 16,
                    }}
                    color='info'
                />
            </ButtonBase>
            <Menu
                id='action-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "action-menu",
                }}
                slotProps={{
                    paper: {
                        sx: {
                            width: "100px",
                        },
                    },
                }}
                sx={{
                    "& .MuiMenuItem-root": {
                        fontSize: "12px",
                    },
                    "& .MuiButtonBase-root": {
                        px: 1,
                    },
                }}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                {menuItems.map((menu, i) => {
                    const { Icon, onClick, label } = menu;
                    return (
                        <MenuItem onClick={onClick} key={i}>
                            {Icon && (
                                <ListItemIcon
                                    sx={{
                                        "&.MuiListItemIcon-root": {
                                            minWidth: "18px",
                                        },
                                    }}
                                >
                                    <Icon sx={{ fontSize: "14px" }} />
                                </ListItemIcon>
                            )}
                            {label}
                        </MenuItem>
                    );
                })}
            </Menu>
        </>
    );
};

ActionMenu.propTypes = {
    anchorEl: PropTypes.any.isRequired,
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    menuItems: PropTypes.array.isRequired,
};

export default ActionMenu;
