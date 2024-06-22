var rock = document.querySelector(".rock")
var scissors = document.querySelector(".scissors")
var paper = document.querySelector(".paper")
var compChoice = document.querySelector(".compChoice")

var secimler = ["rock", "scissors", "paper"]
var index = Math.floor(Math.random() * secimler.length)



rock.onclick = function () {
    if (secimler[index] == "rock") {
        compChoice.style.backgroundImage = "url(rock.png)"
        setTimeout(function () {
            alert("Berabere qaldiniz!")

        }, 100)
        secimler = ["rock", "scissors", "paper"]
        index = Math.floor(Math.random() * secimler.length)
    }
    else if (secimler[index] == "scissors") {
        compChoice.style.backgroundImage = "url(images.jpeg)"
        setTimeout(function () {
            alert("Siz qazandiniz tebrikler!")

        }, 100)
        secimler = ["rock", "scissors", "paper"]
        index = Math.floor(Math.random() * secimler.length)
    }
    else if (secimler[index] == "paper") {
        compChoice.style.backgroundImage = "url(paper.png)"
        setTimeout(function () {

            alert("Komputer qazandi!")
        }, 100)
        secimler = ["rock", "scissors", "paper"]
        index = Math.floor(Math.random() * secimler.length)
    }


}
scissors.onclick = function () {
    if (secimler[index] == "rock") {
        compChoice.style.backgroundImage = "url(rock.png)"
        setTimeout(function () {
            alert("Komputer qazandi!")

        }, 100)
        secimler = ["rock", "scissors", "paper"]
        index = Math.floor(Math.random() * secimler.length)
    }
    else if (secimler[index] == "scissors") {
        compChoice.style.backgroundImage = "url(images.jpeg)"
        setTimeout(function () {
            alert("Berabere qaldiniz!")

        }, 100)
        secimler = ["rock", "scissors", "paper"]
        index = Math.floor(Math.random() * secimler.length)
    }
    else if (secimler[index] == "paper") {
        compChoice.style.backgroundImage = "url(paper.png)"
        setTimeout(function () {
            alert("Siz qazandiniz tebrikler!")

        }, 100)
        secimler = ["rock", "scissors", "paper"]
        index = Math.floor(Math.random() * secimler.length)
    }
}
paper.onclick = function () {
    if (secimler[index] == "rock") {
        compChoice.style.backgroundImage = "url(rock.png)"
        setTimeout(function () {
            alert("Siz qazandiniz tebrikler!")

        }, 100)
        secimler = ["rock", "scissors", "paper"]
        index = Math.floor(Math.random() * secimler.length)
    }
    else if (secimler[index] == "scissors") {
        compChoice.style.backgroundImage = "url(images.jpeg)"
        setTimeout(function () {
            alert("Komputer qazandi!")

        }, 100)
        secimler = ["rock", "scissors", "paper"]
        index = Math.floor(Math.random() * secimler.length)
    }
    else if (secimler[index] == "paper") {
        compChoice.style.backgroundImage = "url(paper.png)"
        setTimeout(function () {
            alert("Berabere qaldiniz!")

        }, 100)
        secimler = ["rock", "scissors", "paper"]
        index = Math.floor(Math.random() * secimler.length)
    }
}