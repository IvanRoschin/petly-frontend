import { Error, Input, Button } from 'pages/authFormStyle.styled';
import { useTranslation } from 'react-i18next';

const StepTwo = ({ props }) => {
  const { t } = useTranslation();

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
      <Input type="text" name="name" placeholder={t('Name')} />
      <Error name="name" component="div" />

      <Input type="text" name="city" placeholder={t('City_region')} />
      <Error name="city" component="div" />

      <Input type="tel" name="phone" placeholder={t('Mobile_phone')} />
      <Error name="phone" component="div" />

      <Button type="submit">{t('Register')}</Button>
      <Button type="button" onClick={props.back}>
        {t('Back')}
      </Button>
    </>
  );
};
export default StepTwo;