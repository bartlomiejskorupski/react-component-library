import { ForwardedRef, forwardRef, memo } from 'react';
import styles from './styles.module.css';

type InputFieldProps = {
  className?: string;
};

const InputField = memo(
  forwardRef(function InputField(
    props: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) {
    return (
      <input ref={ref} className={`${props.className ?? ''} ${styles.input}`} />
    );
  })
);

export default InputField;
