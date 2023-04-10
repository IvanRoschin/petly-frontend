import styled from 'styled-components';
import Flatpickr from 'react-flatpickr';
import Select from 'react-select';

import 'flatpickr/dist/themes/material_orange.css';
import { theme } from 'globalStyles/theme';
import { ReactComponent as EditPenIcon } from '../../images/svg/pensil.svg';
import { ReactComponent as EditSaveIcon } from '../../images/svg/save.svg';

export const SelectInput = styled(Select)`
  width: 150px;
  padding: 4px 14px;

  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.text};

  ::placeholder {
    color: ${({ theme, disabled }) => disabled && theme.colors.text};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
    padding: 3px 12px 4px 12px;
    font-size: ${theme.fontSizes[3]};
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 100%;
    padding: 3px 12px 4px 12px;
    font-size: ${theme.fontSizes[3]};
  }
`;

export const IconPen = styled(EditPenIcon)`
  width: 20px;
  height: 20px;
`;
export const SaveIcon = styled(EditSaveIcon)`
  width: 20px;
  height: 20px;
`;

export const Form = styled.form`
  gap: 9px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: 24px;
  }
`;

export const DataInputWrapp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: inline-block;
  font-weight: ${prop => prop.theme.fontWeights.normal};
  font-size: 12px;
  line-height: 1.39;
  color: ${prop => prop.theme.colors.black};
  min-width: 60px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 119px;
    font-size: 18px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 96px;
  }
`;

export const LabelFlatpickr = styled.label`
  display: inline-block;
  font-weight: ${prop => prop.theme.fontWeights.normal};
  font-size: 12px;
  color: ${prop => prop.theme.colors.black};
  line-height: 1.39;
  width: 90px;
  min-width: 60px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 119px;
    font-size: 18px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 96px;
  }
`;

export const Input = styled.input`
  width: 150px;
  padding: 4px 14px;
  border: ${({ theme, disabled }) =>
    disabled ? theme.borders.transparent : theme.borders.input};
  border-radius: ${p => p.theme.radii.big};
  outline: ${p => p.theme.colors.transparent};

  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.text};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.transparent : theme.colors.background};

  ::placeholder {
    color: ${({ theme, disabled }) => disabled && theme.colors.text};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
    padding: 3px 12px 4px 12px;
    font-size: ${theme.fontSizes[3]};
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 100%;
    padding: 3px 12px 4px 12px;
    font-size: ${theme.fontSizes[3]};
  }
`;

export const InputFlatpickrWrapp = styled.div`
  font-size: 18px;
  width: 120px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 100%;
  }
`;

export const FlatpickrStyled = styled(Flatpickr)`
  width: 100%;
  padding: 4px 14px;
  border: ${({ theme, disabled }) =>
    disabled ? theme.borders.transparent : theme.borders.input};
  border-radius: ${p => p.theme.radii.big};
  outline: ${p => p.theme.colors.transparent};

  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.text};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.transparent : theme.colors.background};

  ::placeholder {
    color: ${({ theme, disabled }) => disabled && theme.colors.text};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 3px 12px 4px 12px;
    font-size: ${theme.fontSizes[3]};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 3px;
  align-items: center;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 7px;
  }
`;

export const EditBtn = styled.button`
  width: 30px;
  height: 30px;
  padding: 5px;
  background-color: ${prop => prop.theme.colors.background};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  fill: ${prop => prop.theme.colors.accent};

  &.btn-active:hover {
    scale: 1.1;
    fill: ${prop => prop.theme.colors.accentBtn};
  
    @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 32px;
    height: 32px;
}

`;

export const ErrorMessage = styled.div`
  position: absolute;
  transform: translate(0px, 0px);
  font-size: 10px;
  color: red;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    transform: translate(132px, 0px);
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    transform: translate(90px, 0px);
    margin-left: ${prop => (prop.isDateEdit ? '10px' : 0)};
  }
`;

export const NotAuthorized = styled.div`
  font-family: 'Manrope';
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40%;
`;
