import React, { ButtonHTMLAttributes, FC } from 'react';

type OwnProps = {
  myCustomProp?: 'some' | 'other';
} & ButtonHTMLAttributes<HTMLButtonElement>;

type Props = FC<OwnProps>;

function TodoItem({ id, text }): Props {
  return (
    <li key={id}>
      {id} {text}
    </li>
  );
}

export default TodoItem;
