import { ButtonContainer, ButtonLink } from './styles'

type Props = {
	type: 'button' | 'link'
	title: string
	to?: string
	onClick?: () => void
	children: string
}

const Button = ({ type, title, children, onClick, to }: Props) => {
	if (type === 'button') {
		return (
			<ButtonContainer type="button" title={title} onClick={onClick}>
				{children}
			</ButtonContainer>
		)
	}

	return (
		<ButtonLink to={to as string} type="link" title={title} onClick={onClick}>
			{children}
		</ButtonLink>
	)
}

export default Button
