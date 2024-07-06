import { Image, Title } from './styles'

import bannerImg from '../../assets/images/banner.png'
import Button from '../Button'

const Banner = () => (
	<>
		<Image style={{ backgroundImage: `url(${bannerImg})` }}>
			<div className="container">
				<Title>Seja bem vindo ao meu projeto Trilha Inicial Front-End Jr.</Title>
				<Button type="link" title="Saiba +">
					Saiba +
				</Button>
			</div>
		</Image>
	</>
)

export default Banner
