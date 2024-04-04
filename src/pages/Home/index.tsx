import { Box } from '@mui/material';
import { Logo } from './components/Logo';

export const Home = () => {
	return (
		<Box
			component="main"
			sx={{
				width: '100%',
				height: '100vh',
			}}
		>
			<Logo />
		</Box>
	);
};
