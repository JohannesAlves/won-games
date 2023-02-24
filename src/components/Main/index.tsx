import * as Style from "./styles";

export default function Main({
    title = "React Avançado",
    description = "Typescript, React.JS, Next.JS & Styled Components",
}) {
    return (
        <Style.Wrapper>
            <Style.Logo
                src="/img/logo.svg"
                alt="Imagem de um átomo e React Avançado escrito ao lado"
            />
            <Style.Title>{title}</Style.Title>
            <Style.Description>{description}</Style.Description>

            <Style.Illustration
                src="/img/hero-illustration.svg"
                alt="Um desenvolvedor sentado de frente para uma tela com códigos"
            />
        </Style.Wrapper>
    );
}
