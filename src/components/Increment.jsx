const Increment = (props) => {
  const countersCopy = [...props.counter];
  countersCopy[props]++;
  return props.counter < 10 ? (
    <button
      onClick={() => {
        countersCopy[props]++;
        setCounter(countersCopy);
      }}
    >
      +
    </button>
  ) : null;
};

export default Increment;
