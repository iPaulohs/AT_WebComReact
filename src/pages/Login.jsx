import { Container } from "../components/Container";
import { InputContainer, TitleInput, Input, ButtonPadrao, Titulo, Subtitulo, Indicativo, Paragrafo, Details, MainLG as Main, ButtonLink } from "../components/Utils";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from 'react-router-dom'
import ReactLoading from 'react-loading';


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setCurrentUser, loading } = useContext(AuthContext);
  const [ load, setLoad ] = useState(null)
  const redirectTo = useNavigate()
  
    if(loading){
      setLoad(<ReactLoading type={'balls'} color={'#000'} height={50} width={50} />)
    }

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setCurrentUser(user);
        redirectTo('/home')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

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
              <Input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </InputContainer>
            <InputContainer>
              <TitleInput>Senha</TitleInput>
              <Input type="password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </InputContainer>
            <ButtonPadrao width={190} height={35} onClick={handleLogin}>
              Entrar
            </ButtonPadrao>
            {load}
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
