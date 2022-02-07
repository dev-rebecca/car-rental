import Input from '../UI/Input';

const submitFormHandler = (event) => {
  event.preventDefault();
};

const AddCarForm = (props) => {
  return (
    <form onSubmit={submitFormHandler}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          steps: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default AddCarForm;
