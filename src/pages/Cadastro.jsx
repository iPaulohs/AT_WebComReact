import { Container } from "../components/Container";
import {
  InputContainer,
  TitleInput,
  Input,
  ButtonPadrao,
  Titulo,
  Subtitulo,
  Indicativo,
  Paragrafo,
  Details,
  MainLG as Main,
  ButtonLink,
} from "../components/Utils";

export default function Cadastro() {
  return (
    <>
      <Container>
        {
          <Main>
            <Titulo>Bem-vindo!</Titulo>
            <Subtitulo>Ficamos felizes em tê-lo aqui!</Subtitulo>
            <Indicativo marginBottom={20}>Cadastro</Indicativo>
            <InputContainer>
              <TitleInput>Nome</TitleInput>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <TitleInput>Login</TitleInput>
              <Input type="email" />
            </InputContainer>
            <InputContainer>
              <TitleInput>Senha</TitleInput>
              <Input type="password" />
            </InputContainer>
            <ButtonPadrao width={190} height={35}>
              Cadastrar
            </ButtonPadrao>
            <Details>Ou</Details>
            <ButtonLink width={120} height={30} to="/">
              Login
            </ButtonLink>
            <Paragrafo>
              Aqui, a coragem é lei! Pense nisso antes de entrar!
            </Paragrafo>
          </Main>
        }
      </Container>
    </>
  );
}
