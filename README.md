# Calculadora de Partidas Rankeadas

## Descrição
Projeto prático para calcular o nível de um "herói" baseado no número de vitórias em partidas ranqueadas. O saldo é definido como a diferença entre vitórias e derrotas, e o nível é atribuído conforme faixas de vitórias.

## Regras de Classificação
- Vitórias < 10: **Ferro**
- Vitórias entre 11 e 20: **Bronze**
- Vitórias entre 21 e 50: **Prata**
- Vitórias entre 51 e 80: **Ouro**
- Vitórias entre 81 e 90: **Diamante**
- Vitórias entre 91 e 100: **Lendário**
- Vitórias >= 101: **Imortal**

## Como usar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/calculadora-rankeadas.git
   ```
2. Abra o arquivo `index.js` e altere os valores de vitórias e derrotas.
3. Execute com Node.js:
   ```bash
   node index.js
   ```

## Exemplo de saída
```
O Herói tem de saldo de **55** está no nível de **Diamante**
```
