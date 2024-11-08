const bcrypt = require("bcrypt");
const hashThis = async (hash) => {
    return bcrypt.hash(hash, 10);
}

module.exports = {hashThis}