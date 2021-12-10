/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * @Description: 
 * @Autor: lhy
 * @Date: 2021-12-07 14:54:11
 * @LastEditTime: 2021-12-10 10:47:40
 */
import { Card, Divider, Button } from "antd";
import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";
import styled from '@emotion/styled'

export const UnAuthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <Container>
      <ShadowCard>
        <Title>
          {isRegister ? '请注册' : '请登录'}
        </Title>
        {isRegister ? <RegisterScreen /> : <LoginScreen />}
        <Divider/>
        <a onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "已经有账号了？直接登录" : "没有账号？注册新账号"}
        </a>
      </ShadowCard>
    </Container>
  );
};

export const LongButton = styled(Button)`
  width: 100%
`

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94,108,132)
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem
  box-sizing: border-box;
  box-shadow: rgba(0,0,0,0.1) 0 0 10px;
  text-align: center
`