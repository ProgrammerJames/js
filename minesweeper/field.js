function Field(size) {
	this.size = size
	this.data = new Array()
	
	for (var i=0; i<size; i++) {
		for (var j=0; j<size; j++) {
			if (Math.floor(Math.random() * 5) == 0) {
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
			if (this.Get(i, j)) { display.Set(i, j, 10) }
		}
	}
}

Field.prototype.RevealCell = function(display, x, y) {
	if (this.Get(x, y) == false) {
		this.revealR(display, x, y, x, y)
	} else {
		this.RevealMines(display)
	}
}

Field.prototype.revealR = function(display, startx, starty, x, y) {
	if (x < 0 || x >= this.size) { return }
	if (y < 0 || y >= this.size) { return }
	
	var value = this.CalculateCell(x, y)
	
	display.Set(x, y, value)
	
	if (value == 0) {
		display.Set(x+1, y+1, this.CalculateCell(x+1, y+1))
		display.Set(x+1, y-1, this.CalculateCell(x+1, y-1))
		display.Set(x-1, y+1, this.CalculateCell(x-1, y+1))
		display.Set(x-1, y-1, this.CalculateCell(x-1, y-1))
		
		if (startx >= x) { this.revealR(display, startx, starty, x-1, y) }
		if (startx <= x) { this.revealR(display, startx, starty, x+1, y) }
		if (starty >= y) { this.revealR(display, startx, starty, x, y-1) }
		if (starty <= y) { this.revealR(display, startx, starty, x, y+1) }
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
	if (x >= 1 && x < this.size) {
		if (y >= 1 && y < this.size) {
			return this.data[x+(y*this.size)]
		}
	}
	
	return false
}