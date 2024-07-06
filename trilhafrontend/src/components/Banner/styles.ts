import styled from 'styled-components'

export const Image = styled.div`
  width: 100%;
  height: 300px;
  display: block;
  margin-top: 40px;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 500px;
  text-align: center;
  margin: 0 auto;
  padding-top: 92px;
`
