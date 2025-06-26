// 1. Variables
let user = "Amanjot Singh";
const currentYear = 2025;

// 2. Functions
function greetUser(name) {
    console.log("Hello " + name + ", welcome to portfolio!");
}
greetUser(user);

// 3. DOM Access + Change Content
document.addEventListener("DOMContentLoaded", () => {
    const headerTitle = document.querySelector("header h1");
    headerTitle.textContent = "Welcome to " + user + "'s Portfolio";

    // 4. Scroll to Contact Section
    const hireBtn = document.querySelector("#hero button a");
    if (hireBtn) {
        hireBtn.addEventListener("click", function (e) {
            e.preventDefault();
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
        });
    }

    // 5. Form Validation
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("messege").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            alert(`Thanks ${name}, your message has been sent!`);
            form.reset();
        });
    }

    // 6. Toggle Dark Mode
    const footer = document.querySelector("footer");
    const darkBtn = document.createElement("button");
    darkBtn.textContent = "Toggle Dark Mode";
    darkBtn.style.marginTop = "15px";
    footer.appendChild(darkBtn);

    darkBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // 7. Loop Through Skills
    const skills = ["HTML", "JavaScript", "React", "Node.js", "MongoDB", "Git"];
    const skillSection = document.querySelector("#skills ul");
    if (skillSection) {
        skills.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillSection.appendChild(li);
        });
    }

    // 8. Rotating Quotes
    const quotes = [
        "Never stop learning.",
        "Believe in your skills.",
        "Every line of code matters.",
        "Debug. Build. Repeat."
    ];
    let quoteIndex = 0;

    const quoteBox = document.createElement("div");
    quoteBox.style.marginTop = "20px";
    quoteBox.style.fontStyle = "italic";
    quoteBox.style.color = "#0077cc";
    document.body.appendChild(quoteBox);

    setInterval(() => {
        quoteBox.textContent = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }, 5000);

    // 9. Object Usage
    const developer = {
        name: "Amanjot Singh",
        age: 21,
        skills: ["HTML", "CSS", "JavaScript"],
        isAvailable: true
    };

    console.log(`Developer ${developer.name} is available: ${developer.isAvailable}`);
});
