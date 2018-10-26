export class User {
  id?: string;
  order?: number;
  name?: string;
  email?: string;
  occupation?: string;
  avatar?: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
