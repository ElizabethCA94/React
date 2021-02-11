import React from 'react';
import { Menu, Button, Icon, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom'; 
import logo from "../../assets/images/logo.svg";

const Header = () => {
    return (
        <Menu secundary pointing>
            <Image as = { Link } to = {"/"} class="ui tiny image" src = {logo} width = {68} size='tiny' verticalAlign = 'middle' align = 'center' ></Image> 
            <Menu.Item as = { Link } to = {"/"} style = {{fontSize : 24}}>Learn Functions</Menu.Item>
            <Menu.Item position = "right">
                <Button as = { Link } to = {"/quiz/create"} primary basic icon>
                    <Icon name = "add"></Icon>
                    Create quiz
                </Button>
            </Menu.Item>
            <Menu.Item>
                    {""}
                <Button as = { Link } to = {"/auth/login"}  color="red" basic icon>
                    <Icon name = "log out"></Icon>
                    Logout
                </Button>
            </Menu.Item>

        </Menu>
    )
}

export default Header;