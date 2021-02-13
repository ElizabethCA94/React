import React, { useContext, setState } from "react";
import { Menu, Button, Icon, Image, Form, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import Context from "../../store/context";
import LoginContainer from "../../container/Login";


const Header = () => {
  const { state, actions } = useContext(Context);

  const onLogoutClick = async () => {
    const loginResponse = await fetch("http://localhost:4000/dev/logoutUser", {
      method: "post",
      body: JSON.stringify({
        secretId: state.secretId,
      }),
    })
      .then((response) => response.json())
      .then((data) => data)
      .catch((e) => console.log(e));

    if (loginResponse?.secretId) {
      actions({
        type: "setState",
        payload: { ...state, secretId: null },
      })
    }
  };

  return (
    <div>
      <Menu secundary pointing>
        <Image
          as={Link}
          to={"/"}
          class="ui tiny image"
          src={logo}
          width={68}
          size="tiny"
          verticalAlign="middle"
          align="center"
        ></Image>
        <Menu.Item as={Link} to={"/"} style={{ fontSize: 24 }}>
          Learn Functions
      </Menu.Item>
        <Menu.Item position="right">
          {state.secretId && (
            <Button as={Link} to={"/quiz/create"} primary basic icon>
              <Icon name="add"></Icon>
            Create quiz
            </Button>
          )}
        </Menu.Item>
        <Menu.Item>
          {state.secretId && (
            <Button as={Link} to={"/"} color="red" basic icon onClick={onLogoutClick}>
              <Icon name="log out"></Icon>
            Log out
            </Button>
          )}
        </Menu.Item>
        <Menu.Item>
          {!state.secretId && (
            <Button as={Link} to={"/auth/login"} color="green" basic icon>
              <Icon name="sign in"></Icon>
            Login
            </Button>
          )}
        </Menu.Item>
        <Menu.Item>
          {!state.secretId && (
            <Button as={Link} to={"/auth/register"} color="blue" basic icon>
              <Icon name="sign in alternate"></Icon>
            Register
            </Button>
          )}
        </Menu.Item>

      </Menu>
      <br></br>
      {/* <Form>
        {<Grid.Column>
          {state.secretId && (
            <Link to="/quiz/create"><div><h4>Bienvenido, dando clic sobre este texto o seleccionando el boton "create quiz" puedes crear un quiz para tus estudiantes para apender funciones</h4></div></Link>
          )}
        </Grid.Column>}
      </Form> */}
    </div>

  );
};

export default Header;
