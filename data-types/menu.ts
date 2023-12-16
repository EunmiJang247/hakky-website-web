interface Menu {
  href: string;
  name: string;
  subMenu?: {
    href: string;
    name: string;
  }[];
}

export default Menu;
