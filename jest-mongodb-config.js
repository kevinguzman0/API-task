const { MongoMemoryServer } = require("mongodb-memory-server");
const mongoose = require("mongoose");

let mongoServer;

module.exports = {
  setup() {
    return new Promise(async (resolve) => {
      mongoServer = await MongoMemoryServer.create();
      const uri = mongoServer.getUri();
      await mongoose.connect(uri);
      resolve();
    });
  },

  teardown() {
    return mongoose.disconnect().then(() => mongoServer.stop());
  },
};
