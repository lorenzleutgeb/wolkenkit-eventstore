'use strict';

const shell = require('shelljs');

const env = require('../../shared/env'),
      getTestsFor = require('../getTestsFor'),
      Eventstore = require('../../../src/mongodb/Eventstore'),
      waitForMongo = require('../../shared/waitForMongo');

suite('mongodb/Eventstore', () => {
  getTestsFor(Eventstore, {
    url: env.MONGO_URL_UNITS,
    nonExistentUrl: 'mongodb://non-existent.thenativeweb/non-existent',

    async startContainer () {
      shell.exec('docker start mongodb-units');
      await waitForMongo({ url: env.MONGO_URL_UNITS });
    },

    async stopContainer () {
      shell.exec('docker kill mongodb-units');
    }
  });
});