document.getElementById('btnLogin').addEventListener('click', function() {
    const usuario = document.getElementById('usuario').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!usuario || !password) {
        alert('Por favor, ingresa usuario y contraseña.');
        return;
    }

    fetch('validar_login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `usuario=${encodeURIComponent(usuario)}&password=${encodeURIComponent(password)}`
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'OK') {
            alert('Bienvenido ' + usuario);
            // Redirige a otra página después del inicio de sesión exitoso
            window.location.href = 'dashboard.html'; // cambia dashboard.html por la ruta que quieras
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    })
    .catch(error => {
        console.error('Error al conectar con el servidor:', error);
    });
});
