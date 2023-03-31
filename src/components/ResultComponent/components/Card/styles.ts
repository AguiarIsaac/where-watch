import styled from "styled-components";
import loanding from '../../../../assets/loanding.svg'

export const CardElement = styled.div`
  width: 600px;
  height: 300px;
  position: relative;
  display: flex;
  gap: 2rem;
  

  .background {
    width: 10rem;
    height: 15rem;
    background: url(${loanding}) center center no-repeat;
    background-size: 45px;
  }

  img.poster {
    width: 10rem;
    height: 15rem;
    object-fit: contain;  
  }

  @media(max-width: 768px){
    width: unset;
    height: unset;
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  height: 100%;
  justify-content: flex-start;
  
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  img {
    max-width: 3rem;
  }

  p {
  max-width: 500px;
  /* max-height: 200px;
  overflow: hidden;
  text-overflow: ellipsis; */
  /* white-space: nowrap; */
  }

  .error {
    color: #cf2323;
  }
`

export const StreammingList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`