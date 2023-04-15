import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import css from './UserPhoneInput.css';
import React, { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';
import i18n from 'i18n';
import {
  getRegionsOfCities,
  getRegionsOfCitiesUA,
} from 'helpers/getRegionsOfCities';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import { English } from 'flatpickr/dist/l10n/default.js';
import 'flatpickr/dist/themes/material_orange.css';

import { userUpdateSchema } from 'helpers/validationSchemas';
import { getFormatedDate } from 'helpers/getFormatedDate';

import {
  DataInputWrapp,
  Form,
  Label,
  Input,
  InputFlatpickrWrapp,
  LabelFlatpickr,
  FlatpickrStyled,
  InputWrapper,
  EditBtn,
  ErrorMessage,
  IconPen,
  SaveIcon,
  SelectInput,
} from './UserDataItem.styled';
import { updateInfo } from '../../redux/auth/operations';
// import { detectLanguage } from 'helpers/detectLanguage';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'hooks';
import { commonRoutes } from 'api/baseSettings';

const UserDataItem = () => {
  const language = localStorage.getItem('i18nextLng');
  let locale = English;
  let lang = 'en';
  if (language === 'uk' || language.includes('uk')) {
    locale = Ukrainian;
    lang = 'uk';
  }
  // const lang = detectLanguage();
  // console.log('lang', lang);

  const { t } = useTranslation();
  const { user } = useAuth();

  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isEmailDisabled, setIsEmailDisabled] = useState(true);
  const [isBirthdayDisabled, setIsBirthdayDisabled] = useState(true);
  const [isPhoneDisabled, setIsPhoneDisabled] = useState(true);
  const [isCityDisabled, setIsCityDisabled] = useState(true);
  const [cityValue, setCityValue] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const [startDate, setStartDate] = useState(new Date(user?.birthDate));

  const iconColorDisabled = 'rgba(0,0,0,0.6)';
  const dispatch = useDispatch();

  const isAnyEditing =
    !isNameDisabled ||
    !isEmailDisabled ||
    !isBirthdayDisabled ||
    !isPhoneDisabled ||
    !isCityDisabled;

  const onSubmitClick = useCallback(
    (event, field, errors) => {
      if (errors && Object.keys(errors).length) return;
      setTimeout(() => {
        if (field === 'name') setIsNameDisabled(!isNameDisabled);
        if (field === 'email') setIsEmailDisabled(!isEmailDisabled);
        if (field === 'birthDate') setIsBirthdayDisabled(!isBirthdayDisabled);
        if (field === 'phone') setIsPhoneDisabled(!isPhoneDisabled);
        if (field === 'city') setIsCityDisabled(!isCityDisabled);
      }, 0);

      return true;
    },
    [
      isNameDisabled,
      isEmailDisabled,
      isBirthdayDisabled,
      isPhoneDisabled,
      isCityDisabled,
    ]
  );

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

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: user.name || 'New User',
      email: user.email,
      birthDate: user.birthDate || '00.00.0000',
      phone: user.phone || '+380000000000',
      city: user.city || 'City, Region',
    },
    validationSchema: userUpdateSchema,

    onSubmit: values => {
      dispatch(updateInfo(values));
    },
  });

  return (
    <div>
      <DataInputWrapp>
        <Form onSubmit={handleSubmit}>
          {/* Name */}
          <InputWrapper>
            <Label htmlFor="name">{t('Name')}:</Label>
            <Input
              type="text"
              name="name"
              value={values.name}
              placeholder={user?.name}
              disabled={isNameDisabled}
              onChange={handleChange('name')}
              onBlur={handleBlur('name')}
              isactive={isNameDisabled ? 0 : 1}
            />
            {touched.name && errors.name && (
              <ErrorMessage>{errors.name}</ErrorMessage>
            )}
            {isNameDisabled && (
              <EditBtn
                type="submit"
                disabled={isAnyEditing}
                className={isAnyEditing ? '' : 'btn-active'}
                onClick={() => setIsNameDisabled(!isNameDisabled)}
              >
                <IconPen fill={isAnyEditing ? iconColorDisabled : undefined} />
              </EditBtn>
            )}
            {!isNameDisabled && (
              <EditBtn
                type="submit"
                className="btn-active"
                onClick={e => {
                  onSubmitClick(e, 'name', errors);
                }}
              >
                <SaveIcon />
              </EditBtn>
            )}
          </InputWrapper>

          {/* Email */}
          <InputWrapper>
            <Label htmlFor="email">{t('Email')}:</Label>
            <Input
              type="text"
              name="email"
              value={values.email}
              placeholder={user?.email}
              disabled={isEmailDisabled}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              isactive={isEmailDisabled ? 0 : 1}
            />
            {touched.email && errors.email && (
              <ErrorMessage>{errors.email}</ErrorMessage>
            )}
            {isEmailDisabled && (
              <EditBtn
                type="submit"
                disabled={isAnyEditing}
                onClick={() => setIsEmailDisabled(!isEmailDisabled)}
                className={isAnyEditing ? '' : 'btn-active'}
              >
                <IconPen fill={isAnyEditing ? iconColorDisabled : undefined} />
              </EditBtn>
            )}
            {!isEmailDisabled && (
              <EditBtn
                type="submit"
                className="btn-active"
                onClick={e => onSubmitClick(e, 'email', errors)}
              >
                <SaveIcon />
              </EditBtn>
            )}
          </InputWrapper>

          {/* BirthDate */}
          <InputWrapper>
            <LabelFlatpickr htmlFor="birthDate">
              {t('Birthday')}:
            </LabelFlatpickr>
            <InputFlatpickrWrapp>
              <FlatpickrStyled
                // selected={startDate}
                // openToDate={new Date(1993, 0, 1)}
                // active={!isBirthdayDisabled}
                // dateFormat="dd.MM.y"
                // name="birthDate"
                // locale="uk"
                // placeholderText={'00.00.0000'}
                // disabled={isBirthdayDisabled}
                // onChange={date => {
                //   setFieldValue('birthDate', date);
                //   setStartDate(date);
                // }}
                // minDate={new Date('01.01.1900')}
                // maxDate={new Date()}
                // showDisabledMonthNavigation
                // shouldCloseOnSelect={true}

                data-enable-time
                name="birthDate"
                value={values.birthDate}
                placeholder={getFormatedDate(user)}
                disabled={isBirthdayDisabled}
                options={{
                  maxDate: 'today',
                  enableTime: false,
                  dateFormat: 'd.m.Y',
                  locale: locale,
                }}
                onChange={date => {
                  setFieldValue('birthDate', date[0]);
                }}
              />
            </InputFlatpickrWrapp>
            {isBirthdayDisabled && (
              <EditBtn
                type="submit"
                disable={isAnyEditing}
                className={isAnyEditing ? '' : 'btn-active'}
                disabled={!isBirthdayDisabled}
                onClick={() => setIsBirthdayDisabled(!isBirthdayDisabled)}
              >
                <IconPen fill={isAnyEditing ? iconColorDisabled : undefined} />
              </EditBtn>
            )}
            {!isBirthdayDisabled && (
              <EditBtn
                type="submit"
                className="btn-active"
                onClick={e => onSubmitClick(e, 'birthDate', errors)}
              >
                <SaveIcon />
              </EditBtn>
            )}
          </InputWrapper>

          {/* Phone */}
          <InputWrapper>
            <Label>{t('Phone')}:</Label>
            <PhoneInput
              name="phone"
              type="tel"
              disabled={isPhoneDisabled}
              className={css}
              onlyCountries={['ua']}
              country={'ua'}
              countryCodeEditable={false}
              errors={errors}
              value={user?.phone}
              onChange={phone => {
                setFieldValue('phone', `+${phone}`);
              }}
              style={{
                border: `${
                  isPhoneDisabled
                    ? '1px solid transparent'
                    : '1px solid #F5925680'
                }`,
                borderRadius: 40,
                backgroundColor: `${
                  isPhoneDisabled ? 'transparent' : '#FDF7F2'
                }`,
              }}
            />
            {touched.phone && errors.phone && (
              <ErrorMessage>{errors.phone}</ErrorMessage>
            )}
            {isPhoneDisabled && (
              <EditBtn
                type="submit"
                disabled={isAnyEditing}
                className={isAnyEditing ? '' : 'btn-active'}
                onClick={() => setIsPhoneDisabled(!isPhoneDisabled)}
              >
                <IconPen fill={isAnyEditing ? iconColorDisabled : undefined} />
              </EditBtn>
            )}
            {!isPhoneDisabled && (
              <EditBtn
                type="submit"
                className="btn-active"
                onClick={e => onSubmitClick(e, 'phone', errors)}
              >
                <SaveIcon />
              </EditBtn>
            )}
          </InputWrapper>

          {/* City */}
          <InputWrapper>
            <Label>{t('City')}:</Label>
            <SelectInput
              onInputChange={handleOnInputChange}
              options={results}
              onChange={cityValue => {
                console.log('cityValue', cityValue);
                setFieldValue('city', cityValue.label);
              }}
              isSearchable="true"
              placeholder={user?.city}
              isLoading={isLoading}
              isDisabled={isCityDisabled}
              styles={{
                control: (baseStyles, state) => ({
                  // ...baseStyles,
                  display: 'flex',
                  padding: '4px',
                  border: `${
                    isCityDisabled
                      ? '1px solid transparent'
                      : '1px solid #F5925680'
                  }`,
                  borderRadius: 40,
                  backgroundColor: `${
                    isCityDisabled ? 'transparent' : '#FDF7F2'
                  }`,
                }),
              }}
            />
            {touched.city && errors.city && (
              <ErrorMessage>{errors.city}</ErrorMessage>
            )}
            {isCityDisabled && (
              <EditBtn
                type="submit"
                disabled={isAnyEditing}
                className={isAnyEditing ? '' : 'btn-active'}
                onClick={() => setIsCityDisabled(!isCityDisabled)}
              >
                <IconPen fill={isAnyEditing ? iconColorDisabled : undefined} />
              </EditBtn>
            )}
            {!isCityDisabled && (
              <EditBtn
                type="submit"
                className="btn-active"
                onClick={e => onSubmitClick(e, 'city', errors)}
              >
                <SaveIcon />
              </EditBtn>
            )}
          </InputWrapper>
        </Form>
      </DataInputWrapp>
    </div>
  );
};

export default UserDataItem;
