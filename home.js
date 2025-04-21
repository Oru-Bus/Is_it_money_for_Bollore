const input = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");
const result = document.getElementById("result");

input.addEventListener("input", () => {
    const value = input.value.toLowerCase();
    suggestions.innerHTML = "";

    if (value.length > 0) {
        const filtered = empireList.filter(name => name.toLowerCase().includes(value));
        filtered.forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            li.addEventListener("click", () => {
                input.value = name;
                suggestions.innerHTML = "";
                result.textContent = "Est un financement à l'Empire Bolloré";
            });
            suggestions.appendChild(li);
        });
    }
});

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        suggestions.innerHTML = "";
        const value = input.value.trim().toLowerCase();
        const found = empireList.some(name => name.toLowerCase() === value);
        result.textContent = found ? "Est un financement à l'Empire Bolloré" : "N'est pas un financement à l'Empire Bolloré";
    }
});