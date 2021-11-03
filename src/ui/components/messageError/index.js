const MessageError = ({ error }) => {
  const { status, statusText } = error;
  return <h1>{`${status} ${statusText}`}</h1>;
};

export default MessageError;
