function calcularMediaNotas(atleta) {
    let notas = atleta.notas.slice(); 
  
    
    notas = notas.sort(function(a, b) {
      return a - b;
    });
    
    notas = notas.slice(1, 4);
  
    let somaNotas = 0;
    notas.forEach(function(nota) {
      somaNotas += nota;
    });
  
    const media = somaNotas / notas.length;
    return media.toFixed(2); 
  }
  
  function apresentarResultados(atletas) {
    for (let i = 0; i < atletas.length; i++) {
      const atleta = atletas[i];
      const media = calcularMediaNotas(atleta);
      console.log(`Nome: ${atleta.nome}`);
      console.log(`Notas: ${atleta.notas.join(', ')}`);
      console.log(`Média: ${media}`);
      console.log('\n');
    }
  }
  
  let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

   
  apresentarResultados(atletas);
  