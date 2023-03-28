
import { Error, Button } from 'pages/authFormStyle.styled';
import CustomField from 'pages/authFormStyle.styled';
// import { useEffect } from 'react';

const StepTwo = props => {

  // const query = 'Dnipro';
  // const { status, results } = useFetchingData('api/cities', query);

  // const array = results.map(({ useCounty, stateEn, cityEn, countyEn }) => {
  //   return Number(useCounty)
  //     ? `${cityEn}, ${countyEn}, ${stateEn} region`
  //     : `${cityEn}, ${stateEn} region`;
  // });
  // console.log('array', array);

  // useEffect(() => {
  //   const inputValue = value || '';
  //   if (inputValue) {
  //     console.log(inputValue);
  //   }
  // });

  return (
    <>

      <CustomField
        type="text"
        name="name"
        placeholder="Name"
        errors={props.errors}
        touched={props.touched}
        required
      />
      <Error name="name" component="div" />

      <CustomField
        type="text"
        name="city"
        placeholder="City, region"
        errors={props.errors}
        touched={props.touched}
        required
      />
      <Error name="city" component="div" />

      <CustomField
        type="tel"
        name="phone"
        placeholder="Mobile phone"
        errors={props.errors}
        touched={props.touched}
        required
      />
      <Error name="phone" component="div" />

      <Button type="submit">Register</Button>
      <Button type="button" onClick={props.back}>
        Back

      </Button>
    </>
  );
};
export default StepTwo;