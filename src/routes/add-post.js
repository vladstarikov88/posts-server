import Post from '@/modules/Post'

export const addPost = (request, response) => {
    const post = new Post({
      title: request.body.title,
      message: request.body.message,
    })

    console.log(post)

    post
      .save()
      .then(data => {
        response.status(200);
        response.json(data)
      })
      .catch(err => {
        throw new Error(err)
      });
};

export default addPost;
