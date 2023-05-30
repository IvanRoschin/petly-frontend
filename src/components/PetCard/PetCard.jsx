import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import 'flatpickr/dist/themes/material_orange.css';
import { validationOne, validationTwo } from '../../helpers/validationSchemas';
import { useTranslation } from 'react-i18next';
// import { useAuth } from 'hooks';
import { removePet, editPet } from 'redux/auth/operations';
import { getFormatedDate } from 'helpers/getFormatedDate';

import { DEFAULT_IMAGE } from 'constants/urls';
import { Box } from 'components/Box/Box';

import {
  CardWrapper,
  Image,
  PetInfo,
  PetTitle,
  BtnDelete,
  DeleteIcon,
} from './PetCard.styled';

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
} from './UserDataItem.styled';
export const PetCard = ({ pet }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const { _id, name, birthDate, breed, photoURL, comments } = pet;
  const birthDateToObject = new Date(birthDate);
  const stringifiedToDate = birthDateToObject.toLocaleDateString('ua');
  const iconColorDisabled = 'rgba(0,0,0,0.6)';

  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isBirthdayDisabled, setIsBirthdayDisabled] = useState(true);
  const [isBreedDisabled, setIsBreedDisabled] = useState(true);
  const [isCommentsDisabled, setIsCommentsDisabled] = useState(true);
  const [isImageDisabled, setIsImageDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const isAnyEditing =
    !isNameDisabled ||
    !isBirthdayDisabled ||
    !isBreedDisabled ||
    !isCommentsDisabled ||
    !isImageDisabled;

  const handleDelete = () => {
    dispatch(removePet(_id));
  };

  const onSubmitClick = useCallback(
    (event, field, errors) => {
      if (errors && Object.keys(errors).length) return;
      setTimeout(() => {
        if (field === 'name') setIsNameDisabled(!isNameDisabled);
        if (field === 'birthDate') setIsBirthdayDisabled(!isBirthdayDisabled);
        if (field === 'breed') setIsBreedDisabled(!isBreedDisabled);
        if (field === 'comments') setIsCommentsDisabled(!isCommentsDisabled);
        if (field === 'photoURL') setIsImageDisabled(!isImageDisabled);
      }, 0);

      return true;
    },
    [
      isNameDisabled,
      isBirthdayDisabled,
      isBreedDisabled,
      isCommentsDisabled,
      isImageDisabled,
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
      name: pet.name || 'New Pet',
      birthDate: pet.birthDate || '00.00.0000',
      breed: pet.breed || 'some breed',
      comments: pet.comments || 'Lorem...',
    },
    validationSchema: validationOne,
    onSubmit: values => {
      console.log('values', values);
      dispatch(editPet(_id, values));
    },
  });

  return (
    <CardWrapper>
      <Box pt={20} border="normal" borderColor="transparent">
        <Image src={photoURL || DEFAULT_IMAGE} alt="My pet" width={240} />
      </Box>

      <Box pt={20} position="relative">
        <DataInputWrapp>
          <Form onSubmit={handleSubmit}>
            {/* Name */}
            <InputWrapper>
              <Label htmlFor="name">{t('Name')}:</Label>
              <Input
                type="text"
                name="name"
                value={values.name}
                placeholder={pet?.name}
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
                  <IconPen
                    fill={isAnyEditing ? iconColorDisabled : undefined}
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
                  data-enable-time
                  name="birthDate"
                  value={values?.birthDate}
                  placeholder={getFormatedDate(pet)}
                  disabled={isBirthdayDisabled}
                  options={{
                    maxDate: 'today',
                    enableTime: false,
                    dateFormat: 'd.m.Y',
                    // locale: locale,
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
                  <IconPen
                    fill={isAnyEditing ? iconColorDisabled : undefined}
                  />
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

            {/* Breed */}
            <InputWrapper>
              <Label htmlFor="breed">{t('breed')}:</Label>
              <Input
                type="text"
                name="breed"
                value={values.breed}
                placeholder={pet?.breed}
                disabled={isBreedDisabled}
                onChange={handleChange('breed')}
                onBlur={handleBlur('breed')}
                isactive={isBreedDisabled ? 0 : 1}
              />
              {touched.breed && errors.breed && (
                <ErrorMessage>{errors.breed}</ErrorMessage>
              )}
              {isBreedDisabled && (
                <EditBtn
                  type="submit"
                  disabled={isAnyEditing}
                  onClick={() => setIsBreedDisabled(!isBreedDisabled)}
                  className={isAnyEditing ? '' : 'btn-active'}
                >
                  <IconPen
                    fill={isAnyEditing ? iconColorDisabled : undefined}
                  />
                </EditBtn>
              )}
              {!isBreedDisabled && (
                <EditBtn
                  type="submit"
                  className="btn-active"
                  onClick={e => onSubmitClick(e, 'breed', errors)}
                >
                  <SaveIcon />
                </EditBtn>
              )}
            </InputWrapper>

            {/* Comments */}
            <InputWrapper>
              <Label htmlFor="comments">{t('comments')}:</Label>
              <Input
                type="text"
                name="comments"
                value={values.comments}
                placeholder={pet?.comments}
                disabled={isCommentsDisabled}
                onChange={handleChange('comments')}
                onBlur={handleBlur('comments')}
                isactive={isCommentsDisabled ? 0 : 1}
              />
              {touched.comments && errors.comments && (
                <ErrorMessage>{errors.comments}</ErrorMessage>
              )}
              {isCommentsDisabled && (
                <EditBtn
                  type="submit"
                  disabled={isAnyEditing}
                  onClick={() => setIsCommentsDisabled(!isCommentsDisabled)}
                  className={isAnyEditing ? '' : 'btn-active'}
                >
                  <IconPen
                    fill={isAnyEditing ? iconColorDisabled : undefined}
                  />
                </EditBtn>
              )}
              {!isCommentsDisabled && (
                <EditBtn
                  type="submit"
                  className="btn-active"
                  onClick={e => onSubmitClick(e, 'comments', errors)}
                >
                  <SaveIcon />
                </EditBtn>
              )}
            </InputWrapper>
          </Form>
        </DataInputWrapp>
      </Box>

      <BtnDelete type="button" onClick={handleDelete}>
        <DeleteIcon width={20} height={20} />
      </BtnDelete>
    </CardWrapper>
  );
};

export default PetCard;
