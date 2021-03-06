const Field=require('../Repository/Field')
const Repository = new Field();
const Product_Category=require('../Repository/Product_Category')
const RepositoryProduct_Category = new Product_Category();


module.exports =class Field {
    findAll = async () => {
        try {
        const rs = await Repository.findAll();
        if (Object.keys(rs).length == 0) {
            return Promise.reject({messager :"Not Found"} )
        }
        return Promise.resolve({result : rs})
    } catch (error) {
        return Promise.reject({messager :error} )
    }
    }
     create = async (item) => {
        try {
            if(Object.keys(item).length==0)
            return Promise.reject({ messager : "fail! create",});
            const rs = await Repository.create(item);
            if(rs) {
                return Promise.resolve({
                messager : "Sucsuess",
                Item:item
            })
            }
        return Promise.reject({messager : "Create Faild "});
        } catch (error) {
            return Promise.reject({messager : "Create Faild "});
        }
        
    }
     update = async (id, item) => {
        try{
        const rs = await Repository.update(id, item);
        if (rs) {
            return Promise.resolve({ messager: "Sucsess" })
           
        }
        return Promise.reject({ messager: "Update Faild" })
    } catch (error) {
        return Promise.reject({ messager: "Update Faild" } )
    }
    }
     delete = async (id) => {
         try{
          await RepositoryProduct_Category.deletefield(id)
           const rs = await Repository.delete(id)
           if (rs == 0) {
            return Promise.reject({ messager: "Delete Faild field" })
            }
           return Promise.resolve({messager : "Sucsuess"})
    } catch (error) {
        return Promise.reject({ messager: "Delete Faild" } )
    }
    }

     findOne = async (id) => {
        try {
            const rs  = await Repository.findOne(id);
            if (Object.keys(rs).length == 0) {
                return Promise.reject({ messager: " Field not exists ! "  });
            }
            if (rs) {
                return Promise.resolve(rs)
            }
        } catch (error) {
            return Promise.reject({ messager: " Field not exists ! "  } )
        }
    }


     findItem = async (item) => {
         try {
            const rs = await Repository.findItem(item);
            if (Object.keys(rs).length == 0) {
                return Promise.reject({messager :"Not Found findItem"} )
            }
            return Promise.resolve({result : rs})
             
         } catch (error) {
            return Promise.reject({messager :"Not Found findItem"})
         }

    }
    findcategory= async (id) => {
        try {
           const rs = await RepositoryProduct_Category.findItem({fieldId:id});
           if (Object.keys(rs).length == 0) {
               return Promise.reject({messager :"Not Found findcategory"} )
           }
           return Promise.resolve({result : rs})
            
        } catch (error) {
           return Promise.reject({messager :"Not Found findcategory"})
        }

   }



}