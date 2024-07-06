import styled from 'styled-components'

type BotaoProps = {
	principal: boolean
	fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'}
`

function Teste() {
	return (
		<>
			<Botao principal>Olá mundo!</Botao>
			<Botao principal={false} fontSize="14px">
				Cancelar
			</Botao>
		</>
	)
}

export default Teste
