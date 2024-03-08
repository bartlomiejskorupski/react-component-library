import {
  ForwardedRef,
  InputHTMLAttributes,
  forwardRef,
  memo,
  useMemo,
} from 'react';
import styles from './styles.module.css';

type InputFieldProps = {
  className?: string;
  label?: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputField = memo(
  forwardRef(function InputField(
    props: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) {
    const { className, label, id, name, errorMessage, ...rest } = props;

    const classes = useMemo(() => {
      const classList = [className, styles.input, errorMessage && 'error'];
      return classList.filter((v) => v !== undefined).join(' ');
    }, [className, errorMessage]);

    return (
      <div className={styles.container}>
        <label htmlFor={id}>{label}</label>
        <input id={id} name={name} ref={ref} className={classes} {...rest} />
      </div>
    );
  })
);

export default InputField;
