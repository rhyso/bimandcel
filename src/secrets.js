// secrets.js
const secrets = {
    dbUri: "mongodb://bimcel17956:s3Z)Wp5C@ds255329.mlab.com:55329/celandbim"
};

export const getSecret = key => secrets[key];