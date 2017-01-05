window.onload = function () {
    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1645, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes ', last: 'Kepler', year: 1571, passed: 1639 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1475, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
    ]

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachen', 'Beloc, Milare', 'Bellow Saul', 'Benchley, Robert', 'Bennerson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennnington, Chester', 'Benson, Lena', 'Bert, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Malle', 'Berry, Mendell', 'bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
    // FILTER 
    // Array.prototype.filter()
    // Filter list of inventors for those who were born in 1500s
    // people who are born in 1500
    // filter: pass anonmymous function inside, returns true or false, with true it returns the object
    let fifteen = inventors.filter(i => { return i.year >= 1500 && i.year < 1600; });
    console.log("fifteen");
    // whoopwhoop
    console.table(fifteen);

    // MAP
    // Array.prototype.map()
    // takes an array, does something with it, returns new one; always same length what comes out
    // Give array of first and last names of inventors
    let names = inventors.map(i => { return `${i.first} ${i.last}`; });
    console.log("names");
    console.table(names);

    // SORT
    // Array.prototype.sort()
    // sort: get 2 items, compare them
    // Sort oledst to youngest inventors
    let sort = inventors.sort((a, b) => { a.year > b.year ? 1 : -1; });
    console.log("sort");
    console.table(sort);

    // REDUCE
    // Array.prototype.reduce()
    // reduce: buo
    // How many years did all of them live in total?
    let total = inventors.reduce((total, i) => { return total + (i.passed - i.year); }, 0);
    console.log("tota");
    console.log(total);

    //Sort the inventors by year lived
    let sorted = inventors.sort((a, b) => { (a.passed - a.year) > (b.passed - b.year) ? 1 : -1; }, 0);
    console.log("sorted");
    console.table(sorted);

    //Create list of boulevards in Paris that contain 'de'
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    /* links have to get changed into an array
    let links = Array.from(document.querySelector('.mw-category').querySelectorAll('a'));
    let de = links
        .map(link => link.textContent)
        .filter(streetName => streetName.includes('de'));
    */

    // Sort people alphabetically by last names
    let lastNames = people.map(p => p.split(", ")[0]).sort((a, b) => a > b ? 1 : -1);
    console.log("lastNames");
    console.table(lastNames);

    // Sum up the instances
    let data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
    let red = data.reduce((obj, item) => {
        //check if the key exists
        if (!obj[item]) {
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {
            // car: 0, walk: 0, truck: 0
        });
    console.log("red");
    console.table(red);

    let people2 = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1988 },
        { name: 'Lux', year: 1999 }
    ];
    let comments = [
        { text: 'Love this', id: 523423 },
        { text: 'Super good', id: 823424 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food forever', id: 123523 },
        { text: 'Nice nice nice', id: 823423 }
    ];

    // SOME
    // Array.prototype.some()
    // at least one elemtn in array meets the requirement
    // Is at least one person adult?
    let isAdult = people2.some(p => { if ((2016 - p.year) > 18) return true; });
    console.log("isAdult");
    console.log(isAdult);

    // EVERY
    // Array.prototype.every()
    // every elemtn in array meets the requirement
    // Every person adult?
    let adults = people2.every(p => { if ((2016 - p.year) > 18) return true; });
    console.log("adults");
    console.log(adults);

    // FIND
    // Array.prototype.find()
    // returns first item it finds
    // Find comment with id 823423
    let findID = comments.find(c => c.id === 823423);
    console.log("findID");
    console.log(findID);

    // FIND INDEX
    // Array.prototype.findIndex()
    // returns index of item
    // Find comment with id 823423
    let findInd = comments.findIndex(c => c.id === 823423);
    console.log("findInd");
    console.log(findInd);
    // delete
    comments.splice(findInd, 1);
    console.log("comments");
    console.table(comments);
}
