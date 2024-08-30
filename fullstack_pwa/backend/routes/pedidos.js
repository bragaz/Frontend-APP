const express = require('express');
const router = express.Router();
const Pedido = require('../models/Pedido');

router.post('/', async (req, res) => {
    const { mesa, pedido, quantidade } = req.body;
    const newPedido = new Pedido({ mesa, pedido, quantidade });
    await newPedido.save();
    res.json(newPedido);
});

router.get('/', async (req, res) => {
    const pedidos = await Pedido.find();
    res.json(pedidos);
});

router.put('/:id', async (req, res) => {
    const { mesa, pedido, quantidade } = req.body;
    const updatedPedido = await Pedido.findByIdAndUpdate(req.params.id, { mesa, pedido, quantidade }, { new: true });
    res.json(updatedPedido);
});

router.delete('/:id', async (req, res) => {
    await Pedido.findByIdAndDelete(req.params.id);
    res.json({ message: 'Pedido deletado com sucesso!' });
});

module.exports = router;
