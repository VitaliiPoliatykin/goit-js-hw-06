const catElement = document.querySelectorAll(`.item`);
console.log(`Number of categories:`, catElement.length);

catElement.forEach(function (categories) {
    console.log(`Category:`, categories.firstElementChild.textContent);
    console.log(`Elements:`, categories.lastElementChild.children.length);
})