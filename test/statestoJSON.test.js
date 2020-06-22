const factory = require('../factory.js');
const JSONMap = require('../toJSONMap.js');
for(var classType in JSONMap){
    test(`toJSON method returns an correct representation of a toJSON string for the specified class`, () => {
        expect(factory(classType).toJSON()).toMatchObject(JSONMap[classType]);
    });
}
