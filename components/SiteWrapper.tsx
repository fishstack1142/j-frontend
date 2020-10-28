import "tabler-react/dist/Tabler.css";
import { Fragment } from "react"
import { Card, Button, Page, Site, Nav, Grid, List } from "tabler-react";

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

const navBarItems: Array<navItem> = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    // LinkComponent: withRouter(NavLink),
    active: true,
    useExact: true,
  },
  {
    value: "Products",
    to: "/products",
    icon: "box",
    // LinkComponent: withRouter(NavLink),
    useExact: true,
  }

  
];

export default function Home(props) {

    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          // imageURL:"../public/fishofish-logo.png",
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
        navProps={{ itemsObjects: navBarItems }}
      >{props.children}</Site.Wrapper>
    );

}