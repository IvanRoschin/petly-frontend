import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { theme } from 'globalStyles/theme';

export const BackgroundContainer = styled.div`
  @media (min-width: 768px) {
    width: 608px;
    height: 100%;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 60px;
    padding-bottom: 40px;
    background: #ffffff;
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    margin: 0 auto;
    margin-top: 200px;
  }
`;

export const Form = styled.form`
  width: 100%;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 458px;
  }
`;

export const InputField = styled.div`
  position: relative;

  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-bottom: ${props => (props.margin ? '40px' : '16px')};
  }
`;

export const DivPass = styled.div`
  color: #ff6101;
  position: absolute;
  right: 12px;
  top: 12px;
  @media (min-width: 768px) {
    top: 17px;
  }
`;

export const Input = styled.input`
  outline: none;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background-color: ${theme.colors.mainBackground};
  border: 2px solid ${theme.colors.accent};
  border-radius: 40px;
  padding-left: 14px;
  font-size: 14px;
  transition: border 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &::placeholder {
    font-size: 14px;
    color: ${theme.colors.gray};
  }
  &:hover,
  &:focus {
    border: 2px solid #ff6101;
  }

  @media (min-width: 768px) {
    height: 52px;
  }
`;

export const Button = styled.button`
  color: ${props => (props.outline ? 'black' : 'white')};
  width: 100%;
  padding: 10px;
  border-radius: 40px;

  font-size: ${theme.fontSizes.large};
  border: ${props =>
    props.outline
      ? `2px solid ${theme.colors.accent}`
      : `2px solid ${theme.colors.accent}`};
  background-color: ${props =>
    props.outline ? 'white' : `${theme.colors.accent}`};
  margin-bottom: ${props => (props.noMargin ? '0' : '20px')};

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: #ff6101;
    border: 2px solid #ff6101;
  }

  @media (min-width: 768px) {
    padding: 18px;
    margin-bottom: ${props => (props.margin ? '40px' : '16px')};
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  font-size: ${theme.fontSizes.small};
  top: 40px;
  left: 10px;
  color: ${theme.colors.accent};
  @media (min-width: 768px) {
    top: 52px;
    left: 20px;
  }
`;

export const LinkText = styled.p`
  text-align: center;
  color: ${theme.colors.gray};
  font-size: ${theme.fontSizes.small};
`;

export const StyledLink = styled(Link)`
  position: relative;
  color: ${theme.colors.blue};
  &::before {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 0.5px;
    background-color: blue;
    left: 0;
    top: 14px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  margin-bottom: 40px;
  @media (min-width: 480px) {
    font-size: 36px;
  }
`;
