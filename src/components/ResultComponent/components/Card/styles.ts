import styled from "styled-components";

export const CardElement = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 2rem;
  flex-wrap: wrap;

  img {
    width: 10rem;
    height: 75%;
    object-fit: contain;
    
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