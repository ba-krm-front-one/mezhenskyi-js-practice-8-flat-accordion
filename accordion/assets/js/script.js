(() => {
    let accordionButtons = document.querySelectorAll(".accordion");


    function toggleAccordionItem(accordionItem) {
        /* Toggle between adding and removing the "active" class,
         to highlight the button that controls the panel */
        accordionItem.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        let panel = accordionItem.nextElementSibling.querySelector('.panel');
        panel.classList.toggle("show");
    }

    function hideActiveAccordions() {
        let activeAccordion = document.querySelector('.active');
        if (activeAccordion) {
            // скрываем ранее открытый аккордион
            toggleAccordionItem(activeAccordion);
        }
    }

    accordionButtons.forEach(accordionButton => {
        accordionButton.onclick = function (event) {
            // проверяем, активный ли сейчас элемент
            // если нет, тогда нам нужно скрыть другие активные
            if (!this.classList.contains("active")) {
                hideActiveAccordions();
            }

            // меняем состояние выбранного аккордиона
            toggleAccordionItem(this);
        }
    });
})();