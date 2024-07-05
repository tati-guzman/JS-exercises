// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let i = 1;
while (i <=5) {
  console.log(i);
  i++;
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

i = 1;
do {
  console.log(i);
  i++;
} while (i<=5);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for (let j = 1; j <= 5; j++) {
  console.log(j);
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let a = 10;
while (a > 0) {
  console.log(a);
  a--;
}

let b = 10;
do {
  console.log(b);
  b--;
} while (b > 0);

for (let c = 10; c > 0; c--) {
  console.log(c);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let d = 7;
while (d <=27) {
  console.log(d);
  d++;
}

let e = 7;
do {
  console.log(e);
  e++;
} while (e <= 27);

for (let f = 7; f <= 27; f++) {
  console.log(f);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let  g = 0;
while (g <= 100) {
  console.log(g);
  g += 10;
}

let f = 0;
do {
  console.log(f);
  f += 10;
} while (f <= 100);

for (let h = 0; h <= 100; h += 10) {
  console.log(h);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

//The conditional statement was always going to be true since counterFour began at < 2 and then was being decreased.
//It never would have reached a situation where the condition was false.

let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

let faveInt = 17;
for (let exer8 = 0; exer8 <= faveInt; exer8++) {
  console.log(exer8);
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let faveIntStill = 17;
for (let exer9 = 0; exer9 <=100; exer9++) {
  if (exer9 != faveIntStill) {
    console.log(exer9 + " not my favorite number");
  } else if (exer9 === faveIntStill) {
    console.log(exer9 + " my favorite number!");
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//For each of the exercises, I felt silly writing a do while loop because it felt unnecessary. Do while loops will make a first pass of the code before checking in with the conditional statement.
//In real life, I would use a do while loop if I know that I need the loop to run once regardless of meeting the condition or not.
//I find for loops to be the cleanest (and they are the most common) but I think I would use a while loop if I already have the variable I want to use in my condition. This helps me not have to initialize a new variable.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from " + outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
    console.log("inside " + insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//I found this to be the easiest of the exercise files so far (of files 1-3) and didn't have to use any resources. I plan to look more into the different use cases for loops later.

// Email your file to us or commit your file to GitHub and email us a link.
