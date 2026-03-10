const textarea = document.getElementById("editor-kecil");

document.getElementById("huruf-besar").onclick = () => {
  textarea.value = textarea.value.toUpperCase();
};

document.getElementById("huruf-kecil").onclick = () => {
  textarea.value = textarea.value.toLowerCase();
};

document.getElementById("huruf-paragraf").onclick = () => {
  textarea.value = textarea.value
    .split(". ")
    .map(k => k.charAt(0).toUpperCase() + k.slice(1))
    .join(". ");
};