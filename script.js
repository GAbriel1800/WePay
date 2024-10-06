// Script básico para manejar el login y registro
const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = this[0].value;
    const password = this[1].value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Inicio de sesión exitoso!');
        window.location.href = 'dashboard.html'; // Redirige al dashboard
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = this[0].value;
    const password = this[1].value;

    if (users.find(u => u.username === username)) {
        alert('El usuario ya existe.');
        return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registro exitoso! Ahora puedes iniciar sesión.');
    window.location.href = 'index.html'; // Redirige al login
});

// Función para enviar dinero (opcional)
document.getElementById('sendMoneyForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Dinero enviado!'); // Aquí puedes agregar la lógica para manejar la transacción
});

