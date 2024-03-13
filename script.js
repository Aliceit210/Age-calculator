function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();

    if (birthdate > today) {
        alert("Please enter a valid birthdate.");
        return;
    }

    const units = [
        { name: "years", divisor: 365 },
        { name: "months", divisor: 30.44 }, // Approximate average number of days in a month
        { name: "weeks", divisor: 7 },
        { name: "days", divisor: 1 },
        { name: "hours", divisor: 1 / 24 },
        { name: "minutes", divisor: 1 / 1440 },
        { name: "seconds", divisor: 1 / 86400 },
    ];

    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    units.forEach(unit => {
        const ageValue = Math.floor((today - birthdate) / (unit.divisor * 24 * 60 * 60 * 1000));
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("age-result");
        resultDiv.innerHTML = `<h2>Result ${unit.name[0].toUpperCase() + unit.name.slice(1)}</h2>
            <p><span class="age-value">${ageValue}</span> ${unit.name}</p>`;
        resultsContainer.appendChild(resultDiv);
    });
}
