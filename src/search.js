"use strict";
exports.__esModule = true;
var dataStore = {
    users: require('../data/users.json'),
    tickets: require('../data/tickets.json'),
    organizations: require('../data/organizations.json')
};
function searchObject(objectName, field, value) {
    if (!dataStore.hasOwnProperty(objectName)) {
        throw new Error(objectName + " not in " + Object.keys(dataStore));
    }
    var targetObject = dataStore[objectName];
    var results = [];
    for (var _i = 0, targetObject_1 = targetObject; _i < targetObject_1.length; _i++) {
        var item = targetObject_1[_i];
        var field_value = item[field];
        if (field_value !== undefined) {
            if (Array.isArray(field_value)) {
                if (item[field].includes(value)) {
                    results.push(item);
                }
            }
            else if (item[field] == value) {
                results.push(item);
            }
        }
    }
    return results;
}
exports.searchObject = searchObject;
