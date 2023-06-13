import { Container } from "../components/Container";
import { InputContainer, TitleInput, Input, ButtonPadrao, Titulo, Subtitulo, Indicativo, Paragrafo, Details, MainLG as Main, ButtonLink } from "../components/Utils";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { AuthContext } from "../contexts/AuthContext";
import { useState, useContext } from 'react'

export default function Cadastro() {

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const { auth } = useContext(AuthContext)

  const handleSignUp = () => {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Cadastro OK')
        const nomeDoUsuario = name;
        return updateProfile(user, { displayName: name });
      })
      .then(() => {
        console.log('Nome de usuario OK')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Deu errado')
      });

  }



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
              <Input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
            </InputContainer>
            <InputContainer>
              <TitleInput>Login &#40;email&#41;</TitleInput>
              <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </InputContainer>
            <InputContainer>
              <TitleInput>Senha</TitleInput>
              <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </InputContainer>
            <ButtonPadrao width={190} height={35} onClick={handleSignUp}>
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
