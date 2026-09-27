document.getElementById('form-login').addEventListener('submit', function (evento) {
    evento.preventDefault();

    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();

    
    if (email !== '' && senha !== '') {
       
        window.location.href = 'admin.html';
    } else {
        alert('Preencha email e senha para continuar.');
    }
});