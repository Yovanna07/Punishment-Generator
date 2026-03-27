//-- GENERADOR TORTURA ESTANDAR -->
const getRandomItem = (list) => {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
};


// === Generador de Tortura Estándar ===

const STANDARD_TORTURES = [
    'escuchar regueton',
    'explicar memes a tus padres',
    'darle la razón',
    'darle todos tus ahorros',
    'dar descargas electricas',
];

const STANDARD_PERSONS = [
    'tu suegra',
    'un payaso siniestro',
    'tu ex',
    'Tu vecino(a)',
    'un politico corrupto (por defecto de derechas)',
];

const STANDARD_TOOLS = [
    'un martillo',
    'unas tijeras oxidadas',
    'polvos picapica',
    'un trozo de hielo',
    'pinzas para ropa',
];

const STANDARD_BODY_PARTS = [
    'la parte baja de la espalda 🍑',
    'tus partes nobles',
    'los ojos',
    'la planta de los pies',
    'los pezones',
];

const STANDARD_TIMES = [
    '5 minutos',
    'una hora',
    'toda la noche',
    '24 horas',
    'toda una vida',
];


const standardTorture = () => {
    const person = getRandomItem(STANDARD_PERSONS);
    const tool = getRandomItem(STANDARD_TOOLS);
    const part = getRandomItem(STANDARD_BODY_PARTS);
    const time = getRandomItem(STANDARD_TIMES);
    const torture = getRandomItem(STANDARD_TORTURES);

    return `Te torturará ${person} con ${tool} en ${part} durante ${time} obligándote a ${torture}`;
};



function mostrarTortura() {
    const text = standardTorture();
    const element = document.getElementById("excusa");
    if (element) {
        element.textContent = text;
    }
}


// === Generador de Tortura para Parejas ===

const COUPLE_ACTIONS = ['pellizcará', 'morderá', 'lamerá', 'frotará', 'hurgará'];
const COUPLE_BODY_PARTS = ['la oreja', 'los pezones', 'la planta de los pies', 'la ingle', 'el cuello'];
const COUPLE_TOOLS = ['una pluma', 'una pinza de ropa', 'un hielo', 'una cucharilla fria', 'un palillo de dientes'];
const COUPLE_TIMES_MINUTES = ['2', '3', '4', '5', '10'];



const parejaTorture = () => {
    const action = getRandomItem(COUPLE_ACTIONS);
    const bodypart = getRandomItem(COUPLE_BODY_PARTS);
    const tool = getRandomItem(COUPLE_TOOLS);
    const timeInMinutes = getRandomItem(COUPLE_TIMES_MINUTES);

    return `Quien ha dado click ${action} ${bodypart} de su pareja con ${tool} durante ${timeInMinutes} minutos`;
};

function mostrarPtortura() {
    const text = parejaTorture();
    const element = document.getElementById("excusa");
    if (element) {
        element.textContent = text;
    }
}



const handleAudioPlay = () => {
    const audio = document.getElementById('musicaFondo');
    if (audio && audio.paused) {
        audio.play();
    }
}


window.addEventListener('click', handleAudioPlay);



function alternarFicha(imagen) {
    const currentSrc = imagen.src;
    if (currentSrc.includes("_1.png")) {
        imagen.src = currentSrc.replace("_1.png", "_2.png");
    } else if (currentSrc.includes("_2.png")) {
        imagen.src = currentSrc.replace("_2.png", "_1.png");
    }
}


const totalFichas = document.querySelectorAll('.ficha-interactiva');


totalFichas.forEach(card => {
    card.addEventListener('click', function() {
        alternarFicha(card);
    });
});
