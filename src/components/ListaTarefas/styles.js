import styled from 'styled-components'

export const Container = styled.div`
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
