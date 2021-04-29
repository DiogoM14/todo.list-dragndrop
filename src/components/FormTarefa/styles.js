import styled from 'styled-components'

export const Container = styled.div`
  /* width: 100%; */
  max-width: 600px;
  text-align: center;
  padding: 3rem 2rem;
  background: var(--gray);
  margin: 3rem auto;
  border-radius: 5px;

  h1 {
    margin-bottom: 2rem;
  }

  hr {
    margin-bottom: 1rem;
  }

  a {
    color: var(--white);

    &:hover {
      text-decoration: underline;
    }
  }
`

export const Form = styled.form`
  margin-bottom: 2rem;

  input {
    border: none;
    /* height: 1.8rem; */
    margin-right: 3rem;
    background: #19191c;
    padding: 0.3rem 0.7rem;
    border-radius: 5px;
    /* transition: border 0.3s;
    
    &:hover {
      border: 2px solid var(--cyan-500);
      margin-right: calc(3rem - 4px);
    } */
  }

  button {
    border: none;
    padding: 0.3rem 0.7rem;
    font-weight: 500;
    color: var(--gray);
  }
`

export const Card = styled.div`
  margin-top: 3rem;
  max-width: 500px;
  margin: 1rem auto;
  background: #19191c;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    li {
      font-size: 1.3rem;
      font-weight: 500;
    }
  }
`
