import { globalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import logoImage from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImage} alt="logo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
