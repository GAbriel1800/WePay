let usuarios = [];
let transacciones = [];

function registrarUsuario() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;

    if (nombre && correo) {
        usuarios.push({ nombre: nombre, correo: correo, saldo: 0 });
        alert('Usuario registrado exitosamente!');
    } else {
        alert('Por favor completa todos los campos.');
    }
}

function enviarDinero() {
    const usuarioDestino = document.getElementById('usuarioDestino').value;
    const monto = parseFloat(document.getElementById('monto').value);
    
    const usuario = usuarios.find(user => user.correo === usuarioDestino);
    
    if (usuario && monto > 0) {
        const emisor = usuarios[0]; // Suponiendo que el primer usuario es el emisor
        if (emisor.saldo >= monto) {
            emisor.saldo -= monto;
            usuario.saldo += monto;
            transacciones.push({ de: emisor.correo, para: usuarioDestino, monto: monto });
            actualizarHistorial();
            alert('Dinero enviado exitosamente!');
        } else {
            alert('Saldo insuficiente.');
        }
    } else {
        alert('Usuario no encontrado o monto inválido.');
    }
}

function actualizarHistorial() {
    const listaTransacciones = document.getElementById('listaTransacciones');
    listaTransacciones.innerHTML = ''; // Limpiar la lista

    transacciones.forEach(transaccion => {
        const li = document.createElement('li');
        li.textContent = `${transaccion.de} envió ${transaccion.monto} a ${transaccion.para}`;
        listaTransacciones.appendChild(li);
    });
}