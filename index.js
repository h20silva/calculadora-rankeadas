// Calculadora de Partidas Rankeadas

/**
 * Retorna o nível do herói baseado na quantidade de vitórias.
 * @param {number} vitorias - Número de vitórias do jogador.
 * @param {number} derrotas - Número de derrotas do jogador.
 * @returns {{saldo: number, nivel: string}} - Saldo e nível calculado.
 */
function classificarRankeadas(vitorias, derrotas) {
  if (
    typeof vitorias !== "number" ||
    typeof derrotas !== "number" ||
    isNaN(vitorias) ||
    isNaN(derrotas) ||
    vitorias < 0 ||
    derrotas < 0
  ) {
    return {
      saldo: null,
      nivel: "Entrada inválida",
    };
  }

  const saldo = vitorias - derrotas;
  let nivel = "";

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  } else {
    nivel = "Desconhecido";
  }

  return {
    saldo,
    nivel,
  };
}

// Exemplo de uso:
const nomeHeroi = "Arthos";
const vitorias = 85;
const derrotas = 30;

const resultado = classificarRankeadas(vitorias, derrotas);
if (resultado.saldo !== null) {
  console.log(
    `O Herói tem de saldo de **${resultado.saldo}** está no nível de **${resultado.nivel}**`
  );
} else {
  console.log("Erro: entradas inválidas para vitórias ou derrotas.");
}
