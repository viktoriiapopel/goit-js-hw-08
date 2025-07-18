
const categoriesList = document.getElementById('categories');


const items = categoriesList.querySelectorAll('li.item');


console.log(`Number of catecories: ${items.length}`);

items.forEach(item => {
    const title = item.querySelector(".title").textContent;
    const listItems = item.querySelectorAll(".list li");
    console.log(`Category: ${title}`)
    console.log (`Elements: ${ listItems.length }`)
})