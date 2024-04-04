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
					width: '40%',
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
						top: 150,
					}}
				/>
				<Box
					component="div"
					className="logoInf"
					sx={{
						position: 'absolute',
						top: 250,
					}}
				/>
				<Box
					component="div"
					sx={{
						width: '170px',
						height: '170px',
						borderRadius: '50%',
						background: '#ff0000',
						position: 'absolute',
						top: 360,
					}}
				/>
			</Box>
			<Box
				sx={{
					width: '60%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					pr: 15,
				}}
			>
				<Box
					component="img"
					src={LogoTarget}
					sx={{
						width: '100%',
					}}
				/>
			</Box>
		</Box>
	);
};
