var Vector = {
	function Add(a, b) {
		return new Vector.Vector(a.x+b.x, a.y+b.y, a.z+b.z)
	}
	
	function Subtract(a, b) {
		return new Vector.Vector(a.x-b.x, a.y-b.y, a.z-b.z)
	}
	
	function Multiply(vector, factor) {
		return new Vector.Vector(vector.x*factor, vector.y*factor, vector.z*factor)
	}
	
	function Cross(a, b) {
		var x = (a.y*b.z)-(a.z*b.y)
		var y = (a.z*b.x)-(a.x*b.z)
		var z = (a.x*b.y)-(a.y*b.x)
		
		return new Vector.Vector(x, y, z)
	}
	
	function Dot(a, b) {
		return (a.x*b.x)+(a.y*b.y)+(a.z*b.z)
	}
}

class Vector.Vector {
	constructor(x, y, z) {
		this.x = x
		this.y = y
		this.z = z
	}
	
	function Add(vector) {
		this.x += vector.x
		this.y += vector.y
		this.z += vector.z
	}
	
	function Subtract(vector) {
		this.x -= vector.x
		this.y -= vector.y
		this.z -= vector.z
	}
	
	function Multiply(factor) {
		this.x = this.x*factor
		this.y = this.y*factor
		this.z = this.z*factor
	}
	
	function Magnitude() {
		return Math.sqrt((x*x)+(y*y)+(z*z))
	}
}