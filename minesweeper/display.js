//Displays the minesweeper grid

var Images = [
	loadImage("hidden.png"), //?
	loadImage("empty.png"), //0
	loadImage("one.png"), //1
	loadImage("two.png"), //2
	loadImage("three.png"), //3
	loadImage("four.png"), //4
	loadImage("five.png"), //5
	loadImage("six.png"), //6
	loadImage("seven.png"), //7
	loadImage("eight.png"), //8
	loadImage("flag.png"), //9
	loadImage("flag.png"), //10 mine sprite
]

function loadImage(filename) {
	var img = new Image()
	img.src = filename
	return img
}

function Display(canvas, size) {
	this.size = size
	this.context = canvas.getContext("2d")
}

Display.prototype.Set = function(x, y, number) {
	this.context.drawImage(Images[number+1], x*24, y*24)
}