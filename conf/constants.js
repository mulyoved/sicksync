module.exports = {
    UPDATE_CMD: 'npm i -g sicksync',
    UPDATE_INTERVAL: 1000 * 60 * 60 * 24,
    NUM_FILES_FOR_RSYNC: 8,
    FILE_CHANGE_COOLDOWN_MS: 50,
    CRYPT_ALGO: 'aes-128-ctr',
    CONFIG_FILE: 'config.json',
    CONFIG_FILE_V1: '~/.sicksync-config.json',
    UPDATE_FILE: 'update.json',
    SICKSYNC_DIR: '~/.sicksync',
    FS_TOKEN: 'sourceLocation',
    WS_TOKEN: 'hostname'
};
