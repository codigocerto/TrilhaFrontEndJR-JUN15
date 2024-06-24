    // Scroll suave
    const links = document.querySelectorAll('a[href^="#"]');
    for (const link of links) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        });
    }

    // Alternar modo escuro/claro
    const toggleModeButton = document.createElement('button');
    toggleModeButton.textContent = "Alternar Modo Escuro/Claro";
    document.body.appendChild(toggleModeButton);

    toggleModeButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });