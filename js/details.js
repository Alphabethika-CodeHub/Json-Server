const id = new URLSearchParams(window.location.search).get('id');
container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
    const res = await fetch('http://localhost:3000/blogs/' + id);
    const post = await res.json();
    const template = `
        <h1>${post.author}</h1>
        <p>${post.body}</p>
    `
    container.innerHTML = template;
}

deleteBtn.addEventListener('click', async (e) => {
    const res = await fetch('http://localhost:3000/blogs/' + id, {
        method: 'DELETE'
    });
    window.location.replace('/index.html');
})

window.addEventListener('DOMContentLoaded', () => renderDetails());