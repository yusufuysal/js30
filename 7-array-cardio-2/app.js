// ## Array Cardio Day 2

const people = [
    { name: "Wes", year: 1988 },
    { name: "Kait", year: 1986 },
    { name: "Irv", year: 1970 },
    { name: "Lux", year: 2015 },
]

const comments = [
    { text: "Love this!", id: 523423 },
    { text: "Super good", id: 823423 },
    { text: "You are the best", id: 2039842 },
    { text: "Ramen is my fav food ever", id: 123523 },
    { text: "Nice Nice Nice!", id: 542328 },
]

//writing initial objects
document.write(`${JSON.stringify(people)} <br> ${JSON.stringify(comments)}`)

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const currentYear = new Date().getFullYear()
const olderSome = (person) => currentYear - person.year >= 19
if (people.some(olderSome) === true) {
    document.write(`<p>There is at least one person who is 19 or older</p>`)
} else {
    document.write(`<p>Everybody is under 19</p>`)
}

// Array.prototype.every() // is everyone 19 or older?
const olderAll = (person) => currentYear - person.year >= 19
if (people.every(olderSome) === true) {
    document.write(`<p>Everybody is 19 or older</p>`)
} else {
    document.write(`<p>There is at least one person under 19</p>`)
}

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const wantedComment = comments.find((comment) => comment.id === 823423)
document.write(
    `<p> The comment with the ID of 823423 is: "${wantedComment.text}"</p>`
)

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const wantedIndex = (comment) => comment.id === 823423

document.write(
    `<p>The index of comment with requested ID is: ${comments.findIndex(
        wantedIndex
    )}</p>`
)

const removed = comments.splice(1, 1)
document.write(
    `<br><p>The last version of comments object after delete the comment with requested id: <br><br> ${JSON.stringify(
        comments
    )}</p>`
)
