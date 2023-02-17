// console.log(window);
// alert(123);

// console.log(navigator.appVersion);


// Object Literal
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};


const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2016',
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// console.log(book2.getSummary());

// To see al the objects
// console.log(Object.values(book2));
// console.log(Object.keys(book2));

