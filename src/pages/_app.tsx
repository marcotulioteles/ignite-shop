import { AppProps } from "next/app"
import Image from 'next/image';
import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg';
import { Container, Header } from "../styles/pages/app";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} alt='Logo Ignite Shop com dois triângulos verdes e letras em branco com a escrita Ignite shop' width={130} height={52} />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}