import axios from 'axios';
import useSWR from 'swr';
import {
  Accordion,
  Container,
} from 'react-bootstrap';
import Header from '../componetes/header';
import Concurso from '../componetes/concurso';
import Loader from '../componetes/loader';
import Error from '../componetes/error';
import Bearer from '../componetes/bearer';
import config from '../config'; // Importando a configuração


export default function Home() {

  var url = 'https://api.estrategiaconcursos.com.br/api/aluno/curso';
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
    <>
      <Container fluid="md">

        <Header />

        {error ? <Error /> : <></>}

        {!data ? <Loader /> : <></>}

        {/* <Accordion>
          {data && data.concursos.map((concurso) => (
            <div key={concurso.id}>
              <Concurso concurso={concurso} />
            </div>
          ))}
        </Accordion> */}
        <span className="visually-hidden">DESATIVADO</span>


      </Container>
    </>
  );
}
