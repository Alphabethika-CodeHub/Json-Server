const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPosts = async (search) => {
    let URI = "http://localhost:3000/blogs?_sort=likes&_order=desc";

    if (search) {
        URI += `&q=${search}`;
    }

    const res = await fetch(URI);
    const posts = await res.json();

    let template = '';
    posts.forEach(post => {
        template +=
            `   <div>
                <h2>${post.author}</h2>
                <p><small>${post.likes} Likes</small></p>
                <p>${post.body.slice(0, 200)}</p>
                <a href="/details.html?id=${post.id}">read more...</a>
            </div>`
    });
    container.innerHTML = template;

}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPosts(searchForm.search.value.trim());
});

window.addEventListener('DOMContentLoaded', () => renderPosts());