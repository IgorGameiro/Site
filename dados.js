let dados = [{
    titulo: "Mônaco",
    descricao: "Um dos grandes clássicos da Fórmula 1. As ruas estreitas e sinuosas do Principado de Mônaco proporcionamuma corrida emocionante e cheia de imprevisibilidades. É um dos circuitos mais difíceis de pilotar eultrapassar.",
    link: "https://pt.wikipedia.org/wiki/Circuito_de_M%C3%B4naco#:~:text=O%20Circuito%20de%20M%C3%B4naco%20(em,de%20M%C3%B4naco%20de%20F%C3%B3rmula%201."
}, {
    titulo: "Silverstone",
    descricao: "O berço da Fórmula 1! A pista de Silverstone, na Inglaterra, foi palco doprimeiro Grande Prêmio da história da categoria.Com uma combinação de curvas rápidas e lentas, além de longas retas, Silverstone oferece um desafio único para pilotos e equipes.A atmosfera histórica e a paixão dos fãs britânicos tornam a corrida em Silverstone um evento imperdível.",
    link: "https://pt.wikipedia.org/wiki/Circuito_de_Silverstone"
}, {
    titulo: "Spa-Francorchamps",
    descricao: "Uma das pistas mais desafiadoras e emocionantes do calendário.Spa-Francorchamps, na Bélgica, é famosa por sua longa extensão e pela lendária curva Eau Rouge. Acombinação de subidas, descidas e curvas de alta velocidade exige o máximo dos pilotos e dasmáquinas. A beleza natural da região e a atmosfera vibrante dos fãs tornam a corrida emSpa-Francorchamps uma experiência única.",
    link: "https://pt.wikipedia.org/wiki/Circuito_de_Spa-Francorchamps"
}, {
    titulo: "Sakhir",
    descricao: "A pista de Sakhir, oficialmente chamada de Circuito Internacional do Bahrein, é uma das sedes do calendário da Fórmula 1 desde 2004. Localizada no deserto de Sakhir, no Bahrein, ela é conhecida por seu clima quente e seco, o que muitas vezes torna a corrida desafiadora para pilotos e equipes. A pista tem 5.412 km de extensão e conta com 15 curvas, mesclando trechos rápidos e retas longas, onde é possível ultrapassar.",
    link: "https://pt.wikipedia.org/wiki/Circuito_Internacional_do_Bar%C3%A9m"
}, {
    titulo: "Jeddah",
    descricao: "A pista de Jeddah, conhecida como o Circuito de Jeddah Corniche, é um dos mais novos e rápidos circuitos da Fórmula 1, estreando no calendário em 2021. Localizada nas margens do Mar Vermelho, na cidade de Jeddah, na Arábia Saudita, o traçado é urbano e noturno, proporcionando um visual impressionante com as luzes da cidade ao fundo.",
    link: "https://pt.wikipedia.org/wiki/Circuito_da_Corniche_de_Gid%C3%A1#:~:text=2021-,Pista,Francorchamps%2C%20que%20tem%207%2C004%20km."
}, {
    titulo: "Melbourne",
    descricao: "O Circuito de Melbourne, também conhecido como Circuito de Albert Park, é o palco do Grande Prêmio da Austrália de Fórmula 1 e uma das pistas mais emblemáticas do calendário. Localizado dentro de um parque em torno do lago Albert Park, perto do centro de Melbourne, o traçado tem um comprimento de 5.278 km e conta com 14 curvas.",
    link: "https://pt.wikipedia.org/wiki/Circuito_de_Albert_Park#:~:text=O%20Circuito%20de%20Albert%20Park,F%C3%B3rmula%201%20anualmente%20desde%201996."
}, {
    titulo: "Suzuka",
    descricao: "O Circuito de Suzuka, no Japão, é um dos mais icônicos e desafiadores da Fórmula 1. Inaugurado em 1962 como uma pista de testes da Honda, é conhecido por seu formato único, com uma seção que passa por cima de outra. Com 5.807 km de extensão e 18 curvas, Suzuka é um dos poucos circuitos no mundo com esse tipo de cruzamento.",
    link: "https://pt.wikipedia.org/wiki/Circuito_de_Suzuka"
}, {
    titulo: "Xangai",
    descricao: "O Circuito Internacional de Xangai, na China, é um dos mais modernos e sofisticados do calendário da Fórmula 1. Inaugurado em 2004, o traçado tem 5.451 km de extensão e 16 curvas, combinando longas retas e trechos técnicos, o que o torna um desafio tanto para a velocidade máxima quanto para o equilíbrio do carro nas curvas.",
    link: "https://pt.wikipedia.org/wiki/Grande_Pr%C3%AAmio_da_China"
}, {
    titulo: "Miami",
    descricao: "O Circuito de Miami, estreante no calendário da Fórmula 1 em 2022, é uma pista urbana localizada ao redor do Hard Rock Stadium, em Miami Gardens, Flórida. Com 5.412 km de extensão e 19 curvas, o circuito é um dos mais novos e projetados para proporcionar corridas emocionantes em meio ao cenário vibrante da cidade.",
    link: "https://pt.wikipedia.org/wiki/Aut%C3%B3dromo_Internacional_de_Miami#:~:text=2024-,Hist%C3%B3ria,o%20projeto%20inicial%20fosse%20publicado."
}, {
    titulo: "Imola",
    descricao: "O Autódromo Enzo e Dino Ferrari, mais conhecido como Imola, é um circuito histórico da Fórmula 1, localizado na cidade de Imola, na Itália. Com 4.909 km de extensão e 19 curvas, a pista é famosa por seu traçado técnico e desafiador, com mudanças de elevação e curvas rápidas e sinuosas. Ao contrário da maioria dos circuitos, Imola é percorrida no sentido anti-horário.",
    link: "https://pt.wikipedia.org/wiki/Aut%C3%B3dromo_Enzo_e_Dino_Ferrari"
}, {
    titulo: "Montreal",
    descricao: "O Circuito Gilles Villeneuve, localizado em Montreal, Canadá, é um dos circuitos mais populares do calendário da Fórmula 1. Inaugurado em 1978 e nomeado em homenagem ao lendário piloto canadense Gilles Villeneuve, o traçado tem 4.361 km de extensão e 14 curvas. O circuito é semi-permanente, situado na Île Notre-Dame, uma ilha artificial no Rio São Lourenço, o que proporciona um , cenário único.",
    link: "https://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve"
}, {
    titulo: "Barcelona",
    descricao: "O Circuito da Catalunha, oficialmente conhecido como Circuito de Barcelona-Catalunha, é uma pista localizada em Montmelo, perto de Barcelona, na Espanha. Inaugurado em 1991, o circuito tem 4.657 km de extensão e 16 curvas.",
    link: "https://pt.wikipedia.org/wiki/Circuito_de_Barcelona-Catalunha"
}, {
    titulo: "Spielberg",
    descricao: "O Circuito de Spielberg, oficialmente conhecido como Red Bull Ring, é uma pista localizada em Spielberg, na Áustria. Com 4.318 km de extensão e 10 curvas, é uma das mais curtas e rápidas do calendário da Fórmula 1. O circuito tem um traçado bastante fluido, com longas retas e curvas de alta velocidade, o que favorece corridas dinâmicas e ultrapassagens.",
    link: "https://pt.wikipedia.org/wiki/Red_Bull_Ring"
}, {
    titulo: "Budapeste",
    descricao: "O Circuito de Budapeste, oficialmente conhecido como Hungaroring, é uma pista de Fórmula 1 localizada em Mogyoród, perto de Budapeste, na Hungria. Inaugurado em 1986, o circuito tem 4.381 km de extensão e 14 curvas. O traçado é caracterizado por ser um dos mais técnicos e sinuosos do calendário, com muitas curvas de baixa e média velocidade e poucas oportunidades de ultrapassagem. ",
    link: "https://pt.wikipedia.org/wiki/Hungaroring"
}, {
    titulo: "Zandvoort",
    descricao: "O Circuito de Zandvoort, oficialmente conhecido como Circuito de Zandvoort, é uma pista localizada em Zandvoort, na Holanda. Inaugurado em 1948, o circuito foi modernizado e redesenhado várias vezes ao longo dos anos, com uma grande renovação concluída em 2020. A pista tem 4.259 km de extensão e 14 curvas.O traçado é conhecido por sua natureza rápida e desafiadora, com várias curvas de alta velocidade e mudanças de elevação que tornam a pilotagem bastante técnica. ",
    link: "https://pt.wikipedia.org/wiki/Circuito_de_Zandvoort"
}, {
    titulo: "Monza",
    descricao: "O Circuito de Monza, conhecido como Autódromo Nazionale Monza, é uma das pistas mais icônicas e tradicionais do calendário da Fórmula 1. Localizado perto de Milão, na Itália, Monza foi inaugurado em 1922 e tem uma extensão de 5.793 km, com 11 curvas.O circuito é famoso por suas longas retas e altas velocidades,",
    link: "https://pt.wikipedia.org/wiki/Aut%C3%B3dromo_Nacional_de_Monza"
}, {
    titulo: "Baku",
    descricao: "O Circuito de Baku, oficialmente conhecido como Circuito de Baku City, é uma pista urbana localizada em Baku, a capital do Azerbaijão. Estreado no calendário da Fórmula 1 em 2016, o circuito tem 6.003 km de extensão e é um dos mais longos do calendário, com 20 curvas. O traçado é conhecido por sua combinação única de características: longas retas e seções sinuosas, além de uma área de pista que passa ao longo da linha costeira e pelo centro histórico da cidade. ",
    link: "https://pt.wikipedia.org/wiki/Circuito_Urbano_de_Bacu"
}, {
    titulo: "Singapura",
    descricao: "O Circuito de Cingapura, conhecido como Circuito de Cingapura, é uma pista de Fórmula 1 urbana localizada no centro de Cingapura. Inaugurado em 2008, é o primeiro circuito de rua noturno da Fórmula 1, com iluminação artificial que permite que as corridas ocorram à noite. O circuito tem 5.063 km de extensão e 23 curvas. O traçado é conhecido por seu layout técnico e desafiador, com muitas curvas de baixa velocidade e seções estreitas, o que torna as ultrapassagens difíceis e a pilotagem extremamente precisa.  ",
    link: "https://pt.wikipedia.org/wiki/Circuito_Urbano_de_Marina_Bay"
}, {
    titulo: "Austin",
    descricao: "O Circuito das Américas, localizado em Austin, Texas, é um dos mais modernos e respeitados circuitos de Fórmula 1. Inaugurado em 2012, tem uma extensão de 5.513 km e conta com 20 curvas. O traçado é projetado para combinar uma variedade de características que desafiam os pilotos, incluindo uma longa reta, uma seção sinuosa semelhante ao circuito de Silverstone e curvas de alta velocidade inspiradas em outros circuitos icônicos.   ",
    link: "https://pt.wikipedia.org/wiki/Circuito_das_Am%C3%A9ricas"
}, {
    titulo: "São Paulo",
    descricao: "O Autódromo de Interlagos, oficialmente conhecido como Autódromo José Carlos Pace, é uma das pistas mais tradicionais e conhecidas da Fórmula 1. Localizado em São Paulo, Brasil, o circuito foi inaugurado em 1940 e tem uma extensão de 4.309 km com 15 curvas. O traçado de Interlagos é famoso por seu layout desafiador, que inclui uma combinação de curvas rápidas e lentas, bem como mudanças de elevação que exigem habilidades técnicas dos pilotos. ",
    link: "https://pt.wikipedia.org/wiki/Aut%C3%B3dromo_de_Interlagos"
},  {
    titulo: "Las Vegas",
    descricao: "O Circuito de Las Vegas, oficialmente conhecido como Las Vegas Grand Prix, é um dos circuitos urbanos mais recentes do calendário da Fórmula 1, estreando em 2023. Localizado ao longo da famosa Las Vegas Strip, a pista oferece um cenário deslumbrante com os icônicos hotéis e cassinos de fundo. Com uma extensão de 6.120 km e 17 curvas, o traçado é projetado para maximizar a emoção das corridas em um ambiente urbano vibrante. ",
    link: "https://pt.wikipedia.org/wiki/Circuito_Urbano_de_Las_Vegas"
},  {
    titulo: "Lusail",
    descricao: "O Circuito de Lusail, oficialmente conhecido como Circuito Internacional de Lusail, está localizado em Lusail, nos arredores de Doha, Qatar. Inaugurado em 2004, o circuito tem uma extensão de 5.380 km e conta com 16 curvas. O traçado é caracterizado por suas longas retas e curvas desafiadoras, incluindo uma combinação de seções rápidas e técnicas que exigem habilidades diversas dos pilotos. ",
    link: "https://pt.wikipedia.org/wiki/Circuito_Internacional_de_Lusail"
}, {
    titulo: "Yas Marina",
    descricao: "O Circuito Yas Marina, localizado na Ilha de Yas, em Abu Dhabi, Emirados Árabes Unidos, é uma das pistas mais modernas e luxuosas do calendário da Fórmula 1. Inaugurado em 2009, o circuito tem uma extensão de 5.281 km e conta com 16 curvas. O traçado é conhecido por suas características distintas, incluindo uma combinação de longas retas e curvas técnicas, e uma seção que passa por baixo do hotel Yas Viceroy, que é iluminado por LEDs à noite.  ",
    link: "https://pt.wikipedia.org/wiki/Circuito_de_Yas_Marina"
}];
