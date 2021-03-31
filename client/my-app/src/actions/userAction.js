import axios from '../config/axios'

export const setUser=(user)=>{
    return{type:'SET_USER',payload:user}
}




export const startRegisterUser=(formData,redirect)=>{
    return(dispatch)=>{
        axios.post('/register',formData)
        .then((response)=>{
            if(response.data.hasOwnProperty('errors')){
                alert (response.data.message)
            }else{
                alert('you have registered succesfully')
                 redirect()
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}


export const startGetUser=()=>{
    return(dispatch)=>{
        console.log("hii")
        axios.get('/dashboard')
          .then((response) => {
              
            const users = response.data;
            dispatch(setUser(users))
            

          })
          .catch((err) => {
            console.log(err);
          });
    }

}