import {
  InputReg,
  RegisterButton,
  ErrorValid,
  Div,
} from 'pages/RegisterPage/RegisterPage.styled';

const StepTwo = props => {
  return (
    <>
      <Div>
        <InputReg type="text" name="name" placeholder="Name" />
        <ErrorValid name="name" component="div" />
      </Div>
      <Div>
        <InputReg type="text" name="city" placeholder="City, region" />
        <ErrorValid name="city" component="div" />
      </Div>
      <Div>
        <InputReg type="tel" name="phone" placeholder="Mobile phone" />
        <ErrorValid name="phone" component="div" />
      </Div>
      <RegisterButton type="submit">Register</RegisterButton>
      <RegisterButton type="button" onClick={props.back}>
        Back
      </RegisterButton>
    </>
  );
};
export default StepTwo;