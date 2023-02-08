import Head from "next/head";
import Image from "next/image";
import * as Styled from "../styles/Login/login";
import Logo from "../../public/logo.svg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>VinyLanches - Faça seu login</title>
      </Head>
      <Styled.ContainerCenter>
        <Image src={Logo} alt="Logo Viny Lanches" />
        <Styled.Login>
          <Styled.Form>
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite seu senha" type="password" />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </Styled.Form>
          <Styled.NotAccount>
            Não possui uma conta? Cadastre-se
          </Styled.NotAccount>
        </Styled.Login>
      </Styled.ContainerCenter>
    </>
  );
}
