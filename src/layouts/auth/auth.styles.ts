import styled from "styled-components";

export const AuthStyles = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .content {
    padding: 22px 32px;
    margin-inline: 20px;
    width: 100%;
    max-width: 480px;
    background-color: var(--clr-white);
    border-radius: 12px;
    border: 2px solid var(--clr-primary-200);
    border-radius: 0 0 2em 0;
    box-shadow: 0.5em 0.5em 0 color-mix(in srgb, var(--clr-primary-50) 20%, transparent);
    .logo {
      max-width: 200px;
      margin-bottom: 32px;
    }
    .ant-form-item.ant-form-item{
      label{
        margin-bottom: 4px;
        text-transform: uppercase;
      }
    }
  }
`;
