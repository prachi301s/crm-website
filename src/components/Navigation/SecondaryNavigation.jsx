import { Link } from "react-router-dom";

//* mui components
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

//* mui icons
import StyleIcon from "@mui/icons-material/Style";

const SUB_MENUS = [
    {
        id: 1,
        label: "sales",
        linkTo: "sales",
        icon: <StyleIcon />,
    },
    {
        id: 2,
        label: "promotion",
        linkTo: "promotion",
        icon: <StyleIcon />,
    },
    {
        id: 3,
        label: "exhibitors",
        linkTo: "exhibitors",
        icon: <StyleIcon />,
    },
    {
        id: 4,
        label: "ranking",
        linkTo: "ranking",
        icon: <StyleIcon />,
    },
    {
        id: 5,
        label: "web",
        linkTo: "web",
        icon: <StyleIcon />,
    },
    {
        id: 6,
        label: "information",
        linkTo: "information",
        icon: <StyleIcon />,
    },
];

function SecondaryNavigation() {
    const theme = useTheme();
    return (
        <Stack
            flexDirection='row'
            justifyContent={"space-between"}
            gap={2}
            py={1}
            px={2}
            borderRadius={"8px"}
            bgcolor={theme.palette.secondary.main}
        >
            {SUB_MENUS.map((menu) => {
                return (
                    <Stack
                        key={menu.id}
                        flexDirection='row'
                        alignItems={"center"}
                        gap={1}
                        sx={{
                            "& .nav-link": {
                                textTransform: "capitalize",
                                textDecoration: "none",
                            },

                            "& .nav-link, .nav-icon": {
                                color: theme.palette.primary.main,
                                transition: "color 300ms ease-in-out",
                            },

                            "&:hover": {
                                "& .nav-link, .nav-icon": {
                                    color: theme.palette.grey[900],
                                },
                            },
                        }}
                    >
                        <Box className='nav-icon'>{menu.icon}</Box>
                        <Typography
                            component={Link}
                            to={menu.linkTo}
                            variant='body2'
                            className='nav-link'
                        >
                            {menu.label}
                        </Typography>
                    </Stack>
                );
            })}
        </Stack>
    );
}

export default SecondaryNavigation;
