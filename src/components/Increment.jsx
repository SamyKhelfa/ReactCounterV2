const Increment = (props) => {
  return props.counter < 10 ? (
    <button
      onClick={() => {
        const countersCopy = [...props.counter];
        countersCopy[props.counter]++;
        props.setCounter(countersCopy);
      }}
    >
      +
    </button>
  ) : null;
};

export default Increment;
