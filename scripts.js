// Função para validação básica do formulário
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    const nomeCompleto = document.getElementById("nomeCompleto").value.trim();
    const telefoneContato = document.getElementById("telefoneContato").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const dataNascimento = document.getElementById("dataNascimento").value;

    // Validação de campos obrigatórios
    if (nomeCompleto === "" || telefoneContato === "" || cep === "" || dataNascimento === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        event.preventDefault();
        return;
    }

    // Validação do formato do telefone (apenas números)
    const telefonePattern = /^\d{10,11}$/;
    if (!telefonePattern.test(telefoneContato)) {
        alert("Por favor, insira um número de telefone válido com 10 ou 11 dígitos.");
        event.preventDefault();
        return;
    }

    // Validação do formato do CEP (apenas números)
    const cepPattern = /^\d{8}$/;
    if (!cepPattern.test(cep)) {
        alert("Por favor, insira um CEP válido com 8 dígitos.");
        event.preventDefault();
        return;
    }

    alert("Cadastro realizado com sucesso!");
});

document.getElementById('senha').addEventListener('input', function() {
    const senhaInput = this.value;

    const regraMaiuscula = document.getElementById('senha-maiuscula');
    const regraMinuscula = document.getElementById('senha-minuscula');
    const regraEspecial = document.getElementById('senha-especial');
    const regraEspaco = document.getElementById('senha-espaco');

    // Validações individuais
    const temMaiuscula = /[A-Z]/.test(senhaInput);
    const temMinuscula = /[a-z]/.test(senhaInput);
    const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senhaInput);
    const temEspaco = /\s/.test(senhaInput);

    // Atualiza o estado das regras
    regraMaiuscula.classList.toggle('valid', temMaiuscula);
    regraMinuscula.classList.toggle('valid', temMinuscula);
    regraEspecial.classList.toggle('valid', temEspecial);
    regraEspaco.classList.toggle('valid', !temEspaco);
});

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validação do número do CREFITO (somente números e 8 dígitos)
    const crefitoInput = document.getElementById('crefito');
    const crefitoPattern = /^[0-9]{8}$/;

    if (!crefitoPattern.test(crefitoInput.value)) {
        alert('O número do CREFITO deve conter exatamente 8 dígitos numéricos.');
        crefitoInput.focus();
        return;
    }

    // Validação das senhas
    const senhaInput = document.getElementById('senha').value;
    const confirmarSenhaInput = document.getElementById('confirmarSenha').value;

    const temMaiuscula = /[A-Z]/.test(senhaInput);
    const temMinuscula = /[a-z]/.test(senhaInput);
    const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senhaInput);
    const temEspaco = /\s/.test(senhaInput);

    if (!temMaiuscula || !temMinuscula || !temEspecial || temEspaco) {
        alert('A senha não atende a todos os critérios. Verifique as regras e tente novamente.');
        return;
    }

    if (senhaInput !== confirmarSenhaInput) {
        alert('As senhas não coincidem.');
        return;
    }

    // Caso a validação passe, o formulário é enviado
    alert('Cadastro realizado com sucesso!');
    this.submit();
});

document.getElementById('senha').addEventListener('input', function() {
    const senhaInput = this.value;

    const regraMaiuscula = document.getElementById('senha-maiuscula');
    const regraMinuscula = document.getElementById('senha-minuscula');
    const regraEspecial = document.getElementById('senha-especial');
    const regraEspaco = document.getElementById('senha-espaco');

    // Verifica se a senha contém pelo menos uma letra maiúscula
    const contemMaiuscula = /[A-Z]/.test(senhaInput);
    if (contemMaiuscula) {
        regraMaiuscula.classList.add('valid');
    } else {
        regraMaiuscula.classList.remove('valid');
    }

    // Verifica se a senha contém pelo menos uma letra minúscula
    const contemMinuscula = /[a-z]/.test(senhaInput);
    if (contemMinuscula) {
        regraMinuscula.classList.add('valid');
    } else {
        regraMinuscula.classList.remove('valid');
    }

    // Verifica se a senha contém pelo menos um caractere especial
    const contemEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senhaInput);
    if (contemEspecial) {
        regraEspecial.classList.add('valid');
    } else {
        regraEspecial.classList.remove('valid');
    }

    // Verifica se a senha contém espaços
    const contemEspaco = /\s/.test(senhaInput);
    if (!contemEspaco) {
        regraEspaco.classList.add('valid');
    } else {
        regraEspaco.classList.remove('valid');
    }
});