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

export function searchObject<T extends keyof DataStore>(objectName: T, field: string, target: any) {

  if (!dataStore.hasOwnProperty(objectName)) {
    throw new Error(`${objectName} not in ${Object.keys(dataStore)}`);
  }

  const targetObject: DataStore[T] = dataStore[objectName];
  const results = [];

  for (const item of targetObject) {
    const fieldValue = (item as any)[field];

    if (fieldValue !== undefined) {
      if (Array.isArray(fieldValue) && fieldValue.includes(target)) {
        results.push(item);
      } else if (String(fieldValue) === target) {
        results.push(item);
      }
    }
  }
  return results;
}
