function removeFlags(object:{flag;boolean}){
    delete object.flag;
    return object;
}
let anyObject =removeFlags({flag:true}); 
    
