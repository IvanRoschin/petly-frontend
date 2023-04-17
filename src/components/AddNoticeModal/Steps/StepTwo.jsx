import { useRef } from 'react';
import { Formik } from 'formik';
import { stepTwoSchema } from 'helpers/validationSchemas/addNotice';
import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box/Box';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import i18n from 'i18n';
import Select from 'react-select';
import { commonRoutes } from 'api/baseSettings';
import {
  getRegionsOfCities,
  getRegionsOfCitiesUA,
} from 'helpers/getRegionsOfCities';

import { PreviewContainer, RemoveImgBtn, PreviewImg } from './Steps.styled';
import {
  BoxQuestion,
  FormWrapper,
  InputRadio,
  SexFormBox,
  SexLabel,
  MaleIconBox,
  FemaleIconBox,
  ActionButtonsWrapper,
  ActionButton,
  TextAreaInput,
  ErrorStyle,
  TextLabel,
  InputCont,
  TextInput,
  PhotoPetBtn,
  InputContTextArea,
} from '../AddNoticeModal.styled';

import { AddPhotoIcon } from 'components/ModalAddsPet/Steps/Steps.styled.jsx';

const StepTwo = props => {
  const { t } = useTranslation();

  const filePicker = useRef(null);

  const handleSubmit = values => {
    props.next(values, true);
  };

  const language = localStorage.getItem('i18nextLng');
  let lang = 'en';
  if (language === 'uk' || language.includes('uk')) {
    lang = 'uk';
  }

  const [cityValue, setCityValue] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleOnInputChange = value => {
    if (value.length >= 3) {
      setCityValue(value);
    }
  };

  useEffect(() => {
    async function getCities() {
      if (cityValue < 3) {
        return;
      }
      try {
        setIsLoading(true);
        const { data } = await commonRoutes.get(
          `api/cities?query=${cityValue}&lang=${lang}`
        );
        if (lang === 'en') {
          setResults(getRegionsOfCities(data));
        } else {
          setResults(getRegionsOfCitiesUA(data));
        }
        setIsLoading(false);
      } catch (error) {
        toast.error(i18n.t('Try_again'));
      }
    }

    getCities();
  }, [cityValue, lang]);

  return (
    <Formik
      validationSchema={stepTwoSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <FormWrapper>
          <SexFormBox>
            <BoxQuestion>{t('The_sex')}:</BoxQuestion>

            <SexLabel checkedSex={values.sex === 'male'}>
              <MaleIconBox />
              {t('Male')}
              <InputRadio type="radio" name="sex" value="male" />
            </SexLabel>

            <SexLabel checkedSex={values.sex === 'female'}>
              <FemaleIconBox />
              {t('Female')}
              <InputRadio type="radio" name="sex" value="female" />
            </SexLabel>
          </SexFormBox>
          <Select
            onInputChange={handleOnInputChange}
            name="location"
            options={results}
            onChange={(location, _, e) => {
              console.log('location', location);
              setFieldValue('location', location);
            }}
            placeholder={t('City_region')}
            isSearchable="true"
            isLoading={isLoading}
            noOptionsMessage={({ inputValue }) =>
              !inputValue ? t('City_letters') : t('City_notfound')
            }
            styles={{
              control: (baseStyles, state) => ({
                // ...baseStyles,
                display: 'flex',
                padding: '4px',
                border: '1px solid #F59256',
                borderRadius: '20px',
                backgroundColor: '#FDF7F2',
                borderColor: state.isSelected ? '#3CBC81' : '#F59256',
              }),
            }}
          />
          <ErrorStyle name="location" component="div" />

          {/* <InputCont>
            <TextLabel htmlFor="location">{t('Location')}:</TextLabel>
            <TextInput name="location" placeholder={t('Type_pet_location')} />
            <ErrorStyle name="location" component="div" />
          </InputCont> */}

          {props.data.category === 'sell' && (
            <InputCont>
              <TextLabel htmlFor="price">{t('Price')}:</TextLabel>
              <TextInput name="price" placeholder={t('Type_pet_price')} />
              <ErrorStyle name="price" component="div" />
            </InputCont>
          )}

          <TextLabel>{t('Load_pet_image')}</TextLabel>
          <input
            hidden
            ref={filePicker}
            type="file"
            accept="image/*,.png,.jpg,.gif,.web"
            onChange={e => {
              const chosenImg = e.target.files[0];
              setFieldValue('photoURL', chosenImg);

              const reader = new FileReader();
              reader.onload = e => {
                setFieldValue('preview', e.target.result);
              };
              reader.readAsDataURL(chosenImg);
            }}
          />

          {values?.preview ? (
            <Box>
              <PreviewContainer>
                <RemoveImgBtn
                  type="button"
                  onClick={() => {
                    setFieldValue('photoURL', null);
                    setFieldValue('preview', null);
                  }}
                >
                  &times;
                </RemoveImgBtn>
                <PreviewImg src={values?.preview} alt="Preview" />
              </PreviewContainer>
            </Box>
          ) : (
            <PhotoPetBtn
              type="button"
              onClick={() => filePicker.current.click()}
            >
              <AddPhotoIcon width={48} height={48} />
            </PhotoPetBtn>
          )}

          <InputContTextArea>
            <TextLabel htmlFor="comments">{t('Comments')}</TextLabel>
            <TextAreaInput
              name="comments"
              // as="textarea"
              type="text"
              rows="4"
              placeholder={t('Type_comments')}
              required="Required comments"
            />
            <ErrorStyle name="comments" component="div" />
          </InputContTextArea>

          <ActionButtonsWrapper>
            <ActionButton type="button" onClick={() => props.prev(values)}>
              {t('Back')}
            </ActionButton>
            <ActionButton type="submit">{t('Done')}</ActionButton>
          </ActionButtonsWrapper>
        </FormWrapper>
      )}
    </Formik>
  );
};

export default StepTwo;
