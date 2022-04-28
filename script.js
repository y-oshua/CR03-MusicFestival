/*
(10 points) Use the band prices on your website to create nine (9) variables that will hold each band prices. You will use these variables as arguments passed to the function calculateInvoice() . Print the result on the console. Note: You should do it manually since we didn't learn how to take values from html elements yet. 

(20 points) Create the function calculateInvoice() in Javascript that returns the invoice for one customer (returns how much they have spent). The parameters of the function should be one band from stage1, one band from stage2, and another band from stage3. The function will return the sum of these three parameters. 

(10 points) Calculate at least 3 invoices using combinations of different events from your website and print them on the console (using one event of each stage). 
*/

let band1=18;
let band2=15;
let band3=18;
let band4=20;
let band5=22;
let band6=20;
let band7=25;
let band8=28;
let band9=30;


function calculateInvoice(stage1,stage2,stage3) {

    invoiceAmount = stage1+stage2+stage3;
    invoice = "Thanks for your order! The total will be " + invoiceAmount + " dollars. Have a wonderful day.";
    return invoice;
}

console.log(calculateInvoice(band1,band4,band9));
console.log(calculateInvoice(band2,band5,band8));
console.log(calculateInvoice(band3,band6,band7));

/*Bonus Points:

(10 points) Create a function studentInvoice() that will apply a 10% discount to the final invoice. This function should have the same parameters as the function calculateInvoice(). Print 3 examples of studentInvoice() on the console. */

function studentInvoice(stage1,stage2,stage3)   {

    invoiceAmountDisc = (stage1+stage2+stage3)*.9;
    invoiceDisc = "Thanks for your order! The discounted total will be " + invoiceAmountDisc + " dollars. Have a wonderful day.";
    return invoiceDisc;
}

console.log(studentInvoice(band1,band4,band9));
console.log(studentInvoice(band2,band5,band8));
console.log(studentInvoice(band3,band6,band7));