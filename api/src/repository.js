const users = {};

const init = () => {

}

const getAll = () => users;

const save = (userId, data) => {
    users[userId] = data;

    console.log('save', userId, data);

    return data;
};

const remove = (token) => {
    for (const user of Object.keys(users)) {
        if (users[user].token === token) {
            users[user].token = null;
            console.log("Deleted token for user " + user);
        }
    }
}

const getByUserId = (userId) => users[userId];
const getByToken = (token) => 

module.exports = {
    init,
    save,
    remove,
    getAll,
    getByUserId
}