
/*-------------------------Create API-------------------------------------------*/


const createPost = async (req, res) => {
    try {
        let db = req.con;
        let user_id = Math.floor(Math.random()*90000)+1000000;
        let data={
            user_id: user_id,
            file_name: req.file.filename 
        }
// console.log(data)
        db.query("insert into posts set ?", data, (error)=>{
            if(error)
                if(error) 
                return res.status(400).send({status: false, message: error.message});
                return res.status(201).send({status: "Success", message: "User Created!",data: data});
        })
    } catch (error) {
        return res.status(500).send({status: false, message: error.message});
    }
};

/*--------------------------Get API------------------------------------------*/


const getPost = async (req, res) => {
    try {
        let db = req.con;
        db.query("select * from posts", (error, rows)=>{
            if(error){
                return res.status(400).send({status: false, message: error.message});
            }else{
                return res.status(201).send({status: true, count: rows.length, message: `All Data Fetched Successfully`, data: rows});
            }
        })
    } catch (error) {
        return res.status(500).send({status: false, message: error.message});
    }
};





module.exports={getPost,createPost}