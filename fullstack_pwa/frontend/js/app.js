const API_URL = 'http://localhost:3000/api/pedidos';

document.getElementById('pedidosForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const mesa = document.getElementById('mesa').value;
    const pedido = document.getElementById('pedido').value;
    const quantidade = document.getElementById('quantidade').value;

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ mesa, pedido, quantidade })
    });

    const pedidos = await response.json();
    appendPedido(pedido);

    document.getElementById('mesa').value = '';
    document.getElementById('pedido').value = '';
    document.getElementById('quantidade').value = '';
});

async function loadPedidos() {
    const response = await fetch(API_URL);
    const pedidos = await response.json();
    pedidos.forEach(appendPedido);
}

function appendPedido(pedido) {
    const li = document.createElement('li');
    li.innerHTML = `
        <strong>${pedido.mesa}</strong>
        <p>${pedido.pedido}</p>
        <p>${pedido.quantidade}</p>
        <button onclick="deletePedido('${pedido._id}')">Deletar</button>
    `;
    document.getElementById('pedidosList').appendChild(li);
}

async function deletePedido(id) {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    document.location.reload();
}

loadPedidos();
