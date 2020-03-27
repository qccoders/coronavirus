const users = {
    "test": { "someProp": 1 }
};

const init = () => {

}

const getAll = () => users;

const save = (userId, data) => {
    users[userId] = data;

    console.log('save', userId, data);
}

const getByUserId = (userId) => users[userId];

module.exports = {
    init,
    save,
    getAll,
    getByUserId
}