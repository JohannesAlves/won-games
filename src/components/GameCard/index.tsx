import Ribbon from "../../components/Ribbon";
import Button from "../../components/Button";
import * as S from "./styles";
import { GameCardProps } from "./types";
import {
    AddShoppingCart,
    FavoriteBorder,
    Favorite,
} from "styled-icons/material-outlined";

export default function GameCard({
    developer,
    img,
    price,
    title,
    promotionalPrice,
    isFavorite = false,
    onFav,
    ribbon,
    ribbonColor = "primary",
    ribbonSize = "small",
}: GameCardProps) {
    return (
        <S.Wrapper>
            <S.ImageBox>
                {!!ribbon && (
                    <Ribbon color={ribbonColor} size={ribbonSize}>
                        {ribbon}
                    </Ribbon>
                )}
                <img src={img} alt={title} />
            </S.ImageBox>

            <S.Content>
                <S.Info>
                    <S.Title>{title}</S.Title>
                    <S.Developer>{developer}</S.Developer>
                </S.Info>

                <S.FavButton role="button" onClick={onFav}>
                    {isFavorite ? (
                        <Favorite aria-label="remove from wishlist"></Favorite>
                    ) : (
                        <FavoriteBorder aria-label="add to wishlist" />
                    )}
                </S.FavButton>

                <S.BuyBox>
                    {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
                    <S.Price>{promotionalPrice || price}</S.Price>
                    <Button icon={<AddShoppingCart />} size="small" />
                </S.BuyBox>
            </S.Content>
        </S.Wrapper>
    );
}
