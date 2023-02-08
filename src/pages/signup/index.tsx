import Head from "next/head";
import Image from "next/image";
import * as Styled from "./styles";
import Logo from "../../../public/logo.svg";
import { Input } from "../../components/ui/input/index";
import { Button } from "../../components/ui/Button/index";

import Link from "next/link";

export default function Signup() {
  return (
    <>
      <Head>
        <title>VinyLanches - Faça seu cadastro</title>
      </Head>
      <Styled.ContainerCenter>
        <Image src={Logo} alt="Logo Viny Lanches" />
        <Styled.Login>
          <Styled.CreateAccount>Criando sua conta</Styled.CreateAccount>
          <Styled.Form>
            <Input placeholder="Digite seu nome" type="text" />
            <Input placeholder="Digite seu email" type="text" />
            <Input placeholder="Digite seu senha" type="password" />
            <Button type="submit" loading={false}>
              Cadastrar
            </Button>
          </Styled.Form>

          <Link href="/">Já possui uma conta? Faça login</Link>
        </Styled.Login>
      </Styled.ContainerCenter>
    </>
  );
}
