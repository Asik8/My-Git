console.log("done");

function userPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then (data => allPosts(data))
};

function allPosts(posts){
    const PostContainer = document.getElementById('post-container');
    for(const post of posts){
        console.log(post);
        const div = document.createElement('div');
        div.innerHTML = `
        <h4> User:${post.userId} </h4>
        <h5> Post-Title:${post.title} </h5>
        <p>  Post-Description:${post.body} </p>
        `;
        PostContainer.appendChild(div);
    }
}