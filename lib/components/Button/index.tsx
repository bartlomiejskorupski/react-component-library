import styles from './styles.module.css';

type ButtonProps = {
  className?: string;
  rounder?: boolean;
} & React.PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const { className, rounder, children, ...rest } = props;

  const classes = `${className ?? ''} ${styles.button} ${
    rounder ? styles.rounder : ''
  }`;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
