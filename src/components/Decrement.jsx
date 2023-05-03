const Decrement = (props) => {
  return props.counter > 0 ? (
    <button
      onClick={() => {
        const countersCopy = [...props.counter];
        countersCopy[props.index]--;
        props.setCounter(countersCopy);
      }}
    >
      -
    </button>
  ) : null;
};

export default Decrement;
