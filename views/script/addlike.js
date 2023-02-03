/*const likeBtns = document.querySelectorAll('.like-btn');

likeBtns.forEach(btn => {
    btn.addEventListener('click', async e => {
        const postId = e.target.dataset.postId;
        try {
            const response = await fetch(`/like`, {
                method: 'POST',
                body: JSON.stringify({ post_id: postId }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await response.json();
            if (data.success) {
                e.target.innerHTML = 'Unlike';
                e.target.classList.add('unlike-btn');
                e.target.classList.remove('like-btn');
            }
        } catch (err) {
            console.log(err);
        }
    });
});

document.addEventListener('click', async e => {
    if (e.target.classList.contains('unlike-btn')) {
        try {
            const postId = e.target.dataset.postId;
            const response = await fetch(`/like/${postId}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            if (data.success) {
                e.target.innerHTML = 'Like';
                e.target.classList.add('like-btn');
                e.target.classList.remove('unlike-btn');
            }
        } catch (err) {
            console.log(err);
        }
    }
});
*/

const likeBtns = document.querySelectorAll('.like-btn');

likeBtns.forEach(btn => {
    btn.addEventListener('click', async e => {
        alert("ok")
      
});


