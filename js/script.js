document.getElementById("calculateButton").addEventListener("click", function () {
    const U = parseFloat(document.getElementById("u").value) || null;
    const I = parseFloat(document.getElementById("i").value) || null;
    const R = parseFloat(document.getElementById("r").value) || null;
    const P = parseFloat(document.getElementById("p").value) || null;

    let result = "";

    if (U && I) {
        result = `Resistance (R): ${(U / I).toFixed(2)} Ω<br>Power (P): ${(U * I).toFixed(2)} W`;
    } else if (U && R) {
        result = `Current (I): ${(U / R).toFixed(2)} A<br>Power (P): ${((U ** 2) / R).toFixed(2)} W`;
    } else if (I && R) {
        result = `Voltage (U): ${(I * R).toFixed(2)} V<br>Power (P): ${((I ** 2) * R).toFixed(2)} W`;
    } else if (P && U) {
        result = `Current (I): ${(P / U).toFixed(2)} A<br>Resistance (R): ${((U ** 2) / P).toFixed(2)} Ω`;
    } else if (P && I) {
        result = `Voltage (U): ${(P / I).toFixed(2)} V<br>Resistance (R): ${(P / (I ** 2)).toFixed(2)} Ω`;
    } else if (P && R) {
        result = `Voltage (U): ${Math.sqrt(P * R).toFixed(2)} V<br>Current (I): ${Math.sqrt(P / R).toFixed(2)} A`;
    } else {
        result = "Please provide at least 2 values.";
    }

    document.getElementById("resultText").innerHTML = result;
});
