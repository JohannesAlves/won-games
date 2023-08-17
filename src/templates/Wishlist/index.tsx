import { WishlistTemplateProps } from "./types";

import { Container } from "components/Container";
import Heading from "components/Heading";
import ShowCase from "components/ShowCase";
import GameCard from "components/GameCard";
import { Divider } from "components/Divider";
import { Grid } from "components/Grid";
import Base from "templates/Base";
import Empty from "components/Empty";

const Wishlist = ({
    games = [],
    recommendedGames,
    recommendedHighlight,
}: WishlistTemplateProps) => (
    <Base>
        <Container>
            <Heading lineLeft lineColor="secondary" color="white">
                Wishlist
            </Heading>

            {games?.length ? (
                <Grid>
                    {games?.map((game, index) => (
                        <GameCard key={`wishlist-${index}`} {...game} />
                    ))}
                </Grid>
            ) : (
                <Empty
                    title="Your wishlist is empty"
                    description="Games added to your wishlist will appear here"
                    hasLink
                />
            )}

            <Divider />
        </Container>

        <ShowCase
            title="You may like this games"
            games={recommendedGames}
            highlight={recommendedHighlight}
        />
    </Base>
);

export default Wishlist;
