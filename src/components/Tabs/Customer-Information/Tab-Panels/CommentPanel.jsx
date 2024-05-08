//* lib

//* custom components
import ShowData from "../../../Display-Data/ShowData";

const CommentPanel = () => {
    return (
        <ShowData
            dataValue={"Customer coments"}
            boxSxProps={{
                height: 240,
                alignItems: "flex-Start",
            }}
        />
    );
};

export default CommentPanel;
