console.log("person1: shows ticket")
console.log("person2: shows ticket")

const preMovie = async()=>{
const promiseWifeBringTickets= new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve()
  },3000)
})
  const getPopcorn= new Promise((resolve,reject)=>resolve())
  
  const getButter= new Promise((resolve,reject)=>resolve())
  
  const getColdDrinks = new Promise((resolve, reject) => resolve())
  
  let ticket= await promiseWifeBringTickets

 console.log("wife:i have the tics")
 console.log("husband:we should go in")
 console.log("husband:no i am hungry")

  let popcorn= await getPopcorn
  
 console.log("husband:i got some popcorn")
 console.log("husband:we should go in")
 console.log("wife:i need some butter in popcorn")
  
  let butter= await getButter

  console.log("husband: I got some butter for popcorn")
  console.log("husband: We should go in")
  console.log("wife: I need some cold drinks with popcorn")

  let coldDrinks= await getColdDrinks
  return ticket
}

preMovie().then(()=>console.log("ticket"))
console.log("person4: shows ticket")
console.log("person5: shows ticket")



const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
};

const createPost = async (post) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    posts.push(post);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const deletePost = async (index) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    posts.splice(index, 1);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const init = async () => {
  await createPost({ title: "Post Three", body: "This is post three" });
  getPosts();
  await deletePost(0);
  getPosts();
};

init();
