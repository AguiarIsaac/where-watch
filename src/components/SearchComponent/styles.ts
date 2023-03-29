import styled from "styled-components";

export const FormElement = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  height: 30%;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    img {
      width: 2.5rem;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  input {
    padding: 0.5rem;
    outline: none;
    border: 1px solid transparent;

    &:focus-visible{
      border-color: #646cff;
    }
  }

  button {
    border: 1px solid transparent;
    padding: 0.5rem;
    font-family: inherit;
    background-color: #646cff;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover {
      border-color: #646cff;
      background-color: #1a1a1a;
    }

    &:focus,
    &:focus-visible {
      outline: 1px solid -webkit-focus-ring-color;
    }
  }
`