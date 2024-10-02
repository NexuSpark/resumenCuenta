document.addEventListener("DOMContentLoaded", function(event) {
    const banco = document.getElementById("banco");
    const sucursal = document.getElementById("sucursal");
    const resumen = document.getElementById("resumen");
    fetch("assets/json/resumen.json")
        .then(response => response.json())
        .then(data => {
            banco.textContent = data.banco;
            sucursal.textContent = data.sucursal;
            let p;
            p = document.createElement("p");
            p.textContent = `Titular: ${data.titular}`;
            resumen.appendChild(p);
            p = document.createElement("p");
            p.textContent = `Cuenta: ${data.nro_cuenta}`;
            resumen.appendChild(p);
            p = document.createElement("p");
            p.textContent = `CBU: ${data.cbu}`;
            resumen.appendChild(p);
            p = document.createElement("p");
            p.textContent = `Saldo USD: ${data.saldo[0].monto}`;
            resumen.appendChild(p);
            p = document.createElement("p");
            p.textContent = `Saldo EUR: ${data.saldo[1].monto}`;
            resumen.appendChild(p);
            p = document.createElement("p");
            p.textContent = `Fecha de apertura: ${data.abierto}`;
            resumen.appendChild(p);
        })
});
