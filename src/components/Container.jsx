import BackImg  from '../assets/background_img.svg'
import styled from 'styled-components'

export const Container = (props) => <DivContainer>{props.children}</DivContainer>

const DivContainer = styled.div`
width: 100vw;
height: 100vh;
border: 1px solid #fff;
background-image: url(${BackImg});
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`