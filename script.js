function mejoresMaterias(MAT, LEN, EFS, nota) {
    document.getElementById("MAT").style.background = (MAT === nota) ? "blue" : "white";
    document.getElementById("LEN").style.background = (LEN === nota) ? "blue" : "white";
    document.getElementById("EFS").style.background = (EFS === nota) ? "blue" : "white";
}

function Validacion() {
    var NotaM = parseInt(document.getElementById("MAT").value);
    var NotaL = parseInt(document.getElementById("LEN").value);
    var NotaE = parseInt(document.getElementById("EFS").value);
    var valido = true;
    document.getElementById("MAT").style.background = (NotaM >= 1 && NotaM <= 10) ? "green" : "red";
    document.getElementById("LEN").style.background = (NotaL >= 1 && NotaL <= 10) ? "green" : "red";
    document.getElementById("EFS").style.background = (NotaE >= 1 && NotaE <= 10) ? "green" : "red";

    if (!(NotaM >= 1 && NotaM <= 10) || !(NotaL >= 1 && NotaL <= 10) || !(NotaE >= 1 && NotaE <= 10)) {
        valido = false;
    }

    return valido;
}

function Promedio() {
    var NotaM = parseInt(document.getElementById("MAT").value);
    var NotaL = parseInt(document.getElementById("LEN").value);
    var NotaE = parseInt(document.getElementById("EFS").value);

    var valido = Validacion();

    if (!valido) {
        alert("Notas no válidas (todos los campos deben estar completos con numeros, los números deben estar entre 1 y 10)");
    } else {
        var promedio = (NotaM + NotaL + NotaE) / 3;
        document.getElementById("Resultado").innerHTML = "Promedio: " + promedio;

        document.getElementById("Resultado").style.background = (promedio >= 6) ? "green" : "red";
    }
}

function Nota() {
    var NotaM = parseInt(document.getElementById("MAT").value);
    var NotaL = parseInt(document.getElementById("LEN").value);
    var NotaE = parseInt(document.getElementById("EFS").value);

    var valido = Validacion();

    if (!valido) {
        alert("Notas no válidas (todos los campos deben estar completos con numeros, los números deben estar entre 1 y 10)");
    } else {
        var notaMax = Math.max(NotaM, NotaL, NotaE);
        mejoresMaterias(NotaM, NotaL, NotaE, notaMax);
        document.getElementById("Resultado").innerHTML = "Mejor Nota: " + notaMax;
        document.getElementById("Resultado").style.background = "white";
    }
}
