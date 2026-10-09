(() => {
    "use strict";

    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector("#main-nav");
    const toast = document.querySelector("#demo-toast");
    const form = document.querySelector("#contact-form");
    const feedback = document.querySelector("#form-feedback");

    document.querySelector("#year").textContent = new Date().getFullYear();

    function showToast(message) {
        toast.textContent = message;
        toast.classList.add("is-visible");

        window.clearTimeout(showToast.timeout);

        showToast.timeout = window.setTimeout(() => {
            toast.classList.remove("is-visible");
        }, 4200);
    }

    menuButton.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");

        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("is-open");

            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "Abrir menu");
        });
    });

    document.querySelectorAll("[data-service]").forEach((link) => {
        link.addEventListener("click", () => {
            const serviceSelect = document.querySelector("#service");

            serviceSelect.value = link.dataset.service;
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        if (!form.reportValidity()) {
            return;
        }

        // Este formulário é apenas demonstrativo:
        // não envia nem armazena dados.
        const formData = new FormData(form);

        const name = String(formData.get("name") || "").trim();
        const service = String(formData.get("service") || "").trim();

        feedback.textContent =
            `Obrigado, ${name}! Esta é uma demonstração: ` +
            `sua solicitação sobre "${service}" não foi enviada à empresa.`;

        showToast("Formulário demonstrativo: nenhum dado foi enviado.");

        form.reset();
    });

    document.querySelectorAll('a[href="#contato"]').forEach((link) => {
        link.addEventListener("click", () => {
            // Os links levam ao formulário;
            // não há número ou contato real configurado.
        });
    });
})();