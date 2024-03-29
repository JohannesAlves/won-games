import Ribbon from "../../components/Ribbon";
import * as S from "./styles";
import { GameCardProps } from "./types";
import Link from "next/link";
import formatPrice from "utils/formatPrice";
import CartButton from "components/CartButton";
import WishlistButton from "components/WishlistButton";
import Image from "next/image";

export default function GameCard({
    id,
    slug,
    developer,
    img,
    price,
    title,
    promotionalPrice,
    ribbon,
    ribbonColor = "primary",
    ribbonSize = "small",
}: GameCardProps) {
    return (
        <S.Wrapper data-cy="game-card">
            <Link href={`/game/${slug}`} passHref>
                <S.ImageBox>
                    {!!ribbon && (
                        <Ribbon color={ribbonColor} size={ribbonSize}>
                            {ribbon}
                        </Ribbon>
                    )}

                    <Image src={img} alt={title} fill={true} />
                </S.ImageBox>
            </Link>

            <S.Content>
                <Link href={`/game/${slug}`}>
                    <S.Info>
                        <S.Title>{title}</S.Title>
                        <S.Developer>{developer}</S.Developer>
                    </S.Info>
                </Link>
                <S.FavButton>
                    <WishlistButton id={id} />
                </S.FavButton>
                <S.BuyBox>
                    {!!promotionalPrice && (
                        <S.Price isPromotional>{formatPrice(price)}</S.Price>
                    )}
                    <S.Price>
                        {price === 0 ? "Get Now" : formatPrice(promotionalPrice || price)}
                    </S.Price>
                    <CartButton id={id} />
                </S.BuyBox>
            </S.Content>
        </S.Wrapper>
    );
}
