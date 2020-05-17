function staircase(n) {
    for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).padStart(n));
}
}

//.repeat()--- used to build a new string containing a specified number 
//             of copies of the string on which this function has been called.

//padStart()---is used to pad a string with another string until it reaches the
//             given length. The padding is applied from the left end of the string.