import { Button } from "semantic-ui-react";
const ButtonAdd = (props) => {
    return (<Button.Group>
        <Button primary onClick={() => props.handleAdd()}>Add Employee</Button>

    </Button.Group>
    );
}

export default ButtonAdd;