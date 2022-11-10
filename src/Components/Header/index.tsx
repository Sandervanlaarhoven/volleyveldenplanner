import { Grid } from "@mui/material"
import { orange } from "@mui/material/colors"

const Header = () => {
	return <Grid item xs={12} sx={{
		height: 30,
		backgroundColor: orange[500],
	}}></Grid>
}

export default Header