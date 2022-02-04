const HatItem = (props) => {
  return (
    <li className="m-10 bg-green-200 h-96">
      <h2>{props.name}</h2>
      <div>{props.price}</div>
    </li>
  );
};

export default HatItem;
