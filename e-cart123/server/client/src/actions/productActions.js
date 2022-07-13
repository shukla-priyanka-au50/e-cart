import axios from 'axios';

export const getAllProducts=()=>dispatch=>{
    dispatch({type:'GET_PRODUCTS_REQUEST'})

    axios.get('/api/products/getallproducts').then(res=>{
        console.log(res);
        dispatch({type:'GET_PRODUCTS_SUCCESS',payload:res.data})
    }).catch(err=>{
        console.log(err);
        dispatch({type:'GET_PRODUCTS_FAILED',payload:err})
        
    })
}

export const getProductById=(productid)=>dispatch=>{
    dispatch({type:'GET_PRODUCTBYID_REQUEST'})

    axios.post('/api/products/getproductbyid',{productid}).then(res=>{
        console.log(res);
        dispatch({type:'GET_PRODUCTBYID_SUCCESS',payload:res.data})
    }).catch(err=>{
        console.log(err);
        dispatch({type:'GET_PRODUCTBYID_FAILED',payload:err})
        
    })
}

export const filterProducts=(searchKey,sortKey,category)=>dispatch=>{
    var filterproducts;
    dispatch({type:'GET_PRODUCTS_REQUEST'})
    axios.get('/api/products/getallproducts').then(res=>{
      
        filterproducts = res.data
        if(searchKey)
        {
            filterproducts = res.data.filter(product=>{return product.name.toLowerCase().includes(searchKey)})
        }
        if(sortKey !== 'popular')
        {
            if(sortKey=='htl')
            {
                filterproducts = res.data.sort((a,b)=>{
                    return -a.price + b.price
                })
            }
            else{
                filterproducts = res.data.sort((a,b)=>{
                    return a.price - b.price
                })
            }
        }
        if(category!=='all')
        {
            filterproducts = res.data.filter(product=>{return product.category.toLowerCase().includes(category)})
        }
        dispatch({type:'GET_PRODUCTS_SUCCESS',payload:filterproducts})
        


    }).catch(err=>{
        dispatch({type:'GET_PRODUCTS_FAILED'})
    })

}