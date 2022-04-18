import { Header } from "semantic-ui-react";


const MainHeader = ({ size = "h1", title = "" ,align="center"}) => {
    return (<Header as={size} textAlign={align}> {title}</Header>);
}

export default MainHeader;