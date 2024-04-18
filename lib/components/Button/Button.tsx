import {
  ButtonHTMLAttributes,
  ForwardedRef,
  PropsWithChildren,
  forwardRef,
  memo,
} from 'react';
import styles from './styles.module.css';

type ButtonSeverity = 'primary' | 'secondary' | 'success' | 'danger' | 'info';

type ButtonSize = 'small' | 'normal' | 'big';

type ButtonProps = {
  className?: string;
  round?: boolean;
  text?: boolean;
  severity?: ButtonSeverity;
  size?: ButtonSize;
} & PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = memo(
  forwardRef(function Button(
    {
      className = '',
      round,
      text,
      severity,
      size = 'normal',
      children,
      ...rest
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ) {
    const classes = [
      className,
      styles.button,
      round && styles.round,
      text && styles.text,
      severity && styles[severity],
      styles[size],
    ]
      .filter((v) => v)
      .join(' ');

    return (
      <button ref={ref} className={classes} {...rest}>
        {children}
      </button>
    );
  })
);

export default Button;
