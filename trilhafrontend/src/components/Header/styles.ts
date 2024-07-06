import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  border-bottom: 1px solid ${colors.red};
  padding: 12px;
`

export const ContainerBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.img`
  width: 100px;
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;

  a {
    color: ${colors.white};
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    color: ${colors.red};
    transition: ease-in-out 0.4s;
  }
`
