import { Team } from "./Team";

export interface Player {
    id: number,
    first_name: string,
    last_name: string,
    position?: string,
    team: Team,
}