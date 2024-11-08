const db = require("../models");
/**
 * @return {boolean}
 * @author Ivan Macabontoc
 * @param {string} modelName
 * @param {string} userIdField
 * **/
const isOwner = (modelName, userIdField = 'userId') => {
    return async (req, res, next) => {
        const { id } = req.params;
        const  user  = req.user
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        try {
            const authorizedUser = await db[modelName].findOne({ where: { id } });
            if (!authorizedUser) {
                return res.status(404).json({ success: false, message: "User Not Found" });
            }
            if (authorizedUser[userIdField] !== user.id) {
                return res.status(403).json({ success: false, message: "Unauthorized" });
            }
            next();
        } catch (error) {
            return res.status(403).json({ success: false, message: "Unauthorized" });
        }
    } 
};
module.exports = { isOwner };
