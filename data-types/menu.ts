interface Menu {
  leagueType: string;
  id: string;
  name: string;
  tournamentId?: any;
  divisions?: {
    divisionId: string;
    divisionName: string;
  }[];
}

export default Menu;
