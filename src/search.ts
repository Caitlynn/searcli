import { Ticket, User, Organization } from './data-types';

interface DataStore {
  users: User[];
  tickets: Ticket[];
  organizations: Organization[];
}

const dataStore: DataStore = {
  users: require('../data/users.json'),
  tickets: require('../data/tickets.json'),
  organizations: require('../data/organizations.json'),
};

export function searchObject<T extends keyof DataStore>(objectName: T, field: string, value: any) {

  if (!dataStore.hasOwnProperty(objectName)) {
    throw new Error(`${objectName} not in ${Object.keys(dataStore)}`);
  }

  const targetObject: DataStore[T] = dataStore[objectName];
  const results = [];

  for (const item of targetObject) {
    const field_value = (item as any)[field];

    if (field_value !== undefined) {
      if (Array.isArray(field_value)) {
        if ((item as any)[field].includes(value)) {
          results.push(item);
        }
      } else if ((item as any)[field] === value) {
        results.push(item);
      }
    }
  }
  return results;
}
