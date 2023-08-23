const axios = require('axios');

const gitIdController = (async (req, res, next) => {
    console.log("In git id controller")
   const {owner, repository, oid} = req.params;

    if(!owner || !repository || !oid){
        let missingField = [];
        if(!owner){
            missingField.push('owner');
        }
        if(!repository){
            missingField.push('repository');
        }
        if(!iod){
            missingField.push('iod');
        }
        return res.status(400).json({error:`Missing paramaeters ${missingField}`});
    }

try{

 const {data} = await axios.get(`https://api.github.com/repos/${owner}/${repository}/commits/${oid}`,{
    headers:{
        'Authorization':"Bearer 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",
        'Accept': "application/vnd.github+json",
        'X-GitHub-Api-Version': "2022-11-28"
    },
})

// console.log(data);
return res.status(200).json({data});
}

catch(error){
console.log(error.stack);
return res.status(500).json(error)
}
})

const gitCommitController = (async (req, res, next) => {
    const {owner, repository, base, head} = req.params;

    if(!owner || !repository || !base || !head){
        let missingField = [];
        if(!owner){
            missingField.push('owner');
        }
        if(!repository){
            missingField.push('repository');
        }
        if(!base){
            missingField.push('base');
        }

        if(!head){
            missingField.push('head');
        }
        return res.status(400).json({error:`Missing paramaeters ${missingField}`});
    }

    try{

        const {data} = await axios.get(`https://api.github.com/repos/${owner}/${repository}/compare/${base}...${head}`,{
           headers:{
               'Authorization':"Bearer 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",
               'Accept': "application/vnd.github+json",
               'X-GitHub-Api-Version': "2022-11-28"
           },
       })
       
       return res.status(200).json({data});
       }
       
       catch(error){
       console.log(error.stack);
       return res.status(500).json(error)
       }

})

module.exports = {
    gitIdController,
    gitCommitController
}