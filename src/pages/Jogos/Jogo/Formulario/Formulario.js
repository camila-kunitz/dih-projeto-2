import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Titulo,
  AcoesContainer,
  Label,
  Comentarios,
  ComentarioContainer,
  Nome,
  Comentario,
} from './Formulario.styles';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Botao from '../../../../components/Botao/Botao';
import Input from './Input/Input';
import TextArea from './TextArea/TextArea';

const KEY_LOCALSTORAGE = 'COMENTARIOS';

const Formulario = ({ idJogo }) => {
  const [comentarioJogo, setComentarioJogo] = React.useState({});

  React.useEffect(() => {
    const comentariosStorage = localStorage.getItem(KEY_LOCALSTORAGE);
    if (comentariosStorage) {
      const items = JSON.parse(comentariosStorage);
      const filter = items.find((item) => item.id === idJogo);
      setComentarioJogo(filter);
    }
  }, [idJogo]);

  const handleSubmit = (values, { setSubmitting }) => {
    const comentariosStorage = localStorage.getItem(KEY_LOCALSTORAGE);

    const comentario = {
      id: Math.random().toString(16).slice(2),
      likes: 0,
      ...values,
    };

    const comentariosAtual = comentarioJogo?.comentarios
      ? [...comentarioJogo?.comentarios]
      : [];
    const novaListaComentarios = [
      { id: idJogo, comentarios: [...comentariosAtual, comentario] },
    ];

    if (comentariosStorage) {
      const itemsLocalStorage = JSON.parse(comentariosStorage);
      const listaTodosComentariosSemJogoAtual = itemsLocalStorage.filter(
        (item) => item.id !== idJogo,
      );

      localStorage.setItem(
        'COMENTARIOS',
        JSON.stringify([
          ...listaTodosComentariosSemJogoAtual,
          ...novaListaComentarios,
        ]),
      );
    } else {
      localStorage.setItem('COMENTARIOS', JSON.stringify(novaListaComentarios));
    }

    setComentarioJogo(...novaListaComentarios);
    setSubmitting(false);
  };

  const valorInicial = {
    nome: '',
    email: '',
    comentario: '',
  };

  const validacao = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
    comentario: Yup.string().required('Campo obrigatório'),
  });

  return (
    <Container>
      <Titulo>Comentários:</Titulo>

      <Formik
        initialValues={valorInicial}
        validationSchema={validacao}
        onSubmit={handleSubmit}
        validateOnMount
      >
        {({ isSubmitting, resetForm, isValid }) => (
          <Form>
            <Label>Nome:</Label>
            <Field name="nome" placeholder="Nome" component={Input} />
            <ErrorMessage
              name="nome"
              style={{ color: 'red', fontSize: '13px' }}
              component="span"
            />

            <Label>Email:</Label>
            <Field name="email" placeholder="E-mail" component={Input} />
            <ErrorMessage
              name="email"
              style={{ color: 'red', fontSize: '13px' }}
              component="span"
            />

            <Label>Comentario:</Label>
            <Field
              name="comentario"
              placeholder="Comentário"
              component={TextArea}
            />
            <ErrorMessage
              name="comentario"
              style={{ color: 'red', fontSize: '13px' }}
              component="span"
            />

            <AcoesContainer>
              <Botao type="submit" disabled={isSubmitting || !isValid}>
                Enviar
              </Botao>

              <Botao
                type="button"
                disabled={isSubmitting}
                onClick={resetForm}
                style={{ marginLeft: '20px' }}
              >
                Limpar
              </Botao>
            </AcoesContainer>
          </Form>
        )}
      </Formik>

      <Comentarios>
        {comentarioJogo?.comentarios?.map((item) => (
          <ComentarioContainer key={item.id}>
            <Nome>{item.nome}: </Nome>
            <Comentario>{item.comentario}</Comentario>
          </ComentarioContainer>
        ))}
      </Comentarios>
    </Container>
  );
};

Formulario.propTypes = {
  idJogo: PropTypes.string.isRequired,
};

export default Formulario;
