class Forca {
  constructor(palavra) {
      this.palavra = palavra;
      this.vidas = 6;
      this.letrasChutadas = [];
  }
  chutar(letra) {
      if (this.letrasChutadas.includes(letra)) {
          return null;
      }
      if (letra.length != 1) {
          return null;
      }

      if (!(this.palavra.includes(letra))) {

          this.vidas -= 1;
      }
      this.letrasChutadas.push(letra);
      return letra;
  }
  buscarEstado() {
      if (this.vidas == 0) {
          return "perdeu";
      }
      for (let index = 0; index < this.palavra.length; index++) {
          const letra = this.palavra[index];

          if (!(this.letrasChutadas.includes(letra))) {
              return "aguardando chute";
          }
      }
      return "ganhou";
  }
  // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"
  buscarDadosDoJogo() {
      let palavra = [];

      for (let index = 0; index < this.palavra.length; index++) {
          const letra = this.palavra[index];

          if (this.letrasChutadas.includes(letra)) {
              palavra.push(letra);
          } else {
              palavra.push("_");
          }
      }
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas 
      }
  }
}
module.exports = Forca;