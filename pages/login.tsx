import { Page, Form, Grid, Button, Card, Nav } from "tabler-react";

export default function Home() {
  return (
    <>
      <Grid.Row>
        <Grid.Col width={1}></Grid.Col>
        <Nav>
          <Nav.Item to="/">HOME</Nav.Item>
        </Nav>
      </Grid.Row>
      <Page.Content>
        <Grid.Row>
          <Grid.Col width={3}></Grid.Col>
          <Grid.Col width={6}>
            <Card title="LOGIN">
              <Card.Body>
                <Form.FieldSet>
                  <Form.Group isRequired label="Email">
                    <Form.Input name="email" />
                  </Form.Group>
                  <Form.Group isRequired label="Password">
                    <Form.Input type="password" name="password" />
                  </Form.Group>
                </Form.FieldSet>
              </Card.Body>
              <Card.Footer>
                <Button.List className="mt-4" align="center">
                  <Button block color="primary">
                    LOGIN
                  </Button>
                  <Button block color="secondary">
                    SIGN UP INSTEAD
                  </Button>
                </Button.List>
              </Card.Footer>
            </Card>
          </Grid.Col>
          <Grid.Col width={3}></Grid.Col>
        </Grid.Row>
      </Page.Content>
    </>
  );
}
