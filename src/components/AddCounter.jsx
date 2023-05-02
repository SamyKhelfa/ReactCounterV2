const AddCounter = ({ counter, setCounter }) => {
  return (
    <button
      onClick={() => {
        const newCounter = [...counter];
        newCounter.push(0);
        setCounter(newCounter);
      }}
    >
      Add Counter
    </button>
  );
};

export default AddCounter;
