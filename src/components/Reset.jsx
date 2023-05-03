const Reset = (props) => {
  const countersCopy = [...props.counter];
  countersCopy[props] = 0;
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
