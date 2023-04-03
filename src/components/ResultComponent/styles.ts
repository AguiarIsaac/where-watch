import styled from "styled-components";
import background from '../../assets/background.webp'

export const SectionComponent = styled.section`
  position: relative;
  height: 70%;

  &::before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background: 
    url(${background})
    center center no-repeat
    ;
    background-size: cover;
    filter: brightness(20%);
  }
`

export const CardList = styled.div`
  position: relative;
  padding: 1rem;
  gap: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 90%;
  height: 90%;
  margin: 0 auto;
  margin-top: 2rem;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.5rem;
    margin-left: 1rem;
    
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 8px;
    border: none;
  }
`

export const ErrorMessage = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 5rem;
  }
`