export class NavItemChild {
  constructor(
    public link: string,
    public name: string) { }
}
export class NavItem {
  constructor(
    public link: string,
    public name: string,
    public child: NavItemChild[] ) { }
}
