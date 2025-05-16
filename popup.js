
const STORAGE_OBJECTIVE_KEY = "money_saving_objective";
const STORAGE_ACTUAL_KEY = "money_saving_actual";

const inputAct = document.getElementById("actual");
const inputObjective = document.getElementById("objective");
const inputResult = document.getElementById("result");


const calculate = () => {
    const actual = parseFloat(inputAct.value);
    const objective = parseFloat(inputObjective.value);

    if (isNaN(actual) || isNaN(objective)) {
        inputResult.innerHTML = "Por favor ingresá números válidos.";
        return;
    }

    const percent = ((actual / objective) * 100).toFixed(2);
    const missing = (objective - actual).toFixed(2);

    inputResult.innerHTML = `
        <strong>${percent} %</strong> del objetivo alcanzado.<br>
        Te faltan <strong>USD ${missing}</strong>.
    `;
    localStorage.setItem(STORAGE_OBJECTIVE_KEY, String(objective));
    localStorage.setItem(STORAGE_ACTUAL_KEY, String(actual));
}


window.onload = () => {
    const objective = localStorage.getItem(STORAGE_OBJECTIVE_KEY);
    const actual = localStorage.getItem(STORAGE_ACTUAL_KEY);

    if (objective && actual) {
        inputObjective.value = parseFloat(objective);
        inputAct.value = parseFloat(actual);
        calculate();
    }
};

document.getElementById("btnCalculate").addEventListener("click", calculate);
