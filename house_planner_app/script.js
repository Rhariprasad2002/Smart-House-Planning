function generatePlan() {
    let plot = Number(document.getElementById("plot").value);
    let budget = Number(document.getElementById("budget").value);
    let bedrooms = Number(document.getElementById("bedrooms").value);
    let houseType = document.getElementById("houseType").value;

    let costPerSqft;

    if (houseType === "modern") costPerSqft = 1800;
    else if (houseType === "traditional") costPerSqft = 1600;
    else costPerSqft = 2200;

    let interiorCostPerSqft = 600;

    let constructionCost = plot * costPerSqft;
    let interiorCost = plot * interiorCostPerSqft;
    let totalCost = constructionCost + interiorCost;

    let output = `
        <b>House Type:</b> ${houseType.toUpperCase()}<br>
        <b>Plot Size:</b> ${plot} sq ft<br>
        <b>Bedrooms:</b> ${bedrooms}<br><br>

        <b>Construction Cost:</b> ₹${constructionCost}<br>
        <b>Interior Cost:</b> ₹${interiorCost}<br>
        <b>Total Cost:</b> ₹${totalCost}<br><br>
    `;

    if (totalCost <= budget) {
        output += "<b style='color:green'>Within Budget ✔</b>";
    } else {
        output += "<b style='color:red'>Exceeds Budget ✖</b>";
    }

    document.getElementById("result").innerHTML = output;
}
