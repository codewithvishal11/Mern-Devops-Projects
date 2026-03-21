const Help = require('../models/Help');

const getHelp = async (req, res) => {
    try {
        const data = await Help.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addHelp = async (req, res) => {
    try {
        const helpreq = new Help(req.body);
        const savedhelp = await helpreq.save();
        res.status(200).json(savedhelp);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getHelp, addHelp };