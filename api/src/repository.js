const users = {};

const init = () => {

}

const getAll = () => users;

const save = (userId, data) => {
    users[userId] = data;

    console.log(users);

    return data;
};

const remove = (token) => {
    // for (const user of Object.keys(users)) {
    //     if (users[user].token === token) {
    //         users[user].token = null;
    //         console.log("Deleted token for user " + user);
    //     }
    // }

    console.log(token)
    const user = getByToken(token);
    console.log('match', user)
    users[user].token = null;

    console.log(users);
}

const getByUserId = (userId) => users[userId];
const getByToken = (token) => {
    for (const user of Object.keys(users)) {
        if (users[user].token === token) {
            return user;
        }
    }
}

module.exports = {
    init,
    save,
    remove,
    getAll,
    getByUserId,
    getByToken
}