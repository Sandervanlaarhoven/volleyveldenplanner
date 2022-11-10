import { Grid, Typography } from "@mui/material"
import { orange } from "@mui/material/colors"
import { FC } from "react"
import { FieldType } from "../../types"

const Field: FC<FieldType> = (field) => {
	return <Grid item xs={2} sx={{
			backgroundColor: orange[100],
			padding: 1,
			marginLeft: 1
		}}>
			<Typography variant='h6'>{field.fieldName}</Typography>
		</Grid>
}

export default Field