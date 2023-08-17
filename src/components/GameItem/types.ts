export type GameItemProps = {
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
