import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function NoteItem({ value, isNew, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      {isNew ? (
        <input type="text" value={value} readOnly={!isNew} {...rest} />
      ) : (
        <span>{value}</span>
      )}

      <button
        type="button"
        onClick={onClick}
        className="button-color"
        value={value}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
