const Increment = (props) => {
  return props.counter < 10 ? (
    <button
      onClick={() => {
        const countersCopy = [...props.counter];
        countersCopy[counter]++;
        props.setCounter(countersCopy);
      }}
    >
      +
    </button>
  ) : null;
};

export default Increment;
