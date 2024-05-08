import express from 'express';
const router = express.Router();



let posts = [
    { id:1, title:'post 1'},
    { id:2, title:'post 2'},
    { id:3, title:'post 3'},
    { id:4, title:'post 4'}
]

// get all posts
router.get('/', (req,res) => {
    // additional query params /api/posts?limit=2
    const limit = parseInt(req.query.limit);
    if ( !isNaN(limit) && limit > 0 ) {
        res.status(200).json(posts.slice(0,limit))
    } else {
        res.status(200).json(posts);    
    }
    
});

// get a post   
router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        res.status(404).json({msg: `not found id: ${id}`});
    } else {
        res.status(200).json(post);
    }
    
});

export default router;