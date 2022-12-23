
const categoryItemEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemEl.length}`);

categoryItemEl.forEach(categoryItem => {
    const categoryItemText = categoryItem.firstElementChild.textContent;
    const categoryItemSum = categoryItem.querySelectorAll('li').length;
    
    console.log(`Category: ${categoryItemText}`);
    console.log(`Elements: ${categoryItemSum}`);

});

