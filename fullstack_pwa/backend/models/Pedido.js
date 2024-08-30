const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    mesa: {
        type: String,
        required: true
    },
    pedido: {
        type: String,
        required: true
    },
    quantidade: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Pedido', pedidoSchema);
