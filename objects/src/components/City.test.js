import City from './City.js';

// City params are (cityName, cityLat, cityLong, cityPop)

test('test new city instantiation', () => {
	const newCity = new City(1, 'Calgary', 150, 120, 20000);
	
	// console.log('test params are passed');

	expect(newCity.cityName).toBe('Calgary');
	expect(newCity.cityLat).toBe(150);
	expect(newCity.cityLong).toBe(120);
	expect(newCity.cityPop).toBe(20000);

	const cityShow = newCity.showCity();
	expect(cityShow).toBe('Calgary 150 120 20000');

	const moveIn = newCity.movedIn(2000);
	expect(newCity.cityPop).toBe(22000);

	const moveOut = newCity.movedOut(21980);
	expect(newCity.cityPop).toBe(20);

	const big = newCity.howBig();
	expect(newCity.cityPop).toBe(20);
	expect(big).toBe('Hamlet');
});

test('my fav city instantiation', () => {

	const myCity = new City(1, 'GregCity', 56, 60, 1000);

	let mFavCity = myCity;

	// console.log('myCityPop is ', myCity.cityPop);
	// console.log('mFavCity Pop is ', mFavCity.cityPop);

	myCity.movedIn(2500);
	// console.log('myCityPop is ', myCity.cityPop);
	// console.log('mFavCity Pop is ', mFavCity.cityPop);
	
})







