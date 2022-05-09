const express = require('express');
const res = require('express/lib/response');

const routers =express.Router();
const User = require('../models/user')

//Getting all Users

router.get('/',async (req,res)=> {
//res.send('Hello World')
try {
    const users1 = await user.find();
    res.json(users1);
}
catch (err) {
res.status(500).json({message: err.message})
}
})

//Getting one User
router.get('/:id',getUser,(req,res)=> {
    res.send(res.user)
})

//Adding one user
router.post('/',getUser,(req,res)=> {
    const user =new Users({
        name: req.body.name,
        email: req.body.email
    })
    try {
        const newUser = await user.save();
        res.status(201).json(newUser)
    } catch (err)
    {
res.status(400).json({message: err.message})
    }

})

//Update one User
router.patch('/',getUser,async(req,res)=> {
    if (req.body.name!=null)
    {
        res.user.name=req.body.name
    }
    if (req.body.email!=null)
    {
        res.user.email=req.body.email
    }
    try
    {

        const updatedUser = await res.user.save();
        res.json(updatedUser);
    }catch (err)
    {
        res.status(400).json({message: err.message})

    }
})


//Delete one user
router.delete('/:id',getUser,async(req,res)=> {
  try{

    await res.user.remove();
    res.json({message:'Deleted User'})
  }
  catch (error)
  {
    res.status(500).json({message: err.message})
  }
    res.user  
})

//---------------------------------------
async function getUser (req,res, next)
{let user;
    try{
        user = await User.findById(req.params.id)
        if (user ==null)
        {
            return res.status(404).json({message: 'Can not find User'})
        }
    }
    catch(err)
    {
        return res.status(500).json({message: err.message})
    }
    res.user= user;
    next();

}

module.exports=router;