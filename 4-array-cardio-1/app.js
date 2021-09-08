const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
]

const people = [
    "Bernhard, Sandra",
    "Bethea, Erin",
    "Becker, Carl",
    "Bentsen, Lloyd",
    "Beckett, Samuel",
    "Blake, William",
    "Berger, Ric",
    "Beddoes, Mick",
    "Beethoven, Ludwig",
    "Belloc, Hilaire",
    "Begin, Menachem",
    "Bellow, Saul",
    "Benchley, Robert",
    "Blair, Robert",
    "Benenson, Peter",
    "Benjamin, Walter",
    "Berlin, Irving",
    "Benn, Tony",
    "Benson, Leana",
    "Bent, Silas",
    "Berle, Milton",
    "Berry, Halle",
    "Biko, Steve",
    "Beck, Glenn",
    "Bergman, Ingmar",
    "Black, Elk",
    "Berio, Luciano",
    "Berne, Eric",
    "Berra, Yogi",
    "Berry, Wendell",
    "Bevan, Aneurin",
    "Ben-Gurion, David",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bennington, Chester",
    "Bierce, Ambrose",
    "Billings, Josh",
    "Birrell, Augustine",
    "Blair, Tony",
    "Beecher, Henry",
    "Biondo, Frank",
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const birthDateFiltered = inventors.filter(
    (inventor) => inventor.year > 1499 && inventor.year < 1600
)

document.write("<h4> Inventors who were born in 1500's:")
birthDateFiltered.forEach((inventor) =>
    document.write(`<h5>${inventor.first}  ${inventor.last}</h5>`)
)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const firstAndLast = inventors.map(
    (inventor) => `${inventor.first} ${inventor.last}`
)

document.write("<br><h4> Fullnames of all the inventors:")
firstAndLast.forEach((inventor) => document.write(`<h5>${inventor} </h5>`))

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sorted = inventors.sort((inv1, inv2) => inv2.year - inv1.year)
document.write("<br><h4>Inventors oldest to youngest: </h4>")

sorted.forEach((inventor) =>
    document.write(
        `<h5>${inventor.first} ${inventor.last} ${inventor.year}</h5> `
    )
)

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const ages = []
inventors.forEach((inventor) => ages.push(inventor.passed - inventor.year))

const reducer = (previous, current) => previous + current
const sumOfAges = ages.reduce(reducer)
document.write(
    `<br><h4>Sum of ages of all the inventors: <h5>${sumOfAges}</h5></h4>`
)

// 5. Sort the inventors by years lived

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
]
