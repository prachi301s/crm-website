import PropTypes from "prop-types";

//* component
import MainNavigation from "../Navigation/MainNavigation";

//* mui component
import Container from "@mui/material/Container";

const MainLayout = ({ children }) => {
    return (
        <>
            <MainNavigation />
            <main>
                <Container
                    maxWidth="xl"
                    sx={{
                        my: 2,
                    }}
                >
                    {children}
                </Container>
            </main>
        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node,
};

export default MainLayout;
