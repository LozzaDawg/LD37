
Enemy = function (x,y,width,height,hp,dmg){
	this.x = x
	this.y = y
	this.width = width
	this.height = height
	this.hp = hp
	this.dmg = dmg
	entities.push(this)
}

Enemy.prototype.draw = function(){
	c.fillStyle = 'red'
	c.fillRect(this.x, this.y, this.width, this.height)

}
