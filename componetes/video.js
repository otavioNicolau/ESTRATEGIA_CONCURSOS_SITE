import {
    Button,
    Card,
    ListGroup
} from 'react-bootstrap';
import Link from 'next/link';

export default function Video({ video }) {

    return (
        <>
            <Card>
                <Card.Header><b>{video.titulo}</b></Card.Header>

                <ListGroup variant="flush">

                    {video.audio ?
                        <ListGroup.Item>
                            <Link href={video.audio} target="_blank">
                                <Button variant="link">
                                    BAIXAR O AUDIO
                                </Button>
                            </Link>
                        </ListGroup.Item>
                        : <></>
                    }
                    {video.mapa_mental ?
                        <ListGroup.Item>
                            <Link href={video.mapa_mental} target="_blank">
                                <Button variant="link">
                                    BAIXAR O MAPA MENTAL
                                </Button>
                            </Link>
                        </ListGroup.Item>
                        : <a></a>
                    }{' '}

                    {video.resumo ?
                        <ListGroup.Item>
                            <Link href={video.resumo} target="_blank">
                                <Button variant="link">
                                    BAIXAR O RESUMO
                                </Button>
                            </Link>
                        </ListGroup.Item>
                        : <a></a>
                    }{' '}

                    {video.slide ?
                        <ListGroup.Item>
                            <Link href={video.slide} target="_blank">
                                <Button variant="link">
                                    BAIXAR O SILIDE
                                </Button>
                            </Link>
                        </ListGroup.Item>
                        :
                        <>
                        </>
                    }

                    {video.resolucoes['360p'] ?
                        <ListGroup.Item>
                            <Link href={video.resolucoes['360p']} target="_blank">
                                <Button variant="link">
                                    BAIXAR O VIDEO EM 360p
                                </Button>
                            </Link>
                        </ListGroup.Item>
                        :
                        <>
                        </>
                    }{' '}

                    {video.resolucoes['480p'] ?
                        <ListGroup.Item>
                            <Link href={video.resolucoes['480p']} target="_blank">
                                <Button variant="link">
                                    BAIXAR O VIDEO EM 480p
                                </Button>
                            </Link>
                        </ListGroup.Item>
                        :
                        <>
                        </>
                    }{' '}

                    {video.resolucoes['720p'] ?
                        <ListGroup.Item>
                            <Link href={video.resolucoes['720p']} target="_blank">
                                <Button variant="link">
                                    BAIXAR O VIDEO EM 720p
                                </Button>
                            </Link>
                        </ListGroup.Item>
                        :
                        <>
                        </>
                    }{' '}

                </ListGroup>
            </Card>
            {<br></br>}
        </>
    );
}
