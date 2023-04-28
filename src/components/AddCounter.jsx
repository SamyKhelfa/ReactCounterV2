const AddCounter = ({ counter }) => {
  return (
    <button
      onClick={() => {
        counter.push(0);
      }}
    >
      Add Counter
    </button>
  );
};

export default AddCounter;
