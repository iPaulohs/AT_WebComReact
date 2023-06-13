import styled from "styled-components";
import { Container } from "../components/Container";
import { MainH as Main, Titulo, Subtitulo, Paragrafo, ButtonLink } from "../components/Utils";

export default function Home() {
  return (
    <>
      <Container>
        <Main>
          <Titulo align={"flex-start"} topBottom={"-5px"} leftRight={"25px"}>
            Olá, Paulo
          </Titulo>
          <Subtitulo
            align={"flex-start"}
            topBottom={"15px"}
            leftRight={"25px"}
            fontSize={20}>
            Hoje é dia 11 de junho de 2023
          </Subtitulo>
          <MainDiv>
            <OptionDiv>
              <ButtonLink width={180} height={40} to="/fornecedores">
                Fornecedores
              </ButtonLink>
              <InternalDiv
                width={100}
                height={65}
                padding={10}
                border={"1px solid #000"}>
                <InternalDiv width={50} height={100} flexDirection={"column"}>
                  <TextOption>
                    Fornecedores <QuebraLinha></QuebraLinha> Ativos:
                  </TextOption>
                  <Indicador bgColor={"#05FF00"}>
                    <TextIndicator color={"#000"}>31</TextIndicator>
                  </Indicador>
                </InternalDiv>
                <InternalDiv width={50} height={100} flexDirection={"column"}>
                  <TextOption>
                    Fornecedores <QuebraLinha></QuebraLinha> Inativos:
                  </TextOption>
                  <Indicador bgColor={"#F00"}>
                    <TextIndicator color={"#fff"}>15</TextIndicator>
                  </Indicador>
                </InternalDiv>
              </InternalDiv>
            </OptionDiv>
            <OptionDiv>
              <ButtonLink width={180} height={40} to="/contatos">
                Contatos
              </ButtonLink>
              <InternalDiv width={100} height={65} border={"1px solid #000"}>
                <InternalDiv width={50} height={100} flexDirection={"column"}>
                  <TextOption>
                    Contatos <QuebraLinha />
                    na Agenda:
                  </TextOption>
                  <Indicador bgColor={"#05FF00"}>
                    <TextIndicator color={"#000"}>71</TextIndicator>
                  </Indicador>
                </InternalDiv>
              </InternalDiv>
            </OptionDiv>
          </MainDiv>
          <QuebraLinha />
          <QuebraLinha />
          <Paragrafo>
            Já que aceitou estar aqui, <strong>faça o seu melhor.</strong>
          </Paragrafo>
        </Main>
      </Container>
    </>
  );
}

const MainDiv = styled.div`
  height: 50%;
  width: 85%;
  align-self: center;
  display: flex;
  justify-content: space-around;
`;
const QuebraLinha = styled.br``;

const OptionDiv = styled.div`
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InternalDiv = styled.div`
  width: ${(props) => props.width + "%"};
  height: ${(props) => props.height + "%"};
  border: ${(props) => props.border};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  padding: ${(props) => props.padding + "px"};
`;
const TextOption = styled.p`
  font-size: 18px;
  font-family: var(--Jetbrains-Mono);
  text-align: center;
`;

const Indicador = styled.div`
  border: 1px solid #000;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextIndicator = styled.p`
  font-size: 30px;
  font-family: var(--Jerbrains-Mono);
  color: ${(props) => props.color};
`;
