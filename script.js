document.getElementById("verificarBtn").addEventListener("click", validarCPF);

function validarCPF() {
    var cpf = document.getElementById("cpfInput").value.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || !validateCPFNumbers(cpf)) {
        document.getElementById("resultado").innerHTML = '<div class="alert alert-danger" role="alert">CPF inválido.</div>';
        return;
    }

    if (validateCPF(cpf)) {
        document.getElementById("resultado").innerHTML = '<div class="alert alert-success" role="alert">CPF válido.</div>';
    } else {
        document.getElementById("resultado").innerHTML = '<div class="alert alert-danger" role="alert">CPF inválido.</div>';
    }
}

function validateCPFNumbers(cpf) {
    for (var i = 0; i < 10; i++) {
        if (cpf.substring(i, i + 1) === cpf.substring(i + 1, i + 2)) return false;
    }
    return true;
}

function validateCPF(cpf) {
    var sum = 0;
    var rest;

    for (var i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    rest = (sum * 10) % 11;

    if (rest === 10 || rest === 11) rest = 0;

    if (rest !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;

    for (var i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    rest = (sum * 10) % 11;

    if (rest === 10 || rest === 11) rest = 0;

    if (rest !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}