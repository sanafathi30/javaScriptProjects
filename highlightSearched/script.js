//

function search() {
    let textToSearch = document.getElementById("text_to_search").value;

    let paraghraph = document.getElementById("praghraph");

    textToSearch = textToSearch.replace(/[.*+?^${}()| [\]\\]/g, "\\$&");

    let pattern = new RegExp(`${textToSearch}`, "gi");
}