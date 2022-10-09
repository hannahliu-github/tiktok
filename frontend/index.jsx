import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import './style.css';

class Index extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchQuery: ""
        }

        this.handleInput = this.handleInput.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);

    };

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }
    
    onSearchClick() {
        console.log('clicked search button for ' + this.state.searchQuery);

        this.setState({
            searchQuery: ""
        });
    }

    render() {

        return (
            <Container className="container">
                <Row>
                    <Form id="search-bar">
                        <Row>
                            <Form.Group
                                as={Row}
                            >
                                <Form.Control
                                    type="text"
                                    value={this.state.searchQuery}
                                    onChange={this.handleInput('searchQuery')}
                                >
                                </Form.Control>
                                <Button
                                    onClick={this.onSearchClick}
                                >
                                    Search
                                </Button>
                            </Form.Group>
                        </Row>
                    </Form>

                </Row>

                <h1>style.css connected</h1>
            </Container>
        );
    }

}

export default Index;
