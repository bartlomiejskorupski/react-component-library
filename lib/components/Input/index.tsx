import styles from './styles.module.css';

type InputProps = {
  className: string;
};

export default function Input(props: InputProps) {
  return <input className={`${props.className} ${styles.input}`} />;
}
