const Decrement = (props) => {
  return props.counter > 0 ? (
    <button
      onClick={() => {
        props.setCounter(props.counter - 1);
      }}
    >
      -
    </button>
  ) : null;
};

export default Decrement;
