import { HeaderBar, ContainerBar, LinkItem, Links, Logo } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => {
	return (
		<HeaderBar>
			<div className="container">
				<ContainerBar>
					<h1>
						<Logo src={logo} alt="Codigo Certo" />
					</h1>
					<nav>
						<Links>
							<LinkItem>
								<a href="#">Sobre</a>
							</LinkItem>
							<LinkItem>
								<a href="#">Gostos pessoais</a>
							</LinkItem>
							<LinkItem>
								<a href="#">Motivações</a>
							</LinkItem>
						</Links>
					</nav>
				</ContainerBar>
			</div>
		</HeaderBar>
	)
}

export default Header
