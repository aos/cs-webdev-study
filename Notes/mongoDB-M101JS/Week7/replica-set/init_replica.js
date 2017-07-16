


config = { _id: "m101", members:[
          { _id : 0, host : "localhost:27017"},
          { _id : 1, host : "localhost:27018"},
          { _id : 2, host : "localhost:27019"} ]
};

rs.initiate(config);
rs.status();

// To be able to query from a secondary set, run command while in replica set mongo shell:
rs.slaveOk();

// Secondaries are constantly reading the opLog of the primary
