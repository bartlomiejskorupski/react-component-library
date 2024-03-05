import {
  ButtonHTMLAttributes,
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
} from 'react';
import styles from './styles.module.css';

type ButtonProps = {
  className?: string;
  round?: boolean;
  text?: boolean;
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

export default forwardRef(function Button(
  props: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  const { className, round, text, children, ...rest } = props;

  const classes = `${className ?? ''} ${styles.button} ${
    round ? styles.round : ''
  } ${text ? styles.text : ''}`;
  return (
    <button ref={ref} className={classes} {...rest}>
      {children}
    </button>
  );
});
