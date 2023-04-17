import * as yup from 'yup';
import i18n from 'i18n';

export const userUpdateSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/[a-zA-Zа-яА-ЯіІїЇґҐёЁєЄ]/, i18n.t('Use_letters'))
    .min(2, i18n.t('Too_short'))
    .max(30, i18n.t('Too_long'))
    .trim()
    .required(i18n.t('Name_required')),
  email: yup
    .string()
    .email(i18n.t('Invalid_email'))
    .required(i18n.t('Email_required')),
  birthDate: yup
    .string()
    .max(new Date())
    .required(i18n.t('Birthdate_required')),
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/, i18n.t('Invalid_phone_number'))
    .required(i18n.t('Phone_required')),
  city: yup.object().required(i18n.t('Type_location')),
});
