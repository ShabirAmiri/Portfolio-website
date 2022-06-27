"use strict";

//sellecting classes to manipulate
const modals = {
  langModal: document.querySelector(".langModal"),
  projectModal: document.querySelector(".projectModal"),
  contactsModal: document.querySelector(".contactsModal"),
  skillsModal: document.querySelector(".skillsModal"),
};

const toolbar = document.querySelector(".toolbar");
const overlay = document.querySelector(".overlay");

let closeModalBtn = document.querySelector(".closeModalBtn");

//function to close model
const closeModal = function () {
  const generalModal = document.querySelector(".modal:not(.hidden)");
  generalModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//functions to open moda
const openModal = function (modal) {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// to open modals
toolbar.addEventListener("click", (e) => {
  const btnClasses = Array.from(e.target.classList);

  if (btnClasses.indexOf("openModalBtn") >= 0) {
    const targetModal = e.target.dataset.target;
    openModal(modals[targetModal]);
  }
});

//to close modal
document.addEventListener("click", (e) => {
  if (e.target.className.indexOf("closeModalBtn") > -1) {
    closeModal();
  }
});

overlay.addEventListener("click", closeModal);

//to close modal using Esc button
document.addEventListener("keydown", (e) => {
  const generalModal = document.querySelector(".modal");
  if (
    generalModal &&
    e.key === "Escape" &&
    !generalModal.classList.contains("hidden")
  ) {
    closeModal();
  }
});
