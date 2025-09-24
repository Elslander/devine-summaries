const params = new URLSearchParams(window.location.search);

const file = params.get("file");
const filenameWithExt = file.split("/").pop();
const filename = filenameWithExt.replace(/\.md$/, "");
const name = filename.replaceAll("-", " ");

const $noteTitle = document.querySelector(".note__title");
$noteTitle.textContent = name
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

const main = document.querySelector("#note-content");

if (!file) {
  main.textContent = "No note specified.";
} else {
  fetch(`assets/notes/${file}`)
    .then((res) => {
      if (!res.ok) throw new Error("Note not found.");
      return res.text();
    })
    .then((md) => {
      main.innerHTML = marked.parse(md);
      hljs.highlightAll();
    })
    .catch((err) => {
      main.textContent = "Sorry, this note could not be loaded.";
      console.error(err);
    });
}
