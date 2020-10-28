import styled from 'styled-components'

import SiteWrapper from '../components/SiteWrapper'
import { Page } from "tabler-react";

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Home() {
  return <SiteWrapper><Page.Content title="Home"></Page.Content></SiteWrapper>
}