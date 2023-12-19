interface Menu {
  id: string;
  name: string;
  divisions?: {
    divisionId: string;
    divisionName: string;
  }[];
}

export default Menu;
