const pizzas =  [
    {id: 0, base: 'tomato', name: 'Regina', image: require('../assets/pizzas/royale.jpg'), ingredients: ['sauce tomate', 'jambon', 'mozzarella' ], price: 12},
    {id: 1, base: 'tomato', name: 'Hawaï',image: require('../assets/pizzas/-hawai.jpeg.webp'), ingredients: ['sauce tomate', 'ananas', 'poulet', 'mozzarella' ], price: 12},
    {id: 2, base: 'cream', name: 'Chevre',image: require('../assets/pizzas/chevre.jpg'), ingredients: ['creme', 'chevre', 'miel' ], price: 12},
    {id: 3, base: 'cream', name: 'Fromagère',image: require('../assets/pizzas/fromages.jpg'), ingredients: ['creme', 'chevre', 'raclette', 'maroille' ], price: 12},
    {id: 4, base: 'tomato', name: 'Margarita',image: 'https://lilleaddict.fr/wordpress/wp-content/uploads/2020/09/pizzeria-da-Michele-Napoli-Forcella-ricetta-margherita-840x400.jpg', ingredients: ['creme', 'chevre', 'raclette', 'maroille' ], price: 12},
];


const notes = [0, 5, 15, 18, 15, 9];

/*
foreach
map
findIndex
 */

notes.forEach( function (el, index, tableau) {
    //
} )

notes.forEach((el, index, tableau) => {

})

function parcourir(tab, func) {
    for(let i = 0; i < tab.length; i++) {
        func(tab[i], i, tab);
    }
}


parcourir(notes, function (n) {
    console.log(n)
})

parcourir(pizzas, (p) => console.log(p.name));



function filter(tab, compare) {
    const result = [];
    for(let i = 0; i < tab.length; i++) {
        const isValid = compare(tab[i]);
        if(isValid) {
            this.result.push(tab[i])
        }
    }
    return result;
}

const bonne_notes = filter(notes, function(n) {
    return n > 10
})

const bonnes_notes2 = notes.filter((n) => n > 10)