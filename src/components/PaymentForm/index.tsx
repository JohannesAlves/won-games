import Heading from "components/Heading";
import * as S from "./styles";
import { ShoppingCart } from "styled-icons/material-outlined";
import Button from "components/Button";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { PaymentIntent, StripeCardElementChangeEvent } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useCart } from "hooks/useCart";
import { createPayment, createPaymentIntent } from "utils/stripe/methods";
import { PaymentFormProps } from "./types";
import { FormLoading } from "components/Form";
import { useRouter } from "next/router";

const PaymentForm = ({ session }: PaymentFormProps) => {
    const { items } = useCart();
    const { push } = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [disabled, setDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [clientSecret, setClientSecret] = useState("");
    const [freeGames, setFreeGames] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {
        async function setPaymentMode() {
            if (items.length) {
                setFreeGames(false);
                const data = await createPaymentIntent({ items, token: session.jwt });

                if (data.freeGames) {
                    setFreeGames(true);
                    return;
                }

                if (data.error) {
                    setError(data.error);
                    return;
                }

                setClientSecret(data.client_secret);
            }
        }

        setPaymentMode();
    }, [items, session]);

    const handleChange = async (event: StripeCardElementChangeEvent) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    const saveOrder = async (paymentIntent?: PaymentIntent) => {
        const data = createPayment({
            items,
            paymentIntent,
            token: session.jwt,
        });

        return data;
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        if (freeGames) {
            saveOrder();

            push("/success");
            return;
        }

        const payload = await stripe!.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements!.getElement(CardElement)!,
            },
        });

        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setIsLoading(false);
        } else {
            setError(null);
            setIsLoading(false);

            saveOrder(payload.paymentIntent);

            push("/success");
        }
    };

    return (
        <S.Wrapper>
            <form onSubmit={handleSubmit}>
                <S.Body>
                    <Heading lineBottom lineColor="primary" size="small">
                        Payment
                    </Heading>

                    {freeGames ? (
                        <S.FreeGames>Only free games, click buy and enjoy!</S.FreeGames>
                    ) : (
                        <CardElement
                            onChange={handleChange}
                            options={{
                                hidePostalCode: true,
                                style: {
                                    base: {
                                        fontSize: "16px",
                                    },
                                },
                            }}
                        />
                    )}

                    {error && <S.Error>{error}</S.Error>}
                </S.Body>
                <S.Footer>
                    <Button as="a" minimal fullWidth>
                        Continue Shopping
                    </Button>
                    <Button
                        fullWidth
                        icon={isLoading ? <FormLoading /> : <ShoppingCart />}
                        disabled={!freeGames && (disabled || !!error)}
                    >
                        {!isLoading && <span>Buy now</span>}
                    </Button>
                </S.Footer>
            </form>
        </S.Wrapper>
    );
};

export default PaymentForm;
