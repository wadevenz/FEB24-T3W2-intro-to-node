try {
    let someBrokennumber = 10 / "banana"
    if (Number.isNaN(someBrokennumber)){

        throw new Error("New error: not a number!");
        throw "Not a number, woops!";
    }
    comsole.log(someBrokennumber)
} catch (error) {
    console.log("Tried to divide by zero");
    console.log(error);
}