const form = document.querySelector(".Input-form");
const input = document.querySelector(".Text-input");
const display = document.querySelector(".Span-div span");

const key = {
    A: "8",
    B: "8",
    E: "3",
    G: "9",
    H: "4",
    N: "4",
    I: "1",
    P: "6",
    L: "7",
    O: "0",
    T: "7",
    R: "9",
    S: "5",
    U: "7",
    Y: "6",
    Z: "2"
};

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const text = input.value.toUpperCase();
    if (text.length > 8) {
        window.alert("Maximum of 8 letters.");
        display.textContent = "0";
        return;
    }
    
    let result = "";

    for (const letter of text) {
        if (key[letter]) {
            result += key[letter];
        }
    }

    result = result.split("").reverse().join("");

    display.textContent = result || "0";
});
