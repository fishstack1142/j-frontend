import "tabler-react/dist/Tabler.css";
import React, { Fragment, useState } from "react"
import { Card, Button, Page, Site, Nav, Grid, List } from "tabler-react";
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import { useRouter } from 'next/router'

type subNavItem = {
  value: string,
  to?: string,
  icon?: string,
  LinkComponent?: React.ElementType,
  useExact?: boolean,
};

type navItem = {
  value: string,
  to?: string,
  icon?: string,
  active?: boolean,
  LinkComponent?: React.ElementType,
  subItems?: Array<subNavItem>,
  useExact?: boolean,
};

const setNavBarItems = (home: boolean, products: boolean): Array<navItem> => {
  
  return [
    {
      value: "HOME",
      to: "/",
      icon: "home",
      // LinkComponent: withRouter(NavLink),
      active: home,
      useExact: true,
    },
    {
      value: "PRODUCTS",
      to: "/products",
      icon: "box",
      // LinkComponent: withRouter(NavLink),
      active: products,
      useExact: true,
    }
  ];
}



interface Props {
  title?: string
}

const Layout: React.FC<Props> = (props: { products,home, children}) => {

    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          // imageURL: "https://imagescater.blob.core.windows.net/caterimage/fish-bowl.png",
          navItems: (
            <Nav.Item type="div" className="d-none d-md-flex">
              <Button
                href="/login"
                // target="_blank"
                outline
                size="sm"
                RootComponent="a"
                color="primary"
              >
                Login
              </Button>
            </Nav.Item>
          ),

        }}
        navProps={{ itemsObjects: setNavBarItems(props.home, props.products) }}
      >
        <>
          {props.children}
        </>
      </Site.Wrapper>
    );

}

export default Layout