import { Link as DefaultLink } from 'react-router-dom'
import styled from 'styled-components'
// import DefaultButton from '../../../components/Button/button'

export const Form = styled.form`
  height: 530px;
  width: 340px;
  background-color: rgba(245, 245, 245, 0.1);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 30px;
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;

  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
  }
`

export const FormContent = styled.div``

export const Title = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
  text-shadow: 0px 0px 20px rgba(81, 185, 249, 1);

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const InputController = styled.div`
  display: flex;
  flex-flow: column;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`

export const Label = styled.label`
  margin-top: 30px;
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 5px;
  }
`

export const Input = styled.input`
  height: 30px;
  width: 95%;
  background-color: rgba(199, 215, 245, 0.8);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 16px;
  font-weight: 300;
  color: #000000;
  &:-webkit-autofill {
    -webkit-text-fill-color: #000000;
    box-shadow: 0 0 0px 1000px rgba(199, 215, 245, 0.8) inset;
  }

  &:focus {
    background-color: rgba(199, 215, 245, 0.8);
  }
`

// export const Button = styled(DefaultButton)`
//   margin-top: 30px;
//   width: 100%;
//   background-color: rgba(0, 185, 0, 0.2);
//   color: #ffffff;
//   padding: 15px 0;
//   font-size: 18px;
//   font-weight: 600;
//   border-radius: 50px;
//   cursor: pointer;

//   &:hover {
//     color: lime;
//   }

//   @media screen and (max-width: 768px) {
//     font-size: 15px;
//     margin-top: 5px;
//   }
// `

export const InputError = styled.span`
  color: red;
  font-size: 11px;
  line-height: 0.9;
  margin-top: 8px;
`

export const Info = styled.p`
  color: #dff9ff;
  display: block;
  font-size: 14px;
  margin-top: 16px;
  text-align: center;
`
export const Link = styled(DefaultLink)`
  color: #dff9ff;
  font-size: 14px;
  margin-top: 18px;
  text-align: center;
  transition: color 200ms ease-in-out;
  text-shadow: 0px 0px 10px lime;

  &:hover {
    color: #ffffff;
    text-shadow: 0px 0px 10px #ffffff;
  }
`

export const Container = styled.div``