import { Container, InnerLines } from './styles';

const MessageError = ({ error }) => {
  const { status = '404', statusText = 'NOT FOUND' } = error;
  return (
    <Container>
      <InnerLines>
        <h1>{`${status} ${statusText}`}</h1>
      </InnerLines>
    </Container>
  );
};

export default MessageError;
