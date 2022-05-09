const Joi = require('joi');


function validatePlayers (checkObj){
    for (let i = 0; i < checkObj.length; i++) {
        const { error } = validatePlayer(checkObj[i]);
        if (error) return res.status(400).send(error.details[0].message);
    }
}


function validatePlayer(player) {
    const schema = {
        name: Joi.string().min(3).required(),
        email: Joi.string().min(3).required(), 
    };
    return Joi.validate(player, schema);
}

module.exports.validatePlayers = validatePlayers;