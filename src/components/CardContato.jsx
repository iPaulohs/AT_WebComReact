import styled from "styled-components";


export default function CardContato() {
  return (
    <ContainerFornecedor>
      <ContainerInfo>
        <Name>Paulo Henrique Dos Santos - 05.375.394/0001-21</Name>
        <Endereco>Rua Dona Balá, nº 810, Floresta, Matozinhos</Endereco>
        <ContainerContato>
          <TelefoneEmail>(31) 93618-0068</TelefoneEmail>
          <hr></hr>
          <TelefoneEmail>paulohsantos114@gmail.com</TelefoneEmail>
        </ContainerContato>
        <Serviço>Assessoria Jurídica</Serviço>
      </ContainerInfo>
    </ContainerFornecedor>
  );
}

const ContainerFornecedor = styled.div`
  width: 470px;
  height: 100px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 5px 0;
`;

const ContainerInfo = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Name = styled.header`
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  font-size: 13px;
`;

const Endereco = styled.p`
  text-align: center;
  font-size: 16px;
  margin: 6px;
`;

const ContainerContato = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0 15px;
  height: 15px;
`;

const TelefoneEmail = styled.p`
  font-size: 12px;
`;

const Serviço = styled.h4`
  text-decoration: overline;
  margin: 10px;
`;
