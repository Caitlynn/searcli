import { searchObject } from './search';


describe('test search users', () => {
  test('can search users using field id', () => {
    expect(searchObject('users', '_id', '1').length).toBe(1);
  });

  test('can search users using field name', () => {
    expect(searchObject('users', 'name', 'Woodard Burt').length).toBe(1);
  });

  test('can search users using field role', () => {
    expect(searchObject('users', 'role', 'admin').length).toBe(24);
  });

});

describe('test search tickets', () => {
  test('can search tickets using field priority', () => {
    expect(searchObject('tickets', 'priority', 'urgent').length).toBe(49);
  });

  test('can search tickets using field type', () => {
    expect(searchObject('tickets', 'type', 'question').length).toBe(50);
  });

  test('can search tickets using field assignee id', () => {
    expect(searchObject('tickets', 'assignee_id', '29').length).toBe(2);
  });

  test('can search tickets using field tags', () => {
    expect(searchObject('tickets', 'tags', 'Texas').length).toBe(14);
  });
});

describe('test search organizations', () => {
  test('can search organizations using external id', () => {
    expect(searchObject('organizations', 'external_id', '52f12203-6112-4fb9-aadc-70a6c816d605').length).toBe(1);
  });

  test('can search organizations using field domain names', () => {
    expect(searchObject('organizations', 'domain_names', 'kage.com').length).toBe(1);
  });

  test('can search organizations using field url', () => {
    expect(searchObject('organizations', 'url', 'http://initech.zendesk.com/api/v2/organizations/105.json').length).toBe(1);
  });
});

describe('test function with invalid inputs', () => {
  test('invalid object', () => {
    const searchKey: any = 'hello';
    expect(() => searchObject(searchKey, '1', '1')).toThrow(Error("hello not in users,tickets,organizations"));
  });

  test('invalid inputs for searching users', ()=> {
    expect(searchObject('users', '1@', '1').length).toBe(0);
  });

  test('invalid inputs for searching tickets', ()=> {
    expect(searchObject('tickets', '1#%', '1').length).toBe(0);
  });

  test('invalid inputs for searching organizations', ()=> {
    expect(searchObject('organizations', '!@', '1').length).toBe(0);
  });
});
