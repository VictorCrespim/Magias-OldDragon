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
    {
        nome: "Baú secreto",
        escola: "Arcana",
        nível: 5,
        alcance: "especial (ver texto) | Alvo: baú",
        duração: "60 dias ou até ser dispensado",
        efeitos: `<p class="p-dados"> Com esta magia o mago consegue esconder um baú no plano etéreo por até 60 dias, podendo recuperá-lo à vontade. O baú pode conter 1m³ de espaço para cada nível do mago. Se uma criatura viva for colocada no baú, ela viverá normalmente, respirando, se alimentando, bebendo e envelhecendo.</> <p class="p-dados">Para recuperar o baú é preciso se concentrar por um turno inteiro, e ele aparecerá ao lado do mago.</> <p class="p-dados">Caso o baú permaneça no plano etéreo por mais de 60 dias, existe uma chance diária e cumulativa de 5% do baú se perder para sempre.</>`,
        resistência: "",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Bênção",
        escola: "Divina",
        nível: 2,
        alcance: "toque",
        duração: "1d4 turnos + 1 turno/nível",
        efeitos: `<p class="p-dados">A bênção é concedida pelo deus adorado pelo clérigo, concedendo ao alvo tocado um bônus de +1 nas jogadas de ataque e nas jogadas de proteção modificadas pela Sabedoria para cada 3 níveis de clérigo.</p>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Bola de Fogo",
        escola: "Arcana 3,",
        nível: 7,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "instantânea",
        efeitos: `<p class="p-dados"> Um projétil semelhante a uma pequena pérola de chamas é disparado do dedo do mago, para explodir em chamas no lugar alvo. O raio da explosão é de 6 metros e o dano é de 1d6 por nível do mago (máximo 10d6). A explosão se adapta ao volume disponível.</p><p class="p-dados">Um sucesso em uma jogada de proteção modificada pela Destreza reduz o dano desta magia pela metade. Se memorizada como uma magia de 7º círculo, a explosão da bola de fogo pode ser adiada por até 10 minutos.</p>`,
        resistência: "JP+DES reduz o dano pela metade",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Bom Fruto",
        escola: "Divina",
        nível: 2,
        alcance: "toque",
        duração: "especial (ver texto)",
        efeitos: `<p class="p-dados">Com esta magia, o clérigo é capaz de abençoar 2d4 frutos e torná-los mágicos. Aquele que comer destes frutos recuperará 1 ponto de vida perdido por nível do clérigo.</p><p class="p-dados">A cada 24 horas, apenas 8 pontos de vida podem ser recuperados com esta magia.</p>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },

    // Cântico
    {
        nome: "Cântico",
        escola: "Divina",
        nível: 2,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "especial (ver texto)",
        efeitos: `<p class="p-dados">O clérigo, entoando cantigas religiosas, concede a seus aliados um bônus de +1 para cada 3 níveis do clérigo em todas as jogadas dentro da área de alcance da magia, enquanto amaldiçoa simultaneamente os inimigos com uma penalidade de -1 em todas as jogadas na mesma área.</p><p class="p-dados">A magia estará ativa enquanto o clérigo estiver entoando o cântico e cessará caso receba dano, se locomova ou seja impedido de falar.</p>`,
        resistência: "-",
        fonte: "Old Dragon Aprimorado"
    },

    // Cativar
    {
        nome: "Cativar",
        escola: "Divina",
        nível: 2,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "especial (ver texto)",
        efeitos: `<p class="p-dados">O clérigo consegue atrair a atenção de uma plateia, mesmo que não compreendam perfeitamente a sua linguagem. Para resistir, é preciso uma jogada de proteção modificada pela Sabedoria. Os afetados permanecerão imóveis e indiferentes a tudo o que ocorrer à sua volta. Pessoas que estavam com atitudes hostis em relação ao clérigo antes da magia recebem um bônus de +4 na jogada de proteção para resistir à magia.</p><p class="p-dados">O efeito durará enquanto o clérigo estiver falando com a plateia (máximo de 1 hora) ou até serem atacados.</p>`,
        resistência: "Jogada de proteção: JP+SAB nega",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Cativar animais",
        escola: "Divina",
        nível: 1,
        alcance: "raio de 3 metros + 1 metro/nível ",
        duração: " permanente",
        efeitos: `<p class="p-dados"> Com esta magia é possível acalmar e conquistar a confiança de animais selvagens e criaturas não inteligentes.</p><p class="p-dados">Os animais podem fazer uma jogada de proteção para resistir e mesmo assim apenas serão cativados caso a intenção do clérigo seja realmente sincera. Caso o clérigo esteja com segundas intenções (como enganar, comer, caçar, aprisionar e etc.), os animais perceberão e sequer precisarão fazer a jogada de proteção.</p><p class="p-dados">Animais que forem cativados seguirão o clérigo, que pode ainda lhes treinar e ensinar pequenos truques.</p>`,
        resistência: "JP+SAB nega",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "",
        escola: "",
        nível: 1,
        alcance: "",
        duração: "",
        efeitos: `<p class="p-dados"></p>`,
        resistência: "",
        fonte: "Old Dragon Aprimorado"
    },

  ];
