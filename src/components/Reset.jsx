const Reset = (props) => {
  const countersCopy = [...props.counter];
  return (
    <button
      onClick={() => {
        countersCopy[0] = 0;
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
