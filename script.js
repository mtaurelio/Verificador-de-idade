function qualIdade() {
  let dataNascimento = document.getElementById("idade").value;

  if (!dataNascimento) {
    console.log("Por favor, insira uma data válida.");
    return;
  }

  let dataNascimentoObj = new Date(dataNascimento); // Converte para objeto Date
  let hoje = new Date(); // Data atual

  // Calcula a diferença de anos
  let anos = hoje.getFullYear() - dataNascimentoObj.getFullYear();

  // Verifica se o aniversário já aconteceu neste ano
  if (
    hoje.getMonth() < dataNascimentoObj.getMonth() || // Mês do aniversário ainda não chegou
    (hoje.getMonth() === dataNascimentoObj.getMonth() &&
      hoje.getDate() < dataNascimentoObj.getDate()) // Mês do aniversário chegou, mas dia não
  ) {
    anos--; // Subtrai 1 ano se o aniversário ainda não aconteceu
  }

  // Calcula a diferença de meses
  let meses = hoje.getMonth() - dataNascimentoObj.getMonth();
  if (meses < 0) {
    meses += 12;
  }

  // Calcula a diferença de dias
  let dias = hoje.getDate() - dataNascimentoObj.getDate();
  if (dias < 0) {
    let ultimoDiaMesAnterior = new Date(
      hoje.getFullYear(),
      hoje.getMonth(),
      0
    ).getDate();
    dias += ultimoDiaMesAnterior;
    meses--;
    if (meses < 0) {
      meses += 12;
    }
  }

  console.log(`Idade: ${anos} anos, ${meses} meses e ${dias} dias.`);

  // Condições adicionais:
  if (anos <= 5) {
    console.log("Usuario com 5 anos ou menos"); // Coloque sua mensagem para idades menores ou iguais a 5 anos
  } else if (anos >= 21 && anos <= 24) {
    console.log("Usuario tem entre 21 e 24 anos"); // Coloque sua mensagem para idades entre 21 e 24 anos
  } else {
    console.log("Fora das condições específicas.");
  }
}
