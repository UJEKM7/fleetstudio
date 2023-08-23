const axios = require('axios');
const ansiRegex = require('ansi-regex');
const checkParamEmpty = require('../utils/checkParamEmpty');

const gitIdController = (async (req, res, next) => {
    
    const checkParam = checkParamEmpty(req.params, ['owner','repository', 'oid']);
    if(!checkParam.success) return res.status(400).json({message:"Parameters missing ", ...checkParam.result})
    
    try{
    const {owner, repository, oid} = req.params;
    const {github_token} = req.body;
    if(!github_token) return res.status(400).json({message:"Empty github_token."});

    const {data} = await axios.get(`https://api.github.com/repos/${owner}/${repository}/commits/${oid}`,{
    headers:{
        'Authorization':`Bearer ${github_token}`,
        'Accept': "application/vnd.github+json",
        'X-GitHub-Api-Version': "2022-11-28"
    },
})

return res.status(200).json({data});
}catch(error){
    console.log(error.stack);
    return res.status(500).json(error)
  }
})

const gitCommitController = (async (req, res, next) => {
    
    const checkParam = checkParamEmpty(req.params, ['owner','repository', 'base', 'head']);
    if(!checkParam.success) return res.status(400).json({message:"Parameters missing ", ...checkParam.result})
    
    try{
        const {owner, repository, base, head} = req.params;
        const {github_token} = req.body;
        if(!github_token) return res.status(400).json({message:"Empty github_token."});

        const {data} = await axios.get(`https://api.github.com/repos/${owner}/${repository}/compare/${base}...${head}`,{
           headers:{
               'Authorization':`Bearer ${github_token}`,
               'Accept': "application/vnd.github+json",
               'X-GitHub-Api-Version': "2022-11-28"
           },
       })
   
    const { data: diffData } = await axios.get(data.diff_url);

    // Remove ANSI escape codes from the diff content
    const diffWithoutAnsi = diffData.replace(ansiRegex(), '');

    return res.status(200).send(diffWithoutAnsi);
    }catch(error){
       console.log(error.stack);
       return res.status(500).json(error)
    }
})

module.exports = {
    gitIdController,
    gitCommitController
}