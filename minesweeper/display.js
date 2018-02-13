//Displays the minesweeper grid

var hiddenImg = loadImage("hidden.png")
var mineImg = loadImage("mine.png")

var Numbers = [
	loadImage("empty.png"), //0
	loadImage("one.png"), //1
	loadImage("two.png"), //2
	loadImage("three.png"), //3
	loadImage("four.png"), //4
	loadImage("five.png"), //5
	loadImage("six.png"), //6
	loadImage("seven.png"), //7
	loadImage("eight.png"), //8
]

function loadImage(filename) {
	var img = new Image()
	img.src = filename
	return img
}

function Display(context, size, tileSize) {
	this.size = size
	this.tileSize = tileSize
	this.context = context
	
	var pattern = context.createPattern(hiddenImg, "repeat")
	context.fillStyle = pattern
	context.fillRect(0, 0, size*tileSize, size*tileSize)
}

Display.prototype.SetNumber = function(x, y, number) {
	this.context.drawImage(Numbers[number], x*tileSize, y*tileSize)
}

Display.prototype.SetImage = function(x, y, img) {
	this.context.drawImage(img, x*tileSize, y*tileSize)
}