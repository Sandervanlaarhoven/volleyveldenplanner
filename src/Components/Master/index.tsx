import { Grid, Typography } from "@mui/material"
import { orange } from "@mui/material/colors"

const Master = () => {
	return <Grid item xs={1} sx={{
		height: '100%',
		backgroundColor: orange[50],
		padding: 1
	}}>
		<Typography variant='h6'>Veldenplanner</Typography>
	</Grid>
}

export default Master