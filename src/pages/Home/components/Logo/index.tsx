import { Box, Typography } from '@mui/material';
import './styles.css';
import LogoTarget from '../../../../assets/logo.png';

export const Logo = () => {
	return (
		<Box
			component="section"
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					width: '35%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					component="div"
					className="logo"
					sx={{
						position: 'absolute',
						top: 110,
					}}
				/>
				<Box
					component="div"
					className="logoInf"
					sx={{
						position: 'absolute',
						top: 200,
					}}
				/>
				<Box
					component="div"
					sx={{
						width: '75px',
						height: '75px',
						borderRadius: '50%',
						background: '#ff0000',
						position: 'absolute',
						top: 300,
					}}
				/>
			</Box>
			<Box
				sx={{
					width: '65%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					component="img"
					src={LogoTarget}
					sx={{
						width: '95%',
					}}
				/>
			</Box>
		</Box>
	);
};
