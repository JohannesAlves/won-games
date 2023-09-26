import Heading from "components/Heading";
import * as S from "./styles";
import { ShoppingCart } from "styled-icons/material-outlined";
import Button from "components/Button";

const PaymentForm = () => {
    return (
        <S.Wrapper>
            <S.Body>
                <Heading lineBottom lineColor="primary" size="small">
                    Payment
                </Heading>
            </S.Body>
            <S.Footer>
                <Button as="a" minimal fullWidth>
                    Continue Shopping
                </Button>
                <Button fullWidth icon={<ShoppingCart />}>
                    Buy now
                </Button>
            </S.Footer>
        </S.Wrapper>
    );
};

export default PaymentForm;
