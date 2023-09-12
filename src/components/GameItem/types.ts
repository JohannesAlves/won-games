export type GameItemProps = {
    id: string;
    img: string;
    title: string;
    price: string;
    downloadLink?: string;
    paymentInfo?: PaymentInfoProps;
};

export type PaymentInfoProps = {
    number: string;
    flag: string;
    img: string;
    purchaseDate: string;
};
