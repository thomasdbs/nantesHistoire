const menu = document.querySelector('.navbarContent');
const container = document.querySelector('.container');
const menuItem = document.querySelector('.grid__item');
const iconeMenu = document.querySelector('#iconeMenu');
const date = document.querySelector('#date');
const next = document.querySelector('#next');
const previous = document.querySelector('#previous');
const dateDescription = document.querySelector('#dateDescription');
const dateClick = document.querySelector('.etape');
const etape0 = document.querySelector('.etape0');
const etape1 = document.querySelector('.etape1');
const etape2 = document.querySelector('.etape2');
const etape3 = document.querySelector('.etape3');
const etape4 = document.querySelector('.etape4');
const etape5 = document.querySelector('.etape5');
const etape6 = document.querySelector('.etape6');
const iconeCouleur = document.querySelector('.iconeCouleur');
const picture = document.querySelector('#frag-5');
const body = document.querySelector('body');

let numEtape = 0
let touchableMenu = 'in';
let touchableEtape = 'in';

const etapes = {
    '0': [
        '1828',
        "Construction",
        "1963.jpg",
        "Construit en 1829, il reliait la rue d’Orléans à la rue de la Barillerie. Initialement nommé pont Charles X, il prit le nom d’Orléans sous la monarchie de Juillet en l’honneur de la dynastie régnante."
    ],
    '1': [
        '1832',
        "Premières modifications",
        "1907.jpg",
        "A chaque extrémité du pont se trouvaient des cales, 4 au total, accessibles depuis des plateformes. Ces dernières furent équipées de rambardes après qu’un homme, ivre ou malvoyant, se noya le 4 janvier 1832."
    ],
    '2': [
        '1889',
        "Nouveau devis",
        "1878.jpg",
        "M. Resal, ingénieur des Ponts et Chaussées visite le pont d’Orléans. Il fit le diagnostique que d’importants travaux devaient être menés pour s’assurer de la solidité du pont."
    ],
    '3': [
        '1907',
        "Enfin de nouveaux travaux",
        "1907_2.jpg",
        "Les travaux n’avaient toujours pas été réalisés quand la ville proposa de remplacer le pont d’Orléans par un pont métallique en 1906. Le chantier avança alors suffisamment vite pour que les parties métalliques soient posées dès septembre."
    ],
    '4': [
        '1909',
        "Fin du chantier",
        "1909.jpg",
        "Suite à des retards, le chantier fut considérablement ralenti. Les travaux de terrassement, de maçonnerie et de charpente ne furent terminés que le 23 août 1909."
    ],
    '5': [
        '1930',
        "Visite présidentielle",
        "1930.jpg",
        "Lors de la visite du président Doumergue à Nantes en avril 1930, on y dressa un arc de triomphe."
    ],
    '6':[
        '1940',
        "Destruction",
        "1942.jpg",
        "En 1932, l'Erdre est partiellement asséchée pour permettre les travaux de jonction du canal Saint-Félix avec la rivière. Les ponts se trouvant sur le chemin de l'Erdre sont détruits en 1940. Interrompus par la guerre en 1943, les derniers travaux sont achevés en 1946."
    ]
}


date.innerHTML = etapes[`${numEtape}`][0];
dateDescription.innerHTML = `“ ${etapes[`${numEtape}`][1]} ”`;
picture.style.backgroundImage = `url(img/${etapes[`${numEtape}`][2]})`;

iconeCouleur.onclick = () => {
    picture.classList.toggle('hallucination-effect');
    picture.classList.toggle('blackWhite');
    const menuItems = document.querySelectorAll('.grid__item .pointer' );
    for (const menuItem of menuItems) {
        menuItem.classList.toggle('hallucination-effect');
        menuItem.classList.toggle('blackWhite');
    }
}

etape0.onclick = () => { redirection(0); }
etape1.onclick = () => { redirection(1); }
etape2.onclick = () => { redirection(2); }
etape3.onclick = () => { redirection(3); }
etape4.onclick = () => { redirection(4); }
etape5.onclick = () => { redirection(5); }
etape6.onclick = () => { redirection(6); }


const redirection = num => {
    numEtape = num;
    container.style.display='block';
    menu.style.display='none';
    touchableMenu = 'in';
    updateEtape();

}

next.onclick = () => { if (numEtape>=0 && numEtape<6) { numEtape ++; updateEtape(); } }

// body.onkeydown = () => { if (numEtape>=0 && numEtape<6) { numEtape ++; updateEtape(); } }

previous.onclick = () => { if (numEtape>0 && numEtape<=6) { numEtape --; updateEtape(); } }

// body.onkeyup = () => { if (numEtape>0 && numEtape<=6) { numEtape --; updateEtape(); } }

const updateEtape = () => {
    date.innerHTML = etapes[`${numEtape}`][0];
    dateDescription.innerHTML = `“ ${etapes[`${numEtape}`][1]} ”`;
    picture.style.backgroundImage = `url(img/${etapes[`${numEtape}`][2]})`;
    const fragments = document.querySelectorAll('.fragment' );
    for (const fragment of fragments) {
        fragment.remove();
    }
    imagesLoaded(document.querySelectorAll('.fragment-wrap'), { background: true }, function() {
        new FragmentsFx(document.getElementById('frag-5'), {
            fragments: 20,
            boundaries: {x1: 50, x2: 300, y1: 0, y2: 0},
            randomIntervals: {
                top: {min: 0,max: 40},
                left: {min: 0,max: 90},
                dimension: {
                    width: {min: 10,max: 50, fixedHeight: 0.5},
                    height: {min: 5,max: 10, fixedWidth: 5}
                }
            },
            parallax: true,
            randomParallax: {min: 30, max: 300}
        });
    });
}

dateClick.onclick = () => {
    if (touchableEtape == 'in') {
        dateDescription.innerHTML = `“ ${etapes[`${numEtape}`][3]} ”`;
        touchableEtape = 'out';
    }else {
        dateDescription.innerHTML = `“ ${etapes[`${numEtape}`][1]} ”`;
        touchableEtape = 'in';
    }

}

iconeMenu.onclick = () => {
    if (touchableMenu == 'in') {
        container.style.display='none';
        menu.style.display='block';
        touchableMenu = 'out';
    }else {
        container.style.display='block';
        menu.style.display='none';
        touchableMenu = 'in';
    }
}
