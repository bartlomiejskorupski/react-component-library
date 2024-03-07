import { ForwardedRef, forwardRef, memo, useMemo } from 'react';
import styles from './styles.module.css';

type InputFieldProps = {
  className?: string;
  errorMessage?: string;
};

const InputField = memo(
  forwardRef(function InputField(
    props: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) {
    const { className, errorMessage } = props;

    const classes = useMemo(() => {
      const classList = [className, styles.input, errorMessage && 'error'];
      return classList.filter((v) => v !== undefined).join(' ');
    }, [className, errorMessage]);

    return <input ref={ref} className={classes} />;
  })
);

export default InputField;
