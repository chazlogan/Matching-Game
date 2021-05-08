document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [

        {
            name: 'Ants',
            img: 'images/Ants.jpeg'
        },
        {
            name: 'Ants',
            img: 'images/Ants.jpeg'
        },
        {
            name: 'cheetah',
            img: 'images/cheetah.png'
        },
        {
            name: 'cheetah',
            img: 'images/cheetah.png'
        },
        {
            name: 'lion',
            img: 'images/lion.png'
        },
        {
            name: 'lion',
            img: 'images/lion.png'
        },
        {
            name: 'shoes',
            img: 'images/shoesofAfrica.jpeg'
        },
        {
            name: 'shoes',
            img: 'images/shoesofAfrica.jpeg'
        },
        {
            name: 'turtles',
            img: 'images/turtles.jpeg'
        },
        {
            name: 'turtles',
            img: 'images/turtles.jpeg'
        },

    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];


    //create board
    function createBoard() {

        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.jpeg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)

        }
    }
    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        var optionOneId = cardsChosenId[0]
        var optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You are Brilliant!')
            cards[optionOneId].setAttribute('src', 'images/white.jpeg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpeg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.jpeg')
            cards[optionTwoId].setAttribute('src', 'images/blank.jpeg')
            alert('Come on! Use youre noggin')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You WON!'

        }



    }


    //flip your card

    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)

        }

    }

    createBoard()

})
