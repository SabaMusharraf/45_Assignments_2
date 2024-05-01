// Question # 6

/* Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and 
end of the name. Make sure you use each character combination, "\t" and "\n", at least once. 
Print the name once, so the whitespace around the name is displayed. Then print the name after striping 
the white spaces. */

let theName: string = "\tQuaid-e-Azam Muhammad Ali Jinnah\t";

let withOutWhiteSpace = theName.trim();
console.log(`${theName} is the founder of Pakistan.`);

console.log(`${theName} is the founder of Pakistan.\n He was born in Karachi.`);

console.log(`${theName} is the founder of Pakistan.\n He was born in Karachi, \n on 25th december 1876.`);

console.log(withOutWhiteSpace, "is the founder of Pakistan");
