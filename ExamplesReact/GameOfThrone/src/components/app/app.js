import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from "../errorMessage";
import CharacterPage from "../characterPage/characterPage";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRandomChar: true,
            error: false,
        }
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
    }

    componentDidCatch(error, errorInfo) {
        console.log('error');
        this.setState({
            error: true,
        })
    }

    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <Button color="primary" onClick={this.toggleRandomChar}>Toggle random character</Button>
                        </Col>
                    </Row>
                    <CharacterPage/>
                </Container>
            </>
        )
    }
};
