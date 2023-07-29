export const postUser = async (req,res)=>{
    
    const {name, about, avatar} = req.body
    try{
        const newUser = await user.create({name, about, avatar})
        res.send({newUser, error: false})
    }
    catch(err){
        res.status(500).send({error:true, message: err.message })
    }
}