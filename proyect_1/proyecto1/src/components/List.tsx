import { useState } from "react";

type ListProps = {
  //siempre se debe poner termino props
  data: String[];
  onSelect?: (elemento: string) => void;
};
function List({ data, onSelect }: ListProps) {
  const [index, setIndex] = useState(1);
  const handleClick = (i: number, elemento: string) => {
    setIndex(i);
    onSelect?.(elemento);
  };
  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i)}
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}
export default List;
