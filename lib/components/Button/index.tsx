import {
  ButtonHTMLAttributes,
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
  memo,
} from 'react';
import styles from './styles.module.css';

type ButtonSeverity = 'primary' | 'secondary' | 'success' | 'danger' | 'info';

type ButtonProps = {
  className?: string;
  round?: boolean;
  text?: boolean;
  severity?: ButtonSeverity;
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = memo(
  forwardRef(function Button(
    props: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) {
    const { className, round, text, severity, children, ...rest } = props;

    const classes = `${className ?? ''} ${styles.button} ${
      round ? styles.round : ''
    } ${text ? styles.text : ''} ${severity ? styles[severity] : ''}`;
    return (
      <button ref={ref} className={classes} {...rest}>
        {children}
      </button>
    );
  })
);

export default Button;
