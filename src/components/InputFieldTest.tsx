import { InputField } from '../../lib';

import styles from './InputFieldTest.module.css';

export default function InputFieldTest() {
  return (
    <section id="input-field-section">
      <h2>Input Field</h2>
      <InputField
        label="First Name"
        id="fname"
        placeholder="Your first name..."
      />
      <InputField label="Last Name" id="lname" />
      <InputField label="E-Mail" id="email" errorMessage="Invalid email" />
      <InputField label="Password" id="password" />
    </section>
  );
}
