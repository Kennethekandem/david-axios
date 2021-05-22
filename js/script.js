window.onload = () => {

    const base_url = 'https://jsonplaceholder.typicode.com';
    const postButton = document.getElementById('postRequest');

    postButton.addEventListener('click', async () => {
        
        let newPost = {
            title: 'Hello from kenneth',
            body: 'This is thw content of my post',
            userId: 1
        };

        try {

            let post =  await axios.post(base_url + '/posts', newPost);

            if(post) {
                console.log(post.data);
            }

        }
        catch(e) {
            console.log(e);
        }

    });
    
}