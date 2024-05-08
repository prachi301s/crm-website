// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
// import { Typography } from "@mui/material";

// function ShowData({ dataValue, startIcon, endIcon, boxSxProps }) {
//     return (
//         <Box
//             sx={{
//                 background: "rgba(231, 231, 231, 0.50)",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 borderRadius: 1,
//                 height: 32,
//                 width: "100%",
//                 px: 1,
//                 py: 0.5,
//                 ...boxSxProps,
//             }}
//         >
//             {startIcon}
//             <Typography variant="body2">{dataValue}</Typography>
//             {endIcon}
//         </Box>
//     );
// }

// ShowData.propTypes = {
//     dataValue: PropTypes.string,
//     boxSxProps: PropTypes.object,
//     startIcon: PropTypes.any,
//     endIcon: PropTypes.any,
// };

// export default ShowData;




import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function ShowData({ dataValue, startIcon, endIcon, boxSxProps, label }) {
    return (
        <Box
            sx={{
                background: "rgba(231, 231, 231, 0.50)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: 1,
                height: 32,
                width: "100%",
                px: 1,
                py: 0.5,
                ...boxSxProps,
            }}
        >
            {startIcon}
            <Typography sx={{fontSize:'14px'    }}>{label} {dataValue}</Typography>
            {endIcon}
        </Box>
    );
}

ShowData.propTypes = {
    dataValue: PropTypes.string,
    boxSxProps: PropTypes.object,
    startIcon: PropTypes.any,
    endIcon: PropTypes.any,
    label: PropTypes.string, // New prop type for label
};

export default ShowData;
