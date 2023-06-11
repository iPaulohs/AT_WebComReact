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

export default function Login() {
  return (
    <>
      <Container>
        {
          <Main>
            <Titulo>Bem-vindo de volta!</Titulo>
            <Subtitulo>É um prazer recebê-lo outra vez!</Subtitulo>
            <Indicativo marginBottom={20}>Login</Indicativo>
            <InputContainer>
              <TitleInput>Login</TitleInput>
              <Input type="email" />
            </InputContainer>
            <InputContainer>
              <TitleInput>Senha</TitleInput>
              <Input type="password" />
            </InputContainer>
            <ButtonPadrao width={190} height={35}>
              Entrar
            </ButtonPadrao>
            <Details>Ou</Details>
            <ButtonLink width={120} height={30} to="/cadastro">
              Cadastro
            </ButtonLink>
            <Paragrafo>
              Aqui, fazemos o que é impensável aos olhos dos que não tem
              coragem!
            </Paragrafo>
          </Main>
        }
      </Container>
    </>
  );
}
