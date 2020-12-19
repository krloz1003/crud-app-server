const { create, update } = require('../models/post')
const Post = require('../models/post')

module.exports = {
    async getPosts() {
        // El sort se encargara de ordenar los posts de más reciente a menos usado
        // releaseDate, que es la fecha de lanzamiento de estos.
        const Posts = await Post.find({}).sort({ "releaseDate": -1 })
        return Posts
    },
    async getPosts(id) {
        const currentPost = await Post.findById(id)
        return currentPost
    },
    async createOrUpdatePost(post) {
        if(post._id) {
            const updatedPost = await Post.findByIdAndUpdate(post._id, post, {
                new: true
            })
            return updatedPost
        }
        const newPost = await Post.create(post)
        return newPost
    },
    async deletePost(id) {
        const deletePost = await Post.findByIdAndRemove(id)
        return deletePost
    }
}