var homelist=(req,res)=>{
    res.render('index',{title:'23EG107E22'});
};
var locationInfo=(req,res)=>{
    res.render('index',{title:'Location 23EG107E22'});
};

var addReview=(req,res)=>{
    res.render('index',{title:'Pranav'});
};
module.exports={
    homelist,
    locationInfo,
    addReview
};