export interface Team {
	name: string;
}

export interface Referee {
	name?: string;
	providingTeam: Team;
}

export interface Game {
	team1?: Team;
	team2?: Team;
	referee?: Referee;
	startTime?: Date;
	endTime?: Date;
}

export interface FieldType {
	id: number;
	fieldName: string;
	games: Game[]
}

export interface Settings {
	fieldCount: number;
	gameCountPerField: number;
}