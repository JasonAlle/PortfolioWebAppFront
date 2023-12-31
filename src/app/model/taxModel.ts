import { Person } from './personModel';

export interface Tax {
  id: number;
  year: number;
  taxAmount: number;
  person: Person;
}
