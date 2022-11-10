import { Grid, TextField, Typography } from "@mui/material"
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { FieldType, Settings } from "../../types";
import Field from "../Field";

const Detail = () => {
	const [fields, setFields] = useState<FieldType[]>([{
		fieldName: 'Veld 1',
		id: 1,
		games: []
	}, {
			fieldName: 'Veld 2',
			id: 2,
			games: []
		}])
	const [settings, setSettings] = useState<Settings>({
		fieldCount: 1,
		gameCountPerField: 1,
	})
	console.log(setFields)

	const onChangeFieldCount = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSettings({
			...settings,
			fieldCount: parseInt(event.target.value, 10)
		})
	}

	const onChangeGameCountPerField = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSettings({
			...settings,
			fieldCount: parseInt(event.target.value, 10)
		})
	}


	return <Grid item xs={11} sx={{
		height: '100%',
		padding: 1
	}}>
		<Typography variant='h6'>Dagplanning</Typography>
		<Grid container sx={{
			padding: 1
		}}>
			<Grid item xs={2} sx={{
				padding: 1
			}}>
				<TextField label="Aantal velden" variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} value={settings.fieldCount || ''} onChange={onChangeFieldCount} />
				<TextField label="Aantal wedstrijden" variant="standard" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} value={settings.gameCountPerField || ''} onChange={onChangeGameCountPerField} />
			</Grid>
		</Grid>
		<Grid container>
			<Grid item xs={1} sx={{
				backgroundColor: grey[100],
				padding: 1
			}}>
				<Typography variant='h6'>Wedstrijd</Typography>
			</Grid>
			{fields.map((field) => <Field key={field.id} {...field} />)}
		</Grid>
	</Grid>
}

export default Detail