import styled from 'styled-components';

const Div = styled.div`
	text-align: center;
`;

export const App = () => {
	return (
		<Div>
			<i class="fa fa-camera-retro"></i>
			<hr />
			<i class="fa fa-binoculars" aria-hidden="true"></i>
			<div>123</div>
		</Div>
	);
};
