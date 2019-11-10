import Post from '@/modules/Post'
import { Types } from 'mongoose';

const ObjectId = Types.ObjectId

export const deletePost = (request, response) => {
  const _id = ObjectId(request.params.postId)

  Post.deleteOne({ _id }, (err, docs) => {
    if (!err) {
      response.sendStatus(200)
    }
  })
  
};

export default deletePost;
