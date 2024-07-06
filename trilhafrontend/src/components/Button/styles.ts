import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.red};
  color: ${colors.black};
  font-size: 16px;
  border-radius: 4px;
  font-weight: bold;
  padding: 8px 16px;
`

export const ButtonLink = styled(Link)`
  background-color: ${colors.red};
  color: ${colors.black};
  font-size: 16px;
  border-radius: 4px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
