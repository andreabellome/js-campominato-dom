
const btnPlay = document.getElementById('play');
const difficulty = document.getElementById('difficulty');
const main = document.querySelector('main');
const r = document.querySelector(':root');

btnPlay.addEventListener('click', function(){

    /* al click, crea la griglia */
    createGrid();
})



/* start: function to create the grid */
function createGrid(){

    /* estrai difficoltà */
    let diffValue = difficulty.value;

    /* utente non ha scelto la difficoltà --> easy mode è default */
    if (diffValue == 'Difficoltà') {
        diffValue = 100;
    }
    diffValue = parseInt(diffValue);

    /* refresh */
    main.innerHTML = '';

    /* create grid */
    let divGrid = document.createElement('div');
    divGrid.classList.add('grid');
    main.append(divGrid)

    /* create the cell num */
    myFunction_set( diffValue )

    /* create items in the grid */
    for (let i = 1; i <= diffValue; i++){

        /* create item */
        let divItem = document.createElement('div');
        divItem.classList.add('item');
        divItem.innerText = i;
        document.querySelector('.grid').append(divItem);

        /* al click, colora la cella e prendi il valore */
        divItem.addEventListener('click', function(){
            console.log(this.innerText);
            this.classList.add('clicked');
        })

    }

}
/* end: function to create the grid */

/* start: create a function for setting a variable value */
function myFunction_set( x ) {
    x = Math.sqrt( x );
    r.style.setProperty('--cellNum', x); /* set the value */
}
/* end: create a function for setting a variable value */


