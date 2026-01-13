const buttons = Array.from(document.querySelectorAll(".faq_question"));

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const faqItem = button.closest(".faq_item");
    const answer = faqItem.querySelector(".faq_answer");

    const expanded = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!expanded));
    faqItem.classList.toggle("active");

    if (expanded) {
      answer.addEventListener(
        "transitionend",
        () => (answer.hidden = true),
        { once: true }
      );
    } else {
      answer.hidden = false;
    }
  });

  // 👉 Navegação por teclado
  button.addEventListener("keydown", (e) => {
    let targetIndex = null;

    switch (e.key) {
      case "ArrowDown":
        targetIndex = (index + 1) % buttons.length;
        break;

      case "ArrowUp":
        targetIndex = (index - 1 + buttons.length) % buttons.length;
        break;

      case "Home":
        targetIndex = 0;
        break;

      case "End":
        targetIndex = buttons.length - 1;
        break;
    }

    if (targetIndex !== null) {
      e.preventDefault();
      buttons[targetIndex].focus();
    }
  });
});
