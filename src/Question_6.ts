// Question # 6

/* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and 
end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
Print the name once, so the whitespace around the name is displayed. Then print the name after striping 
the white spaces. */

let theName: string = "\tQuaid-e-Azam Muhammad Ali Jinnah\t";

let withOutWhiteSpace = theName.trim();
console.log(`${theName} is the founder of Pakistan.`);

console.log(`\n${theName} is the founder of Pakistan.\n He was born in Karachi.\n`);

console.log(`${theName} is the founder of Pakistan.\n He was born in Karachi, \n on 25th december 1876.`);

// print without white spaces
console.log("\n", withOutWhiteSpace, "is the founder of Pakistan\n");
