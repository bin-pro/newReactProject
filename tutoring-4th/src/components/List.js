function List({ props }) {
  return props.map((item) => (
    <li className={`${item.classes}`}>{item.content}</li>
  ));
}

export default List;
