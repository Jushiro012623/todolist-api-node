
const bcrypt = require("bcrypt");
const hashThis = (hash) => {
    bcrypt.hash(hash, 10);
}

module.exports = hashThis