import styled from 'styled-components'

import SiteWrapper from '../components/SiteWrapper'
import { Page } from "tabler-react";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Login() {
  // return <SiteWrapper><Page.Content title="Login"></Page.Content></SiteWrapper>
  return <Page.Content title="login"></Page.Content>

}