// meta
import Feds from "./feds";

const feds = new Feds();
window.feds = feds;
document.addEventListener("DOMContentLoaded", feds.init.bind(feds));
