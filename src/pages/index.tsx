import { useContext, FormEvent, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import * as Styled from "../styles/Login/login";
import Logo from "../../public/logo.svg";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button/index";

import Link from "next/link";

import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(ev: FormEvent) {
    ev.preventDefault();
    let data = {
      email,
      password,
    };
    await signIn(data);
  }

  return (
    <>
      <Head>
        <title>VinyLanches - Faça seu login</title>
      </Head>
      <Styled.ContainerCenter>
        <Image src={Logo} alt="Logo Viny Lanches" />
        <Styled.Login>
          <Styled.Form onSubmit={handleLogin}>
            <Input
              placeholder="Digite seu email"
              type="text"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
            <Input
              placeholder="Digite seu senha"
              type="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <Button type="submit" loading={false}>
              Acessar
            </Button>
          </Styled.Form>
          <Link href="/signup">Não possui uma conta? Cadastre-se</Link>
        </Styled.Login>
      </Styled.ContainerCenter>
    </>
  );
}
