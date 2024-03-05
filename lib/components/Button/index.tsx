import styles from './styles.module.css';

type ButtonProps = {
  label: string;
};

export default function Button(props: ButtonProps) {
  return <button className={styles.button}>{props.label}</button>;
}
