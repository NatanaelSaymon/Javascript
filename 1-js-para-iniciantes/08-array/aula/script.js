var videoGames = ["PS4", "XBOX", "Switch"]

videoGames.push("Mega drive") //adiciona um item no final do array
videoGames.pop()

for (videoGame of videoGames) {
  console.log(videoGame)
}

var numeros = 5
for (let c = 1; c <= numeros; c++) {
  console.log(c)
}

//ForEach
var filmes = ["Matrix", "Aquaman", "Vigadores - Ultimato"]
filmes.forEach(function (item) {
  console.log(item)
})