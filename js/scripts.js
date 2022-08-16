/*!
 * Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Activate SimpleLightbox plugin for portfolio items
  new SimpleLightbox({
    elements: "#portfolio a.portfolio-box",
  });

  function getElementsFileds() {
    const contactForm = document.getElementById("contactForm");
    return Array.from(contactForm.querySelectorAll(".form-control")).filter(
      (elem) => !elem.parentElement.classList.contains("d-none")
    );
  }

  function validation() {
    const submitButton = document.getElementById("submitButton");
    const hasError = getElementsFileds().some((elem) => !elem.value?.trim());
    if (hasError && submitButton.classList.contains("disabled")) {
      return;
    }
    if (hasError) {
      submitButton.classList.add("disabled");
      return;
    }
    submitButton.classList.remove("disabled");
  }

  const contactForm = document.getElementById("contactForm");
  getElementsFileds().forEach((elem) => {
    elem.addEventListener("input", validation);
  });

  contactForm.addEventListener("submit", () => {
    const hasError = getElementsFileds().some((elem) => !elem.value?.trim());
    if (hasError) {
      return;
    }
    const bussinesEmail = "webmaster@example.com";
    const nameField = contactForm.querySelector("#name");
    const phoneField = contactForm.querySelector("#phone");
    const messageField = contactForm.querySelector("#message");

    const subject = "¡Deseo contratar al Mariachi Sol de Hidalgo!";
    const body = `
        Nombre completo: ${nameField.value}
        %0D%0A%0D%0A
        Teléfono: ${phoneField.value}
        %0D%0A%0D%0A
        ${messageField.value}
        %0D%0A%0D%0A
    `;

    let mailtoTag = document.createElement("a");
    mailtoTag.href = `mailto:${bussinesEmail}?subject=${subject}&body=${body}`;
    mailtoTag.click();
    mailtoTag.remove();
    mailtoTag = null;
  });
});
