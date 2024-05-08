import PropTypes from "prop-types";

//* form
import PassNoteColleagueForm from "../Form/PassNoteColleagueForm";

//* Form layout for Modal
import FormModal from "../Layout/Modal-Layout/Form-Modals/FormModal";

//* mui icons
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

const PassNoteColleagueModal = ({ open, handleClose }) => {
    return (
        // Pass note to a colleague
        <FormModal
            open={open}
            Icon={<PersonAddAltOutlinedIcon fontSize='medium' />}
            heading={"pass_note_to_a_colleague"}
            handleClose={handleClose}
            height={36}
            width={36}
            maxWidth={"sm"}
        >
            <PassNoteColleagueForm />
        </FormModal>
    );
};

PassNoteColleagueModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

export default PassNoteColleagueModal;
