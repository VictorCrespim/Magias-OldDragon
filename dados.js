let dados = [
    {
        nome: "Abrir/trancar",
        escola: "Arcana",
        nível: 1,
        alcance: "toque",
        duração: "permanente",
        efeitos: `<p class="p-dados">Esta magia pode ser utilizada para dois efeitos distintos: abrir o acesso a qualquer instrumento ou objeto que esteja fechado, trancado ou emperrado; e fechar um acesso pela duração da magia (ou até ser dissipada).</p> <p class="p-dados">Criaturas com resistência a magia podem destrancar um objeto fechado por esta magia.</p>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Adivinhação",
        escola: "Divina",
        nível: 4,
        alcance: "especial (ver texto)",
        duração: "especial (ver texto)",
        efeitos: `<p class="p-dados">Pedindo ajuda para sua divindade, o clérigo recebe sinais que lhe mostram um caminho, uma verdade, um evento ou uma atividade em específico. A resposta desejada lhe será dada de forma indireta, como um sinal, frase, um enigma, etc.</p>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Ajuda",
        escola: "Divina",
        nível: 2,
        alcance: "toque",
        duração: "1d4 turnos +1 turno/nível",
        efeitos: `<p class="p-dados">Esta magia concede ao alvo 1d8 pontos de vida temporários. Esses pontos de vida podem superar o valor base de pontos de vida e serão os primeiros a serem perdidos em caso de ferimentos.</p>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Andar sobre as águas",
        escola: "Divina",
        nível: 4,
        alcance: "toque",
        duração: "1d4 turnos +1 turno/nível",
        efeitos: `<p class="p-dados">Com esta magia, o alvo tocado adquire a habilidade de andar sobre líquidos e solos instáveis como se estivesse em solo firme. Se memorizada como uma magia de 5º círculo, o clérigo poderá usar esta magia em até dois alvos tocados.</p>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Animar corda",
        escola: "Arcana",
        nível: 1,
        alcance: "250 metros + 3 metros/nível | Alvo: corda de até 15m de comprimento + 1,5m por nível",
        duração: "1 turno/nível",
        efeitos: `<p class="p-dados">O mago consegue animar uma corda ou um objeto semelhante a uma corda.</p>  <p class="p-dados">Os comandos possíveis são: enroscar, amarrar, enrolar e aprisionar, bem como as inversões (esticar, desamarrar, desenrolar e libertar). Lançar um comando corresponde a uma ação de movimento. A corda só pode envolver uma criatura que esteja a 50 centímetros de distância, devendo ser jogada sobre o alvo para que a magia seja lançada e surta efeitos.</p>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Animar objetos",
        escola: "Divina",
        nível: 6,
        alcance: "raio de 10m + 3m/nível",
        duração: "1d4 turnos + 1 turno/nível",
        efeitos: `<p class="p-dados">O clérigo consegue dar vida a objetos inanimados que acatarão qualquer ordem dada por ele. O objeto animado terá as mesmas estatísticas do clérigo.</p>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Apagar",
        escola: "Arcana",
        nível: 1,
        alcance: "toque",
        duração: "permanete",
        efeitos: `<p class="p-dados">Esta magia remove qualquer conteúdo escrito de qualquer superfície. O que estava escrito em cartas, documentos, pergaminhos, mapas e etc. é totalmente apagado.</p> <p class="p-dados">Caso a escrita seja parte de uma magia, use as mesmas regras de dissipar magias para determinar as chances de sucesso.</p>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Apodrecimento",
        escola: "Divina",
        nível: 1,
        alcance: "toque",
        duração: "permanente",
        efeitos: `<p class="p-dados">Esta magia apodrece comida e bebida, deteriorando-a e tornando-a imprópria para o consumo.</p>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Aprisionamento",
        escola: "Arcana",
        nível: 9,
        alcance: " raio de 10 metros + 3 metros/nível",
        duração: "especial (ver texto) ",
        efeitos: `<p class="p-dados">Esta poderosa magia tem como objetivo invocar uma criatura extraplanar e aprisioná-la no plano material até que ela aceite realizar uma tarefa para o mago. Uma vez que a tarefa é cumprida, a criatura é automaticamente enviada ao seu plano original.</p> <p class="p-dados">A criatura convocada tem que ter seu nome conhecido e, uma vez aprisionada no plano material, pode ou não concordar com a chantagem do mago, podendo inclusive atacá-lo.</p> <p>Se a criatura for bem-sucedida em uma jogada de proteção modificada pela Sabedoria, a magia não funcionará e a criatura permanecerá em seu plano original.</p> <p class="p-dados">A melhor forma de se proteger é construir em torno do portal um círculo de proteção com materiais místicos. Esse círculo custa 100 PO para cada dado de vida da criatura. Mesmo assim há sempre uma chance de 1% do círculo de proteção falhar para cada dado de vida da criatura aprisionada.</p>`,
        resistência: "JP+SAB nega",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Aprisionar alma",
        escola: "Arcana",
        nível: 8,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "permanente",
        efeitos: `<p class="p-dados">Esta magia cria uma gema de aprisionamento etéreo com um gatilho inscrito (a última palavra da execução da magia), que faz com que aquele que a segure e pronuncie a palavra inscrita tenha imediatamente a sua alma sugada para dentro da gema.</> <p class="p-dados"> O valor da gema deve ser proporcional ao poder da alma aprisionada, custando 1.000 PO para cada dado de vida da criatura. Almas aprisionadas não morrem e podem retornar para qualquer outro corpo recém-morto, caso a gema seja destruída.</>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Arma abençoada",
        escola: "Divina",
        nível: 1,
        alcance: "toque",
        duração: "1d4 turnos +1 turno/nível",
        efeitos: `<p class="p-dados">Esta magia permite ao clérigo abençoar qualquer arma natural de pedra ou de madeira não mágica, concedendolhe um bônus de +1 no ataque. A arma abençoada recebe ainda um bônus de +1d4 no dano causado.</p>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Arma encantada",
        escola: "Arcana",
        nível: 4,
        alcance: "toque",
        duração: "1d6 turnos +1 turno/nível",
        efeitos: `<p class="p-dados">Esta magia transforma uma arma mundana em uma arma temporariamente mágica, com bônus de +1 nas jogadas de ataque e +1 no dano. Esta magia é a magia básica para a criação de armas mágicas.</>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Armadilha de fogo",
        escola: "Arcana 4 e Divina",
        nível: 2,
        alcance: "toque",
        duração: "permanente",
        efeitos: `<p class="p-dados">O personagem cria uma armadilha engatilhada em qualquer objeto que possa ser aberto (como um baú, livro, porta, gaveta, etc.), que explode em chamas assim que for aberto.</> <p class="p-dados">A explosão causa a todos em um raio de 2m do objeto 1d4 pontos de dano + 1 ponto de dano por nível do personagem que a conjurou. Uma jogada de proteção modificada pela Destreza reduz o dano pela metade.</> <p class="p-dados">O objeto encantado com esta magia não é afetado pelos efeitos desta explosão.</>`,
        resistência: "JP+DES reduz o dano pela metade",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Aterrorizar",
        escola: "Arcana",
        nível: 2,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "1d6 turnos + 1 turno/nível",
        efeitos: `<p class="p-dados">Todas as criaturas com menos de 5 dados de vida e que estejam no raio de alcance da magia ficarão automaticamente aterrorizadas caso falhem em uma jogada de proteção modificada pela Sabedoria. Criaturas aterrorizadas sofrem com o medo, tremendo descontroladamente e recebendo uma penalidade de -2 em todas as suas jogadas, sofrendo ainda com uma chance de 5% por nível do mago de soltar quaisquer objetos que estejam segurando.</>`,
        resistência: "JP+SAB nega",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Barreira de lâminas",
        escola: "Divina",
        nível: 6,
        alcance: "raio de 10 metros + 3 metros/nível ",
        duração: "1d6 turnos+1 turno/nível",
        efeitos: `<p class="p-dados">Esta magia cria uma barreira de afiadas lâminas que envolvem o clérigo. Qualquer criatura que tentar invadir a área da barreira levará 8d6 pontos de dano, que podem ser reduzidos pela metade caso seja bem-sucedida em uma jogada de proteção modificada pela Destreza.</>`,
        resistência: "JP+DES reduz o dano pela metade",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Bastão em serpente",
        escola: "Divina",
        nível: 4,
        alcance: " raio de 10 m + 3 m/ nível",
        duração: "1d4 turnos + 1 turno/nível",
        efeitos: `<p class="p-dados">O clérigo pode transformar bastões não mágicos de madeira em serpentes, que atacarão ao seu comando. A quantidade convertida é de 1d4 bastões + 1 por nível do clérigo. Cada serpente possui 2 DVs e há uma chance de 5% por nível do clérigo de ser venenosa.</>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },
    
  ];
