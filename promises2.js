const posts = [
    { title: "Post One", body: "This is post one" },
    { title: "Post Two", body: "This is post two" },
  ];
  
const getPosts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
          output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
        resolve();
      }, 1000);
    });
  };
  
const createPost = (post) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        posts.push(post);
        resolve(true);
      }, 2000);
    });
  };
  
const deleteLastPost = (index) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (index < 0 || index >= posts.length) {
          reject(new Error("Invalid index"));
        } else {
          posts.splice(index, 1);
          resolve(true);
        }
      }, 2000);
    });
  };
  
  const user = {
    username: 'Vivek',
    lastActivityTime: '17th march'
  };

  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        user.lastActivityTime = new Date().getTime();
        resolve(user.lastActivityTime);
      }, 1000);
    });
  }
  Promise.all([createPost({title: 'Post three', body: 'This is Post three'}), updateLastUserActivityTime(),]).then(([createPostResolves, updateLastUserActivityTimeResolves]) => {
    console.log("User last activity time: "+ updateLastUserActivityTimeResolves);
  }).then(getPosts)
  .then(() => deleteLastPost(2))
    .then(() => getPosts())
  .catch((error) => console.log(error));
  