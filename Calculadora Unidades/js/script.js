function calculate() {
    const lengthInput = parseFloat(document.getElementById("lengthInput").value);
    const lengthFrom = document.getElementById("lengthFrom").value;
    const massInput = parseFloat(document.getElementById("massInput").value);
    const massFrom = document.getElementById("massFrom").value;
    const speedInput = parseFloat(document.getElementById("speedInput").value);
    const speedFrom = document.getElementById("speedFrom").value;

    let lengthResult = calculateLength(lengthInput, lengthFrom);
    let massResult = calculateMass(massInput, massFrom);
    let speedResult = calculateSpeed(speedInput, speedFrom);

    document.getElementById("result").innerHTML = lengthResult + "<br>" + massResult + "<br>" + speedResult;
}

function calculateLength(lengthInput, lengthFrom) {
    let result = '';

    if (lengthFrom === 'km') {
        result += `Kilómetro: ${lengthInput}\n`;
        result += `Metro: ${lengthInput * 1000}\n`;
        result += `Centímetro: ${lengthInput * 100000}\n`;
        result += `Milímetro: ${lengthInput * 1000000}\n`;
        result += `Milla: ${lengthInput * 0.621371}\n`;
        result += `Yarda: ${lengthInput * 1094}\n`;
        result += `Pie: ${lengthInput * 3281}\n`;
        result += `Pulgada: ${lengthInput * 39370}\n`;
    }

    return result;
}

function calculateMass(massInput, massFrom) {
    let result = '';

    if (massFrom === 't') { 
        result += `Tonelada: ${massInput}\n`;
        result += `Kilogramo: ${massInput * 1000}\n`;
        result += `Gramo: ${massInput * 1000000}\n`;
        result += `Miligramo: ${massInput * 1000000000}\n`;
        result += `Libra: ${massInput * 2204.62}\n`;
        result += `Onza: ${massInput * 35274}\n`;
    }

    return result;
}

function calculateSpeed(speedInput, speedFrom) {
    let result = '';

    if (speedFrom === 'mph') {
        result += `Millas por hora: ${speedInput}\n`;
        result += `Millas por segundo: ${speedInput * 0.000277778}\n`;
        result += `Kilómetros por hora: ${speedInput * 1.60934}\n`;
        result += `Kilómetros por segundo: ${speedInput * 0.00044704}\n`;
        result += `Nudo: ${speedInput * 0.868976}\n`;
        result += `Metros por hora: ${speedInput * 1609.34}\n`;
        result += `Metros por segundo: ${speedInput * 0.44704}\n`;
    }

    return result;
}