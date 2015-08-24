var _ = require('lodash'),
    sinon = require('sinon'),
    util = require('../../src/util'),
    _config = {};

var sshApi = {
    stdout: {
        on: sinon.spy()
    },
    stdin: {
        write: sinon.spy()
    }
};

var api = _.assign({}, util, {
    logSpy: sinon.spy(),
    getConfig: sinon.stub().returns(_config),
    shellIntoRemote: sinon.stub.returns(sshApi),
    uniqInstance: function(token, constructor) {
        return constructor;
    },
    generateLog: sinon.stub().returns(function() {
        api.logSpy.apply(null, arguments);
    })
});

function triggerStdout(message) {
    sshApi.stdout.on.lastCall.args[1](new Buffer(message));
};

function resetAll() {
    sshApi.stdout.on.reset();
    sshApi.stdin.write.reset();

    _.forIn(api, function(method) {
        if (_.isFunction(method.reset)) method.reset();
    });
}

function setConfig(config) {
    _config = config;
}

module.exports = api;
module.exports.triggerStdout = triggerStdout;
module.exports.setConfig = setConfig;
module.exports.resetAll = resetAll;
module.exports['@noCallThru'] = true;
