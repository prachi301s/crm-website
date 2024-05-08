//* custom layout
import InfoBoxLayout from "../Layout/InfoBoxLayout";

//* tabs
import RankingTab from "../Tabs/Ranking/RankingTab";

function RankingInfoBox() {
    return (
        <InfoBoxLayout infoTitle={"Over all sales ranking"}>
            <RankingTab  />
        </InfoBoxLayout>
    );
}

export default RankingInfoBox;
