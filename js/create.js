const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();

    const data = {
        author: form.author.value,
        body: form.body.value,
        likes: 0,
    }

    await fetch('http://localhost:3000/blogs', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });

    window.location.replace("/index.html")
}

form.addEventListener('submit', createPost)