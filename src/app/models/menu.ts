export class Menu {
  id?: string;
  order?: number;
  label?: string;
  icon?: string;
  expanded?: boolean;
  routerLink?: string;
  children?: [Menu];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
