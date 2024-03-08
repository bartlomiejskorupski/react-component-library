import { InputField } from '../../lib';

export default function InputFieldTest() {
  return (
    <section id="input-field-section">
      <h2>Input Field</h2>
      <InputField label="First Name" id="fname" />
      <InputField label="Last Name" id="lname" />
      <InputField label="E-Mail" id="email" />
      <InputField label="Password" id="password" />
    </section>
  );
}
