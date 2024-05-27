import axios from 'axios';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { Accordion, Container, } from 'react-bootstrap';

import Header from '../../componetes/header';
import Loader from '../../componetes/loader';
import Error from '../../componetes/error';
import InfoCurso from '../../componetes/infoCurso';
import Aula from '../../componetes/aula';
import config from '../../config'; // Importando a configuração


export default function Curso() {

    const router = useRouter();
    const { id } = router.query


    var url = 'https://api.estrategiaconcursos.com.br/api/aluno/curso/' + id;
    var headers = {
        authorization: config.BEARER_TOKEN,
    };



    const fetcher = async (url) => await axios.get(
        url,
        {
            params: {
            },
            headers: headers
        }).then((res) => res.data.data);

    const { data, error } = useSWR(url, fetcher);


    return (
        <Container fluid >

            <Header />

            {error ? <Error /> : <a></a>}

            {!data ? <Loader /> : <a></a>}

            <InfoCurso data={data} />

            {<br></br>}

            <Accordion >
                {data && data.aulas.map((aula) => (
                    <Aula key={aula.id} aula={aula} />
                ))}
            </Accordion>
        </Container >
    );


}
