import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import css from './UserPhoneInput.css';
import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import 'flatpickr/dist/themes/material_orange.css';
import { Ukrainian } from 'flatpickr/dist/l10n/uk.js';
import { userUpdateSchema } from 'helpers/validationSchemas';
import { getFormatedDate } from 'helpers/getFormatedDate';

import {
  DataInputWrapp,
  Form,
  Label,
  LabelFlatpickr,
  Input,
  FlatpickrStyled,
  InputFlatpickrWrapp,
  InputWrapper,
  EditBtn,
  ErrorMessage,
  IconPen,
} from './UserDataItem.styled';
import { updateInfo } from '../../redux/auth/operations';

import { ReactComponent as EditSaveIcon } from '../../images/svg/save.svg';
import { useTranslation } from 'react-i18next';
import { useAuth } from 'hooks';

const UserDataItem = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const language = localStorage.getItem('i18nextLng');

  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isEmailDisabled, setIsEmailDisabled] = useState(true);
  const [isBirthdayDisabled, setIsBirthdayDisabled] = useState(true);
  const [isPhoneDisabled, setIsPhoneDisabled] = useState(true);
  const [isCityDisabled, setIsCityDisabled] = useState(true);

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
    onSubmit: (values, resetForm) => {
      console.log(values);
      dispatch(updateInfo(values));
      resetForm();
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
              style={{
                border: `${
                  isNameDisabled
                    ? '1px solid transparent'
                    : '1px solid #F5925680'
                }`,
                borderRadius: 40,
                backgroundColor: `${
                  isNameDisabled ? 'transparent' : '#FDF7F2'
                }`,
              }}
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
                <IconPen
                  fill={isAnyEditing ? iconColorDisabled : undefined}
                  width="20"
                  height="20"
                />
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
                <EditSaveIcon width="20" height="20" />
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
              // onChange={e => {
              //   setFieldValue(e.target.name, e.target.value);
              // }}
              isactive={isEmailDisabled ? 0 : 1}
              style={{
                border: `${
                  isEmailDisabled
                    ? '1px solid transparent'
                    : '1px solid #F5925680'
                }`,
                borderRadius: 40,
                backgroundColor: `${
                  isEmailDisabled ? 'transparent' : '#FDF7F2'
                }`,
              }}
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
                <IconPen
                  fill={isAnyEditing ? iconColorDisabled : undefined}
                  width="20"
                  height="20"
                />
              </EditBtn>
            )}
            {!isEmailDisabled && (
              <EditBtn
                type="submit"
                className="btn-active"
                onClick={e => onSubmitClick(e, 'email', errors)}
              >
                <EditSaveIcon width="20" height="20" />
              </EditBtn>
            )}
          </InputWrapper>

          {/* BirthDate */}
          <InputWrapper>
            <LabelFlatpickr htmlFor="birthDate">
              {t('Birthday')}:
            </LabelFlatpickr>
            <InputFlatpickrWrapp>
              {language === 'uk' && (
                <FlatpickrStyled
                  data-enable-time
                  name="birthDate"
                  value={values?.birthDate}
                  placeholder={getFormatedDate(user)}
                  disabled={isBirthdayDisabled}
                  options={{
                    maxDate: 'today',
                    enableTime: false,
                    dateFormat: 'dd.mm.YYYY',
                    locale: Ukrainian,
                  }}
                  onChange={date => {
                    setFieldValue('birthDate', date[0]);
                  }}
                />
              )}
              {language !== 'uk' && (
                <FlatpickrStyled
                  value={values.birthDate}
                  onChange={date => {
                    setFieldValue('birthDate', date[0]);
                  }}
                  name="birthDate"
                  type="date"
                  placeholder={t('Type_date_of_birth')}
                  title={t('birthDate_format')}
                  options={{
                    maxDate: 'today',
                    enableTime: false,
                    dateFormat: 'd.m.Y',
                  }}
                  style={{
                    border: `${
                      isBirthdayDisabled
                        ? '1px solid transparent'
                        : '1px solid #F5925680'
                    }`,
                    borderRadius: 40,
                    backgroundColor: `${
                      isBirthdayDisabled ? 'transparent' : '#FDF7F2'
                    }`,
                  }}
                  disabled={isBirthdayDisabled}
                />
              )}
            </InputFlatpickrWrapp>
            {isBirthdayDisabled && (
              <EditBtn
                type="submit"
                name="birthDate"
                onClick={() => setIsBirthdayDisabled(!isBirthdayDisabled)}
                disabled={isAnyEditing}
                className={isAnyEditing ? '' : 'btn-active'}
                isDateEdit={true}
              >
                <IconPen
                  fill={isAnyEditing ? iconColorDisabled : undefined}
                  width="20"
                  height="20"
                />
              </EditBtn>
            )}
            {!isBirthdayDisabled && (
              <EditBtn
                type="submit"
                className="btn-active"
                onClick={e => onSubmitClick(e, 'birthDate', errors)}
                isDateEdit={true}
              >
                <EditSaveIcon width="20" height="20" />
              </EditBtn>
            )}
          </InputWrapper>

          {/* Phone */}
          <InputWrapper>
            <Label htmlFor="phone">{t('Phone')}:</Label>
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
                <IconPen
                  fill={isAnyEditing ? iconColorDisabled : undefined}
                  width="20"
                  height="20"
                />
              </EditBtn>
            )}
            {!isPhoneDisabled && (
              <EditBtn
                type="submit"
                className="btn-active"
                onClick={e => onSubmitClick(e, 'phone', errors)}
              >
                <EditSaveIcon width="20" height="20" />
              </EditBtn>
            )}
          </InputWrapper>

          {/*
          <InputWrapper>
            <Label htmlFor="city">{t('City')}:</Label>
            <Input
              type="text"
              name="city"
              value={values.city}
              placeholder={user?.city}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={isCityDisabled}
              // onChange={e => {
              //   setFieldValue(e.target.name, e.target.value);
              // }}
              isactive={isCityDisabled ? 0 : 1}
              style={{
                border: `${
                  isCityDisabled
                    ? '1px solid transparent'
                    : '1px solid #F5925680'
                }`,
                borderRadius: 40,
                backgroundColor: `${
                  isCityDisabled ? 'transparent' : '#FDF7F2'
                }`,
              }}
            />
            {isCityDisabled && (
              <EditBtn
                type="submit"
                disabled={isAnyEditing}
                className={isAnyEditing ? '' : 'btn-active'}
                onClick={() => setIsCityDisabled(!isCityDisabled)}
              >
                <IconPen
                  fill={isAnyEditing ? iconColorDisabled : undefined}
                  width="20"
                  height="20"
                />
              </EditBtn>
            )}
            {!isCityDisabled && (
              <EditBtn
                type="submit"
                className="btn-active"
                onClick={e => onSubmitClick(e, 'city', errors)}
              >
                <EditSaveIcon width="20" height="20" />
              </EditBtn>
            )}
          </InputWrapper>
          {touched.city && errors.city && (
            <ErrorMessage>{errors.city}</ErrorMessage>
          )} */}
        </Form>
      </DataInputWrapp>
    </div>
  );
};

export default UserDataItem;
