import { Container } from "../components/Container";
import {
  MainH as Main,
  Titulo,
  Subtitulo,
  InputPadrao,
  ButtonPadrao
} from "../components/Utils";
import styled from "styled-components";
import { ArrowLeft } from "@phosphor-icons/react";
import InputContatos from "../components/InputContatos";
import CardContato from "../components/CardContato";
import { Link } from "react-router-dom";


export default function Contatos() {
  return (
    <>
      <Container>
        <Main>
          <Header>
          <Link to="/home">
            <Arrow size={25} />
          </Link>
            <Titulo>Contatos</Titulo>
          </Header>
          <ContainerOptions>
            <Subtitulo>Cadastro</Subtitulo>
            <Subtitulo>Listagem</Subtitulo>
          </ContainerOptions>
          <ContainerMain>
            <ContainerLR>
              <InputContatos />
              <ButtonPadrao width={150} height={40}>
                Cadastrar
              </ButtonPadrao>
            </ContainerLR>
            <ContainerLR>
              <DivSearch>
                <InputPadrao
                  width={"75%"}
                  height={"35%"}
                  placeholder="Busca"></InputPadrao>
                <ButtonAll>All</ButtonAll>
              </DivSearch>
              <DivResults>
                <CardContato />
              </DivResults>
            </ContainerLR>
          </ContainerMain>
        </Main>
      </Container>
    </>
  );
}

const Header = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
`;

const Arrow = styled(ArrowLeft)`
  margin: 0px 50px 0 25px;
`;

const ContainerOptions = styled.div`
  display: flex;
  gap: 25px;
  position: relative;
  top: -15px;
`;

const ContainerMain = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContainerLR = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DivSearch = styled.div`
  width: 470px;
  height: 115px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e2e2e2;
`;

const ButtonAll = styled.button`
  border: 0.5px solid #999;
  width: 60px;
  height: 35px;
  background-color: #fff;
  cursor: pointer;
  margin: 0 0 0 10px;
  background-color: #dcdcdc;
  &:hover {
    text-decoration: underline;
    background-color: #aaa;
    color: #000;
  }
  &:active {
    background-color: #999;
    color: #fff;
  }
`;

const DivResults = styled.div`
  justify-self: flex-start;
  width: 470px;
  height: 300px;
  overflow: auto;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
