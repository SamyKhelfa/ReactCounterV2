const Decrement = (props) => {
  const countersCopy = [...props.counter];
  countersCopy[props]++;
  return props.counter > 0 ? (
    <button
      onClick={() => {
        countersCopy[props]--;
        setCounter(countersCopy);
      }}
    >
      -
    </button>
  ) : null;
};

export default Decrement;
