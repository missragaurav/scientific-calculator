let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let isResultDisplayed = false; // This flag helps to detect if the result was displayed

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonValue = e.target.innerHTML;

        // Clear input and string when AC is pressed
        if (buttonValue === 'AC') {
            string = "";
            input.value = "0";
            isResultDisplayed = false; // Reset the flag
        } 
        // Delete last character when DEL is pressed
        else if (buttonValue === 'DEL') {
            if (isResultDisplayed) {
                string = ""; // If the result was displayed, start fresh
                input.value = "0";
                isResultDisplayed = false;
            } else {
                string = string.slice(0, -1);  // Delete last character
                input.value = string || "0"; // Show 0 if string becomes empty
            }
        } 
        // Evaluate the expression when '=' is pressed
        else if (buttonValue === '=') {
            try {
                string = eval(string); // Evaluate the expression
                input.value = string;
                isResultDisplayed = true; // Set flag to indicate result displayed
            } catch {
                input.value = "Error"; // Display error if evaluation fails
                string = ""; // Reset string if there's an error
            }
        } 
        // Scientific functions
        else if (buttonValue === 'sin') {
            string = Math.sin(eval(string)).toFixed(8);
            input.value = string;
            isResultDisplayed = true;
        } 
        else if (buttonValue === 'cos') {
            string = Math.cos(eval(string)).toFixed(8);
            input.value = string;
            isResultDisplayed = true;
        } 
        else if (buttonValue === 'tan') {
            string = Math.tan(eval(string)).toFixed(8);
            input.value = string;
            isResultDisplayed = true;
        } 
        else if (buttonValue === 'log') {
            string = Math.log10(eval(string)).toFixed(8);
            input.value = string;
            isResultDisplayed = true;
        } 
        // For other button presses (numbers and operators)
        else {
            if (isResultDisplayed) {
                string = ""; // Clear the string if result was displayed, for fresh input
                isResultDisplayed = false; // Reset the result flag
            }
            string += buttonValue; // Append button value
            input.value = string; // Display the updated string
        }
    });
});
