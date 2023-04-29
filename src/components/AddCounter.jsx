const AddCounter = ({ counter }) => {
  return (
    <button
      onClick={() => {
        counter.push(1);
      }}
    >
      Add Counter
    </button>
  );
};

export default AddCounter;
