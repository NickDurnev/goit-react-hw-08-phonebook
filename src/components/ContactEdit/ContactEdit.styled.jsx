import styled from 'styled-components';
import { Input, StyledButton } from '../ContactForm/ContactForm.styled';
import { IoMdClose } from 'react-icons/io';

export const InfoForm = styled.form`
  min-width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding: 20px;
  background-color: ${({ theme }) => theme.bgColor};

  & p {
    color: ${({ theme }) => theme.bgElementColor};
    font-size: 12px;
  }

  & p::before {
    display: inline;
    content: '⚠  ';
  }
`;

export const InfoLabel = styled.label`
  display: block;
  font-weight: ${({ theme }) => theme.mainTextFontWeight};
  color: ${({ theme }) => theme.textColor};
  text-align: center;

  & + & {
    margin-top: 20px;
  }
`;

export const CloseIcon = styled(IoMdClose)`
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.textColor};
  transition: color ${({ theme }) => theme.animationDuration}
    ${({ theme }) => theme.animationTimeFunction};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.bgElementColor};
  }
`;

export const InfoInput = styled(Input)``;

export const EmailInput = styled(InfoInput)`
  text-transform: none;
`;

export const InfoButton = styled(StyledButton)``;
