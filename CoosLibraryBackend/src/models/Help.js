const mongoose = require('mongoose');

const helpSchema = mongoose.Schema(
    {
        fullname: {type: String, required: true},
        email: {type: String, required: true},
        subject: {type: String, required: true},
        message: {type: String, required: true},
    },
    {
        Timestamp: true
    }
);

module.exports = mongoose.models.Help || mongoose.model("Help", helpSchema);