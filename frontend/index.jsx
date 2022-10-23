import React from 'react';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

import './style.css';

const YOUTUBE_ENDPOINT = "https://www.googleapis.com/youtube/v3/search";
const API_KEY = "AIzaSyDbTL3fUHn1W82wOsbN_Gpjg6o0USfwYZk";

class Index extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchQuery: "",
            videoIds: []
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

        // Call YouTube search API
        const searchUrl = YOUTUBE_ENDPOINT + '?' + 'key=' + API_KEY + '&part=snippet&maxResults=20&q=' + this.state.searchQuery;
        console.log(searchUrl);
        fetch(searchUrl)
            .then(resp => resp.json())
            .then(videos => this.setState({
                    searchQuery: "",
                    videoIds: videos.items.map(video => video.id.videoId)
                })
            );

    }

    render() {

        return (
            <Container id="my-container"
            >
                <Row
                    id="search-bar-row"
                >
                    <Form id="search-bar">
                        <Form.Group
                            className="xxl-3"
                            as={Row}
                        >
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Music..."
                                    value={this.state.searchQuery}
                                    onChange={this.handleInput('searchQuery')}
                                >
                                </Form.Control>
                                <Button
                                    onClick={this.onSearchClick}
                                >
                                    Search
                                </Button>
                            </InputGroup>
                        </Form.Group>
                    </Form>

                </Row>
                <Row
                    id="video-row"
                >
                <ListGroup
                    id="customListGroup"
                >
                    {this.state.videoIds.map((videoId, i) => (
                        <ListGroup.Item
                            key={videoId + '_' + i.toString()}
                            id="customListItem"
                        >
                        <iframe
                            width="100%"
                            height="100%"
                            src={"https://www.youtube.com/embed/" + videoId + "?autoplay=0"}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                                gyroscope; picture-in-picture" allowFullScreen />
                        </ListGroup.Item>)
                    )}
                </ListGroup>
                </Row>
            </Container>
        );
    }

}

export default Index;
