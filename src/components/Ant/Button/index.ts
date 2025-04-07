import { Button as AntButton } from 'antd'
import styled from 'styled-components'

export const Button = styled(AntButton)`
  &.ant-btn {
    --ant-button-blue-shadow-color: none;
    --ant-button-purple-shadow-color: none;
    --ant-button-cyan-shadow-color: none;
    --ant-button-green-shadow-color: none;
    --ant-button-magenta-shadow-color: none;
    --ant-button-pink-shadow-color: none;
    --ant-button-red-shadow-color: none;
    --ant-button-orange-shadow-color: none;
    --ant-button-yellow-shadow-color: none;
    --ant-button-volcano-shadow-color: none;
    --ant-button-geekblue-shadow-color: none;
    --ant-button-lime-shadow-color: none;
    --ant-button-gold-shadow-color: none;
    --ant-button-default-shadow: none;
    --ant-button-primary-shadow: none;
    --ant-button-danger-shadow: none;
  }
  &.ant-btn{
    &.ant-btn-primary{&.ant-btn-lg{
      border-radius: 44px 36px 50px 28px;
      font-weight: 700;
    
    }
    }
  }

`
