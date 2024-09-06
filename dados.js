let dados = [
    {
        nome: "Abrir/trancar",
        escola: "Arcana",
        nível: 1,
        alcance: "toque",
        duração: "permanente",
        efeitos: `<p class="p-dados">Esta magia pode ser utilizada para dois efeitos distintos: abrir o acesso a qualquer instrumento ou objeto que esteja fechado, trancado ou emperrado; e fechar um acesso pela duração da magia (ou até ser dissipada).</p> <p class="p-dados">Criaturas com jogada_protecao a magia podem destrancar um objeto fechado por esta magia.</p>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Adivinhação",
        escola: "Divina",
        nível: 4,
        alcance: "especial (ver texto)",
        duração: "especial (ver texto)",
        efeitos: `<p class="p-dados">Pedindo ajuda para sua divindade, o clérigo recebe sinais que lhe mostram um caminho, uma verdade, um evento ou uma atividade em específico. A resposta desejada lhe será dada de forma indireta, como um sinal, frase, um enigma, etc.</p>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Ajuda",
        escola: "Divina",
        nível: 2,
        alcance: "toque",
        duração: "1d4 turnos +1 turno/nível",
        efeitos: `<p class="p-dados">Esta magia concede ao alvo 1d8 pontos de vida temporários. Esses pontos de vida podem superar o valor base de pontos de vida e serão os primeiros a serem perdidos em caso de ferimentos.</p>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Andar sobre as águas",
        escola: "Divina",
        nível: 4,
        alcance: "toque",
        duração: "1d4 turnos +1 turno/nível",
        efeitos: `<p class="p-dados">Com esta magia, o alvo tocado adquire a habilidade de andar sobre líquidos e solos instáveis como se estivesse em solo firme. Se memorizada como uma magia de 5º círculo, o clérigo poderá usar esta magia em até dois alvos tocados.</p>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Animar corda",
        escola: "Arcana",
        nível: 1,
        alcance: "250 metros + 3 metros/nível | Alvo: corda de até 15m de comprimento + 1,5m por nível",
        duração: "1 turno/nível",
        efeitos: `<p class="p-dados">O mago consegue animar uma corda ou um objeto semelhante a uma corda.</p>  <p class="p-dados">Os comandos possíveis são: enroscar, amarrar, enrolar e aprisionar, bem como as inversões (esticar, desamarrar, desenrolar e libertar). Lançar um comando corresponde a uma ação de movimento. A corda só pode envolver uma criatura que esteja a 50 centímetros de distância, devendo ser jogada sobre o alvo para que a magia seja lançada e surta efeitos.</p>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Animar objetos",
        escola: "Divina",
        nível: 6,
        alcance: "raio de 10m + 3m/nível",
        duração: "1d4 turnos + 1 turno/nível",
        efeitos: `<p class="p-dados">O clérigo consegue dar vida a objetos inanimados que acatarão qualquer ordem dada por ele. O objeto animado terá as mesmas estatísticas do clérigo.</p>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Apagar",
        escola: "Arcana",
        nível: 1,
        alcance: "toque",
        duração: "permanete",
        efeitos: `<p class="p-dados">Esta magia remove qualquer conteúdo escrito de qualquer superfície. O que estava escrito em cartas, documentos, pergaminhos, mapas e etc. é totalmente apagado.</p> <p class="p-dados">Caso a escrita seja parte de uma magia, use as mesmas regras de dissipar magias para determinar as chances de sucesso.</p>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Apodrecimento",
        escola: "Divina",
        nível: 1,
        alcance: "toque",
        duração: "permanente",
        efeitos: `<p class="p-dados">Esta magia apodrece comida e bebida, deteriorando-a e tornando-a imprópria para o consumo.</p>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Aprisionamento",
        escola: "Arcana",
        nível: 9,
        alcance: " raio de 10 metros + 3 metros/nível",
        duração: "especial (ver texto) ",
        efeitos: `<p class="p-dados">Esta poderosa magia tem como objetivo invocar uma criatura extraplanar e aprisioná-la no plano material até que ela aceite realizar uma tarefa para o mago. Uma vez que a tarefa é cumprida, a criatura é automaticamente enviada ao seu plano original.</p> <p class="p-dados">A criatura convocada tem que ter seu nome conhecido e, uma vez aprisionada no plano material, pode ou não concordar com a chantagem do mago, podendo inclusive atacá-lo.</p> <p>Se a criatura for bem-sucedida em uma jogada de proteção modificada pela Sabedoria, a magia não funcionará e a criatura permanecerá em seu plano original.</p> <p class="p-dados">A melhor forma de se proteger é construir em torno do portal um círculo de proteção com materiais místicos. Esse círculo custa 100 PO para cada dado de vida da criatura. Mesmo assim há sempre uma chance de 1% do círculo de proteção falhar para cada dado de vida da criatura aprisionada.</p>`,
        jogada_protecao: "JP+SAB nega",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Aprisionar alma",
        escola: "Arcana",
        nível: 8,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "permanente",
        efeitos: `<p class="p-dados">Esta magia cria uma gema de aprisionamento etéreo com um gatilho inscrito (a última palavra da execução da magia), que faz com que aquele que a segure e pronuncie a palavra inscrita tenha imediatamente a sua alma sugada para dentro da gema.</> <p class="p-dados"> O valor da gema deve ser proporcional ao poder da alma aprisionada, custando 1.000 PO para cada dado de vida da criatura. Almas aprisionadas não morrem e podem retornar para qualquer outro corpo recém-morto, caso a gema seja destruída.</>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Arma abençoada",
        escola: "Divina",
        nível: 1,
        alcance: "toque",
        duração: "1d4 turnos +1 turno/nível",
        efeitos: `<p class="p-dados">Esta magia permite ao clérigo abençoar qualquer arma natural de pedra ou de madeira não mágica, concedendolhe um bônus de +1 no ataque. A arma abençoada recebe ainda um bônus de +1d4 no dano causado.</p>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Arma encantada",
        escola: "Arcana",
        nível: 4,
        alcance: "toque",
        duração: "1d6 turnos +1 turno/nível",
        efeitos: `<p class="p-dados">Esta magia transforma uma arma mundana em uma arma temporariamente mágica, com bônus de +1 nas jogadas de ataque e +1 no dano. Esta magia é a magia básica para a criação de armas mágicas.</>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Armadilha de fogo",
        escola: "Arcana 4 e Divina",
        nível: 2,
        alcance: "toque",
        duração: "permanente",
        efeitos: `<p class="p-dados">O personagem cria uma armadilha engatilhada em qualquer objeto que possa ser aberto (como um baú, livro, porta, gaveta, etc.), que explode em chamas assim que for aberto.</> <p class="p-dados">A explosão causa a todos em um raio de 2m do objeto 1d4 pontos de dano + 1 ponto de dano por nível do personagem que a conjurou. Uma jogada de proteção modificada pela Destreza reduz o dano pela metade.</> <p class="p-dados">O objeto encantado com esta magia não é afetado pelos efeitos desta explosão.</>`,
        jogada_protecao: "JP+DES reduz o dano pela metade",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Aterrorizar",
        escola: "Arcana",
        nível: 2,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "1d6 turnos + 1 turno/nível",
        efeitos: `<p class="p-dados">Todas as criaturas com menos de 5 dados de vida e que estejam no raio de alcance da magia ficarão automaticamente aterrorizadas caso falhem em uma jogada de proteção modificada pela Sabedoria. Criaturas aterrorizadas sofrem com o medo, tremendo descontroladamente e recebendo uma penalidade de -2 em todas as suas jogadas, sofrendo ainda com uma chance de 5% por nível do mago de soltar quaisquer objetos que estejam segurando.</>`,
        jogada_protecao: "JP+SAB nega",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Barreira de lâminas",
        escola: "Divina",
        nível: 6,
        alcance: "raio de 10 metros + 3 metros/nível ",
        duração: "1d6 turnos+1 turno/nível",
        efeitos: `<p class="p-dados">Esta magia cria uma barreira de afiadas lâminas que envolvem o clérigo. Qualquer criatura que tentar invadir a área da barreira levará 8d6 pontos de dano, que podem ser reduzidos pela metade caso seja bem-sucedida em uma jogada de proteção modificada pela Destreza.</>`,
        jogada_protecao: "JP+DES reduz o dano pela metade",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Bastão em serpente",
        escola: "Divina",
        nível: 4,
        alcance: " raio de 10 m + 3 m/ nível",
        duração: "1d4 turnos + 1 turno/nível",
        efeitos: `<p class="p-dados">O clérigo pode transformar bastões não mágicos de madeira em serpentes, que atacarão ao seu comando. A quantidade convertida é de 1d4 bastões + 1 por nível do clérigo. Cada serpente possui 2 DVs e há uma chance de 5% por nível do clérigo de ser venenosa.</>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Baú secreto",
        escola: "Arcana",
        nível: 5,
        alcance: "especial (ver texto) | Alvo: baú",
        duração: "60 dias ou até ser dispensado",
        efeitos: `<p class="p-dados"> Com esta magia o mago consegue esconder um baú no plano etéreo por até 60 dias, podendo recuperá-lo à vontade. O baú pode conter 1m³ de espaço para cada nível do mago. Se uma criatura viva for colocada no baú, ela viverá normalmente, respirando, se alimentando, bebendo e envelhecendo.</> <p class="p-dados">Para recuperar o baú é preciso se concentrar por um turno inteiro, e ele aparecerá ao lado do mago.</> <p class="p-dados">Caso o baú permaneça no plano etéreo por mais de 60 dias, existe uma chance diária e cumulativa de 5% do baú se perder para sempre.</>`,
        jogada_protecao: "",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Bênção",
        escola: "Divina",
        nível: 2,
        alcance: "toque",
        duração: "1d4 turnos + 1 turno/nível",
        efeitos: `<p class="p-dados">A bênção é concedida pelo deus adorado pelo clérigo, concedendo ao alvo tocado um bônus de +1 nas jogadas de ataque e nas jogadas de proteção modificadas pela Sabedoria para cada 3 níveis de clérigo.</p>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Bola de Fogo",
        escola: "Arcana 3,",
        nível: 7,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "instantânea",
        efeitos: `<p class="p-dados"> Um projétil semelhante a uma pequena pérola de chamas é disparado do dedo do mago, para explodir em chamas no lugar alvo. O raio da explosão é de 6 metros e o dano é de 1d6 por nível do mago (máximo 10d6). A explosão se adapta ao volume disponível.</p><p class="p-dados">Um sucesso em uma jogada de proteção modificada pela Destreza reduz o dano desta magia pela metade. Se memorizada como uma magia de 7º círculo, a explosão da bola de fogo pode ser adiada por até 10 minutos.</p>`,
        jogada_protecao: "JP+DES reduz o dano pela metade",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Bom Fruto",
        escola: "Divina",
        nível: 2,
        alcance: "toque",
        duração: "especial (ver texto)",
        efeitos: `<p class="p-dados">Com esta magia, o clérigo é capaz de abençoar 2d4 frutos e torná-los mágicos. Aquele que comer destes frutos recuperará 1 ponto de vida perdido por nível do clérigo.</p><p class="p-dados">A cada 24 horas, apenas 8 pontos de vida podem ser recuperados com esta magia.</p>`,
        jogada_protecao: "-",
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
        jogada_protecao: "-",
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
        jogada_protecao: "Jogada de proteção: JP+SAB nega",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Cativar animais",
        escola: "Divina",
        nível: 1,
        alcance: "raio de 3 metros + 1 metro/nível ",
        duração: " permanente",
        efeitos: `<p class="p-dados"> Com esta magia é possível acalmar e conquistar a confiança de animais selvagens e criaturas não inteligentes.</p><p class="p-dados">Os animais podem fazer uma jogada de proteção para resistir e mesmo assim apenas serão cativados caso a intenção do clérigo seja realmente sincera. Caso o clérigo esteja com segundas intenções (como enganar, comer, caçar, aprisionar e etc.), os animais perceberão e sequer precisarão fazer a jogada de proteção.</p><p class="p-dados">Animais que forem cativados seguirão o clérigo, que pode ainda lhes treinar e ensinar pequenos truques.</p>`,
        jogada_protecao: "JP+SAB nega",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Causar ferimentos",
        escola: "Divina 1, 4, 5,",
        nível: 6,
        alcance: "toque",
        duração: "instantânia",
        efeitos: `<p class="p-dados">Causa 1d8 pontos de dano +1 ponto de dano por nível (até um máximo de +4)</p> <p class="p-dados">Esta magia pode ser memorizada como uma magia de 4º círculo para causar 2d8 pontos de dano +1 de dano por nível (até um máximo de +8), ou como uma magia de 5º círculo, para causar 3d8 pontos de dano +1 de dano por nível (até um máximo de +12), ou como uma magia de 6º círculo, para matar o alvo. Uma jogada de proteção modificada pela Constituição nega esses efeitos.</p>`,
        jogada_protecao: "JP+CON nega",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Chuva de Meteoros",
        escola: "Arcana",
        nível: 9,
        alcance: "raio de 100 metros + 10 metros/nível",
        duração: "instantânea",
        efeitos: "<p class='p-dados'>Pequenos meteoros saem das mãos do mago e explodem em bolas de fogo onde ele quiser. O mago pode jogar 4 bolas de fogo normais que causam 10d6 pontos de dano ou 8 bolas de fogo de 3 metros de diâmetro que causam 5d6 pontos de dano. Uma jogada de proteção modificada pela Destreza reduz o dano pela metade.</p>",
        jogada_protecao: "JP+DES reduz o dano pela metade",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Círculo de Fé",
        escola: "Divina",
        nível: 1,
        alcance: "toque",
        duração: "especial (ver texto)",
        efeitos: "<p class='p-dados'>Com esta magia, um grupo de clérigos consegue ampliar os efeitos das magias lançadas pelo clérigo mais poderoso do grupo, que deve ficar ao centro enquanto os outros fazem um círculo com as mãos e entoam cânticos sagrados ao seu redor.</p><p class='p-dados'>O clérigo no centro do grupo lança o círculo de fé e, para cada clérigo que estiver compondo o círculo, será considerado como se fosse um nível mais alto, até um máximo de +5. O ganho de níveis também pode ser utilizado para afastar mortos-vivos, e os efeitos desse círculo durarão até o clérigo principal descansar.</p>",
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Círculo Tentacular",
        escola: "Arcana",
        nível: 4,
        alcance: "30 metros + 3 metros/nível",
        duração: "1 turno/nível | Ataque: ataque de toque",
        efeitos: "<p class='p-dados'>Essa magia conjura um círculo de tentáculos viscosos, cada um com 3 metros de comprimento. Esses tentáculos podem tentar agarrar criaturas que estejam na área, aprisionando-as e esmagando-as</p><p class='p-dados'>Para tentar agarrar uma criatura, o tentáculo fará um ataque de toque com bônus de ataque equivalente a 10+nível do mago. Tendo sucesso, a criatura agarrada fará uma jogada oposta de Força contra o tentáculo (FOR 19) para tentar escapar. Caso não consiga, sofrerá 1d6+4 pontos de dano por turno, até que a magia acabe.</p><p class='p-dados'>Qualquer criatura que entre na área durante o tempo de efeito da magia será imediatamente atacada. Criaturas que eventualmente consigam se livrar dos tentáculos terão a sua movimentação reduzida pela metade. Os tentáculos são imunes a qualquer tipo de dano.</p>",
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Clarividência",
        escola: "Arcana",
        nível: 3,
        alcance: "especial (ver texto)",
        duração: "1d6 turnos + 1 turno/nível",
        efeitos: `<p class="p-dados">Esta magia permite ao mago se conectar para conseguir visualizar o local como se estivesse lá fisicamente.</p>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Clone",
        escola: "Arcana",
        nível: 8,
        alcance: "toque",
        duração: "especial (ver texto)",
        efeitos: `<p class='p-dados'>Através desta magia, o mago cria um clone perfeito do alvo (incluindo pensamentos e conhecimento) ao retirarlhe um pedaço de sua carne. O clone cresce, e estará pronto em até 1d4 dias. Se o clone ficar pronto enquanto a criatura original ainda estiver viva, ele tentará de todas as maneiras matar o original para substituí-lo.</p><p class="p-dados">Se o clone ou o original não conseguir destruir o seu alter ego, ambos ficarão completamente insanos em 1d4 meses.</p>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Coluna de Chamas",
        escola: "Divina",
        nível: 5,
        alcance: "raio de 2 metros e até 10 metros de altura",
        duração: "instantânea",
        efeitos: "<p class='p-dados'>Esta magia faz com que uma coluna de 2 metros de raio e até 10 metros de altura saia do chão e queime tudo o que estiver dentro dessa área, causando 6d8 de dano. Uma jogada de proteção modificada pela Destreza reduz o dano pela metade.</p>",
        jogada_de_protecao: "JP+DES reduz o dano pela metade",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Comando",
        escola: "Divina",
        nível: 1,
        alcance: "raio de 10 metros + 3 metros/nivel",
        duração: "1d4 turnos + 1 turno/nivel",
        efeitos: "<p class='p-dados'>Esta magia permite ao clérigo dar uma ordem simples e direta a um alvo que falhe em uma jogada de proteção modificada pela Sabedoria. A vítima deve entender a linguagem do clérigo e obedecerá à ordem cegamente.</p><p class='p-dados'>As ordens mais comuns costumam ser pare, volte, fuja, corra, caia, renda-se, etc.</p>",
        jogada_de_protecao: "JP+SAB nega",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Comunhão",
        escola: "Divina",
        nível: 5,
        alcance: "pessoal",
        duração: "especial (ver texto)",
        efeitos: "<p class='p-dados'>Esta magia faz com que poderes superiores respondam a até 3 perguntas mentalmente ao clérigo. As respostas devem ser sempre dadas com um 'sim', 'não' ou 'talvez'. Esses poderes superiores apenas responderão a uma tentativa de comunhão a cada 2 semanas.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Concha Antimagia",
        escola: "Arcana",
        nível: 6,
        alcance: "pessoal",
        duração: "1d4 turnos + 1 turno/nivel",
        efeitos: "<p class='p-dados'>Uma concha de força mágica envolve o mago, impedindo que qualquer efeito mágico entre ou saia da concha.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Concha de Proteção",
        escola: "Divina",
        nível: 5,
        alcance: "pessoal",
        duração: "Id4 turnos + I turno/nivel",
        efeitos: "<p class='p-dados'>Uma concha de força mágica envolve o clérigo impedindo que qualquer efeito físico entre ou saia da concha.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Cone de gelo",
        escola: "Arcana",
        nível: 5,
        alcance: "especial (ver texto)",
        duração: "instantânea",
        efeitos: `<p class="p-dados">Esta magia cria um cone de gelo com 1,5 metros de comprimento e 30 centímetros de diâmetro por nível do mago. O cone sai de suas mãos e causa 1d4 de dano +1 de dano por nível. Uma criatura atingida por esta magia deve fazer uma jogada de proteção modificada pela Destreza ou ficará presa em uma fina camada de gelo por 1d6 turnos. Se o gelo for danificado, ela se liberta automaticamente.</p>`,
        jogada_protecao: "JP+DES reduz o dano pela metade",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Confusão",
        escola: "Arcana",
        nível: 4,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "1d4 turnos + 1 turno/nível",
        efeitos: `<p class="p-dados">Esta magia causa confusão mental em alvos inteligentes, que passarão a agir de forma aleatória. Uma jogada de 2d6 determinará o efeito: 2-5 atacarão o e seus aliados; 6-8 ficarão inativos e confusos; 9-12 atacarão uns aos outros. Confusão afeta no máximo 2d6 criaturas + 1 criatura adicional a cada 4 níveis do mago.</p> <p class="p-dados"> Essas criaturas podem realizar uma jogada de proteção modificada pela Sabedoria para não serem afetadas pela magia.</p>`,
        jogada_protecao: " JP+SAB nega",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Conjurar Animais",
        escola: "Divina",
        nível: 6,
        alcance: "raio de 10 metros + 3 turno/nível",
        duração: "1d6 turnos + 1 turno/nível",
        efeitos: "<p class='p-dados'>O clérigo convoca animais das redondezas. Qual criatura será conjurada e a quantidade de criaturas será determinada com uma jogada de 1d6, de acordo com o ambiente onde o clérigo se estiver e do tamanho do animal: 1 criatura do tamanho de um humano ou maior, 3 do tamanho de um felino grande como um leão ou tigre ou 6 menores como um lobo ou raposa.</p><p class='p-dados'>Os animais obedecem aos comandos do clérigo até serem atacados, maltratados ou dispensados.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Consagrar",
        escola: "Divina",
        nível: 5,
        alcance: "toque",
        área: "raio de 12 metros ao redor do local tocado",
        duração: "permanente",
        efeitos: "<p class='p-dados'>Consagrar um local faz com que este se torne sagrado. Os efeitos de um local sagrado são:</p><p class='p-dados'>- O local é protegido contra criaturas caóticas.</p><p class='p-dados'>- todos os bônus de Carisma para afastar mortos-vivos recebem adicional de +4, e todos os bônus de Carisma para controlar mortos-vivos recebem penalidade de -4.</p><p class='p-dados'>- qualquer corpo enterrado no local não se levantará como morto-vivo.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado" 
    },
    {
        nome: "Constrição",
        escola: "Divina",
        nível: 1,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "1d6 turnos + 1 turno/nível",
        efeitos: "<p class='p-dados'>O clérigo consegue animar todas as plantas dentro de um raio de até 10 metros para que agarrem e apertem todos os seres vivos que passarem por ali. Todos que tentem se locomover terão sua movimentação reduzida em 1 metro para cada 6 turnos que passarem na área.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado" 
    },
    {
        nome: "Controlar o Clima",
        escola: "Arcana 6 e Divina",
        nível: 7,
        alcance: "especial (ver texto)",
        duração: "1 hora + 10 minutos/nível",
        efeitos: "<p class='p-dados'>Com esta magia, o personagem é capaz de modificar o clima de acordo com sua vontade. É capaz de extinguir ventos, chuvas, nevascas, tornar o céu limpo, dissolver um tornado ou até mesmo criar todas essas intempéries.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado" 
    },
    {
        nome: "Convocar Insetos",
        escola: "Divina",
        nível: 3,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "1d6 turnos + 1 turno/nível",
        efeitos: "<p class='p-dados'>Esta magia convoca uma nuvem de insetos voadores (vespas, abelhas e moscas) ou um tapete de insetos rastejantes (formigas, besouros, etc.) que atacará um alvo indicado pelo clérigo. O alvo pode tentar se desvencilhar dos insetos, e assim reduzir o tempo da duração pela metade e levar apenas 1d3 pontos de dano por turno. Caso deseje ignorar a nuvem, o alvo recebe 1d4 pontos de dano por turno e recebe -1 nas suas jogadas de ataque e de dano.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado" 
    },
    {
        nome: "Convocar Relâmpagos",
        escola: "Divina",
        nível: 3,
        alcance: "raio de 100 metros + 10 metros/nível",
        duração: "1d4 turnos + 1 turno/nível",
        efeitos: "<p class='p-dados'>Esta magia convoca relâmpagos a partir de um céu carregado, com nuvens negras e prestes a despejar chuva, os direcionando a um ponto específico. Para convocar um relâmpago, o clérigo deve se concentrar por um turno inteiro e, no início do próximo turno, o relâmpago cairá em qualquer ponto escolhido por ele, desde que dentro do alcance da magia. O relâmpago causa 2d8 pontos de dano + 1d8 pontos de dano adicional por nível do clérigo.</p><p class='p-dados'>Uma jogada de proteção modificada pela Destreza reduz esse dano pela metade. O clérigo ainda pode convocar 1 relâmpago a cada 2 turnos (1 para convocar e outra para direcionar), enquanto estiver concentrado e não realizar nenhuma outra ação.</p>",
        jogada_de_protecao: "JP+DES reduz o dano pela metade",
        fonte: "Old Dragon Aprimorado" 
    },
    {
        nome: "Criar Água",
        escola: "Divina",
        nível: 1,
        alcance: "raio de 3 metros + 1 metro/nível",
        duração: "permanente",
        efeitos: "<p class='p-dados'>Esta magia cria uma pequena quantidade de água potável para até 2 homens por nível do clérigo (até o nível 10). Do nível 11 em diante, o clérigo consegue criar água suficiente para 4 homens por nível.</p>", jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado" 
    },
    {
        nome: "Criar Alimentos",
        escola: "Divina",
        nível: 3,
        alcance: "raio de 3 metros + 1 metro/nível",
        duração: "permanente",
        efeitos: "<p class='p-dados'>Esta magia cria uma pequena quantidade de comida para até 2 homens por nível do clérigo (até o nível 10). Do nível 11 em diante, o clérigo consegue criar alimentos suficiente para 4 homens por nível.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado" 
    },
    {
        nome: "Criar Chamas",
        escola: "Divina",
        nível: 2,
        alcance: "pessoal",
        duração: "1d6 turnos + 1 turno/nível | Ataque: Toque à distancia",
        efeitos: "<p class='p-dados'>Esta magia cria nas mãos do clérigo uma chama do tamanho de uma tocha, que, apesar de não ferir o clérigo, causa dano normal de fogo, além de queimar materiais inflamáveis.</p><p class='p-dados'>O clérigo pode arremessar as chamas que foram criadas. Para tal, deve realizar uma jogada de ataque de toque à distância com +1 para cada 2 níveis na classe.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado" 
    },
    {
        nome: "Criar Passagens",
        escola: "Arcana",
        nível: 5,
        alcance: "raio de 3 metros + 1 metro/nível",
        duração: "30 minutos",
        efeitos: "<p class='p-dados'>Esta magia cria uma passagem ilusória (porém efetiva), como se fosse um buraco através de rocha sólida (paredes, muros, portas) com cerca de 2 metros de altura e 3 metros de largura.</p><p class='p-dados'>O mago pode criar passagens em barreiras de até 2 metros de espessura a cada 5 níveis. Automaticamente todos os danos da magia, o passagem se fechará, matando após o encerramento da duração todos que se encontrarem no seu interior.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado" 
    },
    {
        nome: "Criar Fogo",
        escola: "Divina",
        nível: 4,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "1d4 turnos + 1 turno/nível",
        efeitos: "<p class='p-dados'>Esta magia cria uma fonte de fogo comum do tamanho de uma fogueira. Após a duração da magia, todo o fogo se extingue, mas os materiais queimados não retornam ao normal.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado" 
    },
    {
        nome: "Curar doenças",
        escola: "Divina",
        nível: 3,
        alcance: "toque",
        duração: "instantânea ",
        efeitos: `<p class="p-dados">Esta magia cura qualquer doença que acometa ao alvo, incluindo as que foram causadas por magia.</p>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Curar ferimentos",
        escola: "Divina 1, 4, 5,",
        nível: 6,
        alcance: "toque",
        duração: "instantânea",
        efeitos: `<p class="p-dados">Cura 1d8 pontos de vida +1 PV por nível (até um máximo de +4). Esta magia pode ser memorizada como uma magia de 4º círculo para curar 2d8 pontos de vida +1 PV por nível (até um máximo de +8), ou como uma magia de 5º círculo, para curar 3d8 pontos de vida +1 PV por nível (até um máximo de +12), ou como uma magia de 6º círculo, para curar qualquer ferimento, doença ou condição que debilite a saúde do alvo, como cegueira, surdez e efeitos mentais, restaurando ainda membros perdidos e recuperando todos os pontos de vida ao seu nível máximo.</p>`,
        jogada_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Definhar",
        escola: "Divina",
        nível: 7,
        alcance: "toque",
        duração: "instantânea",
        efeitos: `<p class="p-dados">Esta magia concede ao clérigo a habilidade de drenar níveis e pontos de atributos de um personagem. Apenas 1 nível ou 1 ponto de atributo pode ser drenado por vez. Uma jogada de proteção modificada pela Constituição nega este efeito.</p>`,
        jogada_protecao: "JP+CON nega",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Desejo",
        escola: "Arcana 7,",
        nível: 9,
        alcance: "especial (ver texto)",
        duração: "especial (ver texto) | RM: não",
        efeitos: "<p class='p-dados'>Tida como a magia mais poderosa já criada, o Desejo pode ser fonte de poderes e perigos inimagináveis, já que realiza desejos ilimitados do mago, porém pode punir com extrema rigidez desejos ambíguos e malfeitos. Se preparada como uma magia de 9º círculo, o mago pode realizar Desejos que emulem magias de até 8º círculo sem grandes problemas. Mas desejos que almejem efeitos grandiosos e complexos podem ser arriscados, pois a forma como o desejo é realizado é de extrema importância, uma vez que a intenção original do mago pode ser distorcida, realizando um efeito literalmente correto, porém indesejado. Se preparada como uma magia de 7º círculo, o mago pode realizar Desejos que emulem magias de até 5º círculo, e apenas por períodos limitados de tempo.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Desintegrar",
        escola: "Arcana",
        nível: 6,
        alcance: "raio de 3 metros + 1 metro/nível",
        duração: "instantânea",
        efeitos: "<p class='p-dados'>Esta magia faz matéria (mundana ou mágica) desaparecer por completo, virando pó. O alvo pode fazer uma jogada de proteção modificada pela Constituição para evitar a desintegração, sofrendo 8d8 pontos de dano.</p>",
        jogada_de_protecao: "JP+CON evita e modifica o dano",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Deslocamento",
        escola: "Arcana",
        nível: 3,
        alcance: "criatura tocada",
        duração: "1 turno/nível",
        efeitos: "<p class='p-dados'>Esta magia faz com que o alvo pareça estar a 50 centímetros de distância do local em que realmente está. Todos os ataques bem-sucedidos contra o alvo possuem 50% de chance de erro. A magia Visão da verdade revela a real localização do alvo.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Despedaçar",
        escola: "Arcana",
        nível: 2,
        alcance: "especial (ver texto)",
        duração: "instantânea",
        efeitos: "<p class='p-dados'>Esta magia cria um ruído extremamente agudo, que quebra materiais até 1,5 m de distância do ponto em que a magia foi lançada. Vidros, cristais, porcelanas, cerâmicas e materiais semelhantes podem ser quebrados com esta magia.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Detectar alinhamento",
        escola: "Divina",
        nível: 1,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "1d6 turnos + 1 turno/nível",
        efeitos: "<p class='p-dados'>Esta magia possibilita ao personagem que se concentrar por um turno inteiro para detectar a aura de uma pessoa ou objeto, determinando assim o seu alinhamento. Alinhamentos magicamente ocultos se revelarão sempre como neutros.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Detectar armadilhas",
        escola: "Divina",
        nível: 2,
        alcance: "raio de 3 metros + 1 metro/nível",
        duração: "1d6 turnos + 1 turno/nível",
        efeitos: "<p class='p-dados'>O clérigo consegue identificar magicamente qualquer armadilha, como um ladrão faria. Apenas armadilhas não mágicas são detectadas desta forma.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Detectar invisibilidade",
        escola: "Arcana",
        nível: 2,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "1d6 turnos + 1 turno/nível",
        efeitos: "<p class='p-dados'>O mago consegue detectar objetos e criaturas invisíveis, como se fossem normalmente visíveis.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Detectar Magia",
        escola: "Divina 1 e Arcana",
        nível: 1,
        alcance: "raio de 10 metros + 3 metros/nível",
        duração: "1d6 turnos + 1 turno/nível",
        efeitos: "<p class='p-dados'>O personagem pode perceber em lugares, pessoas ou coisas, a presença de uma magia. Os alvos detectados emitem um leve brilho azulado, que não é perceptível aos olhos casuais. Por exemplo: caso um alvo seja do outro plano, emite um brilho crático. Outras auras mágicas, assim como a presença de itens mágicos, podem ser descobertos desta forma, assim como se descobrir um feitiço secretamente colocado em uma pessoa.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Detectar Mentiras",
        escola: "Divina",
        nível: 4,
        alcance: "pessoal",
        duração: "1d4 turnos + 1 turno/nível",
        efeitos: "<p class='p-dados'>Com esta magia, o clérigo é capaz de perceber se uma pessoa está mentindo, mas não revela a verdade nem se o alvo está se evadindo nas respostas. Caso o alvo responda algo falsamente, mas acreditando no que diz, a mentira não é detectada.</p>",
        jogada_de_protecao: "-",
        fonte: "Old Dragon Aprimorado"
    },
    {
        nome: "Detectar Mortos-Vivos",
        escola: "Divina 1 e Arcana",
        nível: 1,
        alcance: "50 metros | Area: Cone",
        duração: "até 1 minuto/nível",
        efeitos: `<p class="p-dados">Com esta magia o personagem consegue detectar a aura que envolve mortos-vivos. O alcance desta magia consegue ultrapassar diversas barreiras, mas 1 metro de pedra, 5 centímetros de metal ou uma fina folha de chumbo bloqueiam seus efeitos. A quantidade de informação revelada depende do tempo despendido com a análise.</p> <p>1º turno: detecta a presença ou ausência de mortos-vivos.</p><p>2º turno: determina a quantidade de auras de mortos-vivos, além da força da aura mais poderosa. Se o personagem que está usando a magia for ordenado, ao detectar uma aura insuportável de um morto-vivo com o dobro de DV que possui, ficará tonto por 1 turno e a magia perderá o efeito.</p><p>O personagem tonto sofrerá penalidade de -1 em todas as suas jogadas e na CA, e esse efeito pode ser negado por uma JP+CON.</p><p>3º turno: determina a força e localização da aura. Se uma aura estiver fora da linha de visão, o personagem detecta a sua direção, mas não sua localização exata.</p><p>Força da aura: a força da aura é determinada pela quantidade de DV do morto-vivo, seguindo a tabela a seguir.</p><p><b>T8-3: Força da Aura</b></p>
        <table class="table_dados">
            <tr>
                <th>DV</th>
                <th>Força da aura</th>
                <th>Duração do resquício</th>
            </tr>
            <tr>
                <td>10 ou menos</td>
                <td>Fraca</td>
                <td>1d6 turnos</td>
            </tr>
            <tr>
                <td>2-4</td>
                <td>Moderada</td>
                <td>1d6 minutos</td>
            </tr>
            <tr>
                <td>5-10</td>
                <td>Forte</td>
                <td>1d6 x 10 minutos</td>
            </tr>
            <tr>
                <td>11 ou mais</td>
                <td>Insuportável</td>
                <td>1d6 dias</td>
            </tr>
        </table>
    <p>Resquício da aura: quando um morto-vivo é destruído, a sua aura deixa um resquício impregnando o local, como uma lembrança do caos que um dia esteve ali. Se o personagem lança Detectar mortos-vivos naquele local, a magia indica uma aura sutil, quase imperceptível. O tempo que o resquício da aura permanecerá impregnando o local é determinado pela quantidade de DV do morto-vivo. Personagens não conseguem descansar em uma área impregnada com esta aura.</p>`,
    jogada_de_protecao: "JP+CON nega o efeito de tontura",
    fonte: "Old Dragon Aprimorado"
    },

  ];
