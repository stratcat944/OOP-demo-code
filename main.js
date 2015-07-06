// Volcano - Mt. Vesuvius

	// -- Height
	// -- Age
	// --Active / Inactive

	// --Erupt
	// --Earthquake

// Volcano constructor
// @param 	Height 		number
// @param 	age 		number
// @param 	activity 	boolean

var Volcano = function(height, age, activity, name, evilLair){
	this.height 	= height;
	this.age 		= age;
	this.activity 	= activity;
	this.name 		= name;
	this.evilLair 	= evilLair;
}

Volcano.prototype.erupt = function(){

	return this.active ? this.name + ' has erupted... BOOM!' : this.name + ' is inactive.'
}

Volcano.prototype.earthquake = function(){
	return this.name + ' has caused a rumble in the Earth. ' + this.evilLair.name + ' is jumbling around. ' + missiles;
}

	// Evil Lairs

		// -- Fortified / Unfortified
		// -- Lunch Buffet / no

		// -- Launch Missiles
		// -- Trapped

var Lair = function(fortified, lunch, name,villain){
	this.fortified = fortified;
	this.lunchBuffet = lunch;
	this.name = name;
	this.evilVillain = villain;
}

Lair.prototype.launchMissiles = function(){
	return 'Missiles were launched from ' + this.name
}

Lair.prototype.selfDestruct = function(){
	return 'Self Destruct Imminent!'
}



		// Villain - Dr. Evil

			// -- Name
			// -- Bald / Not
			// -- Saying

			// -- Long-winded Speeches
			// -- Demand Money - $1 Million

var Villain = function(name, bald, saying){
	this.name = name;
	this.bald = bald;
	this.saying = saying;

}

Villain.prototype.speech = function(lair){

	var destruct = lair.selfDestruct()

	return this.saying + ' blah blah blah...\n' + destruct;
}

var evilVillain = new Villain('Dr. Evil', true, 'How about No!');

var evilLair = new Lair(true, true, 'Mordor', evilVillain);

var vesuvius = new Volcano(800, 2000000000, true, 'Mt. Vesuvius', evilLair);






