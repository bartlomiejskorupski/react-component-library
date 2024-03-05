import { forwardRef } from 'react';
import styles from './styles.module.css';

type ButtonProps = {
  className?: string;
  round?: boolean;
  text?: boolean;
} & React.PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export default forwardRef(function Button(props: ButtonProps) {
  const { className, round, text, children, ...rest } = props;

  const classes = `${className ?? ''} ${styles.button} ${
    round ? styles.round : ''
  } ${text ? styles.text : ''}`;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
});
