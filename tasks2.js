const notes = [
    {
        id:1,
        title: "Recipe",
        description: "Ingredients include 2 eggs...",
        pagesCount: 2,
        isMarked: false,
        access: []
    },
    {
        id:2,
        title: "Workouts",
        description: "3 sets of squats...",
        pagesCount: 1,
        isMarked: true,
        access: []
    },
    {
        id:3,
        title: "Passwords",
        description: "Visa...",
        pagesCount: 6,
        isMarked: true,
        access: []
    },
    {
        id:4,
        title: "To Do 2021",
        description: "I. Learn JS...",
        pagesCount: 3,
        isMarked: false,
        access: []
    }
]

//1
 const newNotes = notes.map(notes =>([{ id: notes.id, title: notes.title }]));
 console.log(newNotes);

 //2
const filtNotes = notes.filter (notes =>(notes.isMarked == true));
console.log(filtNotes);

//3
const totalPages = notes.reduce((total, note) => total + note.pagesCount, 0);

console.log(totalPages);
