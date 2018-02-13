function Field(size, mine_prob) {
	this.size = size
	this.data = new Array()
	this.cleared = new Array()
	
	for (var i=0; i<size; i++) {
		for (var j=0; j<size; j++) {
			this.cleared[i+(j*size)] = false
			
			if (Math.floor(Math.random() * mine_prob) == 0) {
				this.data[i+(j*size)] = true
			} else {
				this.data[i+(j*size)] = false
			}
		}
	}
}

Field.prototype.RevealMines = function(display) {
	for (var i=0; i<this.size; i++) {
		for (var j=0; j<this.size; j++) {
			if (this.Get(i, j)) { display.SetImage(i, j, mineImg) }
		}
	}
}

Field.prototype.RevealCell = function(display, x, y) {
	if (this.Get(x, y) == false) {
		this.revealR(display, x, y)
	} else {
		this.RevealMines(display)
	}
}

Field.prototype.revealR = function(display, x, y) {
	if (x < 0 || x >= this.size) { return }
	if (y < 0 || y >= this.size) { return }
	if (this.cleared[x+(y*this.size)]) { return }
	
	var value = this.CalculateCell(x, y)
	
	display.SetNumber(x, y, value)
	this.cleared[x+(y*this.size)] = true
	
	if (value == 0) {
		this.revealR(display, x-1, y)
		this.revealR(display, x+1, y)
		this.revealR(display, x, y-1)
		this.revealR(display, x, y+1)
		this.revealR(display, x-1, y-1)
		this.revealR(display, x-1, y+1)
		this.revealR(display, x+1, y-1)
		this.revealR(display, x+1, y+1)
	}
}

Field.prototype.CalculateCell = function(x, y) {
	var value = 0
	
	for (var i=x-1; i<=x+1; i++) {
		for (var j=y-1; j<=y+1; j++) {
			if (this.Get(i, j)) { value += 1 }
		}
	}
	
	return value
}

Field.prototype.Get = function(x, y) {
	if (x >= 0 && x < this.size) {
		if (y >= 0 && y < this.size) {
			return this.data[x+(y*this.size)]
		}
	}
	
	return false
}