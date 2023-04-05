
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

    /* create cells with bombs */
    let bombsArray = randArray(1, diffValue, 16);

    console.log(bombsArray)

    /* refresh */
    main.innerHTML = '';

    /* create grid */
    let divGrid = document.createElement('div');
    divGrid.classList.add('grid');
    main.append(divGrid)

    /* create the cell num */
    setRootProp( diffValue )

    /* initialize score */
    var score = 0;

    /* create items in the grid */
    for (let i = 1; i <= diffValue; i++){

        /* create item */
        let divItem = document.createElement('div');
        divItem.classList.add('item');
        divItem.innerText = i;
        document.querySelector('.grid').append(divItem);

        

        /* al click, controlla se utente ha clickato una bomba */
        check = checkValueArray(i, bombsArray);
        if (check == 1){

            

            /* al click, rivela la bomba */
            divItem.addEventListener('click', function(){

                this.classList.add('bomb');

                let divItemBomb = document.createElement( 'div' );
                divItemBomb.classList.add('item-bomb');
                document.querySelector('.main-div').append(divItemBomb);

                /* add the html */
                divItemBomb.innerHTML += '<h1 class="text-align-center mb-10">Hai perso!</h1>';
                divItemBomb.innerHTML += '<div class="flex flex-dir-row align-it-center just-cont-center mb-10"><span>Il tuo punteggio è:</span><div id="divScore"></div></div><div><button type="button" class="btn btn-light border-col-dark height-button" style="display: block; margin: auto;" id="reset">Reset</button></div>';

                /* display the score */
                let divScore = document.getElementById('divScore');
                divScore.innerText = score;

                /* start: reset page by clicking the button */
                const myButton = document.getElementById('reset');
                myButton.addEventListener('click', () => {
                    location.reload();
                });
                /* end: reset page by clicking the button */

                
            })

        } else {

            /* al click, colora la cella */
            divItem.addEventListener('click', function(){
                this.classList.add('clicked');
                score = score + 1;

                if (score == 16) {
                    let divItemBomb = document.createElement( 'div' );
                    divItemBomb.classList.add('item-bomb');
                    document.querySelector('.main-div').append(divItemBomb);
                    /* add the html */
                    divItemBomb.innerHTML += '<h1 class="text-align-center mb-10">Hai vinto!</h1>';
                    divItemBomb.innerHTML += '<div class="flex flex-dir-row align-it-center just-cont-center mb-10"><span>Il tuo punteggio è:</span><div id="divScore"></div></div><div><button type="button" class="btn btn-light border-col-dark height-button" style="display: block; margin: auto;" id="reset">Reset</button></div>';
                    let divScore = document.getElementById('divScore');
                    divScore.innerText = score;
                    const myButton = document.getElementById('reset');
                    myButton.addEventListener('click', () => {
                    location.reload();
                });
                }

            })

        }

        

    }

}
/* end: function to create the grid */

/* start: create a function for setting a variable value */
function setRootProp( x ) {
    x = Math.sqrt( x );
    r.style.setProperty('--cellNum', x); /* set the value */
}
/* end: create a function for setting a variable value */

/* start: create an array of different random numbers */
function randArray(min, max, dim){

    let randArr = [];
    if (dim > max){
        console.log( 'dimension of the array should be less than max. value' ); 
    } else {
        for (let i = 0; i < dim; i++){
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            while (randArr.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            }
            randArr.push(randomNumber);
        }
    }

    return randArr;

}
/* end: create an array of different random numbers */

/* start: check if a value is in array */
function checkValueArray(val, arr){

    if ( arr.indexOf(val) !== -1 ){
        var check = 1; /* value is in array */
    } else {
        var check = 0; /* value is not in array */
    }

    return check;

}
/* end: check if a value is in array */

/* start: reset page by clicking the button */
/* const myButton = document.getElementById('reset');
myButton.addEventListener('click', () => {
    location.reload();
}); */
/* end: reset page by clicking the button */
