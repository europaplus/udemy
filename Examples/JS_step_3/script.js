// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

for (let node of document.body.children) {
    if (node.nodeName === '#text') {
        continue;
    }
    console.log(node);
}