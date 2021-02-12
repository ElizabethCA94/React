import React, { useContext, setState} from "react";
import { Menu, Button, Grid, Icon, Image, Form, Segment} from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import Context from "../../store/context";
import DashoboardContainer from "../../container/Dashboard";
import LoginContainer from "../../container/Login";

const Header = () => {
  const { state } = useContext(Context);

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
          <Button as={Link} to={"/"} color="red" basic icon>
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
    <Form>
    <Grid.Column>
        {state.secretId && state.hide &&(
          <Link to = "/quiz/create"> Bienvenido, puedes crear quiz para tus estudiantes</Link>
        )}
      </Grid.Column>
    </Form>
    </div>
    
  );
};

export default Header;
