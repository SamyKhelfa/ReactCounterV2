const Reset = (props) => {
  const countersCopy = [...props.counter];
  countersCopy[props] = 0;
  return (
    <button
      onClick={() => {
        countersCopy[props] = 0;
        setCounter(countersCopy);
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
