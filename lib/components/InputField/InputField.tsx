import { ForwardedRef, InputHTMLAttributes, forwardRef, memo } from 'react';
import styles from './styles.module.css';

type InputFieldProps = {
  className?: string;
  label?: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const InputField = memo(
  forwardRef(function InputField(
    { className = '', label, id, name, errorMessage, ...rest }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) {
    const containerClasses = [styles.container, className]
      .filter((v) => v)
      .join(' ');

    const inputClasses = [styles.input, errorMessage && styles.error]
      .filter((v) => v)
      .join(' ');

    return (
      <div className={containerClasses}>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          ref={ref}
          className={inputClasses}
          {...rest}
        />
        {errorMessage && <small>{errorMessage}</small>}
      </div>
    );
  })
);

export default InputField;
