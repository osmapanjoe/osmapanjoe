// toggel
const menuKu = document.querySelector(`.sesi`);

// ketika di klik
document.querySelector(`#tumpuk`).onclick = () => {
menuKu.classList.toggle(`active`);
};

// tutup luar menu tumpuk
const tumpuk = document.querySelector(`#tumpuk`);
document.addEventListener(`click`, function(e) {
    if(!tumpuk.contains(e.target) && !menuKu.contains(e.target)) {
        menuKu.classList.remove(`active`);
    }
});