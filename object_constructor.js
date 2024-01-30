// object constructor function
function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
}
// creating instances of the Object
let book1=new Book("The cacher int the Rye","Jd.Salinger",1951);
let book2=new Book("To kill a mockingbird","harper lee",1960);
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);