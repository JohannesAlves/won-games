import GamesTemplate from "templates/Games";
import filterItemsMock from "components/ExploreSidebar/mock";
import gamesMock from "components/GameCardSlider/mock";
import { GamesTemplateProps } from "templates/Games/types";

export default function GamesPage(props: GamesTemplateProps) {
    return <GamesTemplate {...props} />;
}

export async function getServerSideProps() {
    return {
        props: {
            games: gamesMock,
            filterItems: filterItemsMock,
        },
    };
}
