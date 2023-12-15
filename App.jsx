import { nanoid } from "nanoid"
import colorData from "./data/colorData"
import Header from "./components/Header"

export default function App() {
	function ColorCard(props) {
		return (
			<div className="color-card" style={{ background: props.color }}>
				<p>
					<span>{props.number}.</span> {props.color}
				</p>
			</div>
		)
	}
	
	const colors = colorData.map((color, index)=>{
		return (
			<ColorCard 
				key={nanoid()}
				color={color}
				number={index + 1}
			/>
		)
	})
	
	return (
		<div className="wrapper">
			<Header /> 
			{colors}			
		</div>
	)
}
