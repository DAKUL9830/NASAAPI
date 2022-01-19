
import React,{useState,useEffect} from 'react'
import logo from '../logo.svg';



function Like() {
    let initialValue=0;
    const [like,setLike]=useState(initialValue);
    const [update,setUpdate]=useState(false);
    const updateLikes=()=>{
        if(!update){
         setLike(prevState=>(prevState+1))
         setUpdate(true)
        }else{
         setLike(prevState=>(prevState-1))
         setUpdate(false)
        }
     }
    return (
        <div>
             <button  className='text' onClick={
                     updateLikes
              
                        }>Like {like}</button>
            
        </div>
    )
}




function NasaAPI() {

    
    const [loading,setLoading]=useState(true)
    const [post,setPost]=useState([]);
   useEffect(()=>{
        fetchPost();
        async function fetchPost(){
            const res=await fetch(
                //API WITH ONE IMAGE
                //'https://api.nasa.gov/planetary/apod?api_key=Ilhz7aqcHFPlCAGsfJL6J7tE0vNvvluNMAKmonI7'

                //API WITH TWO OR MORE IMAGES
                'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY'
               
             
            );
            setLoading(false)
            const data= await res.json();
            setPost(data.photos)
            console.log(data)
            
        }
       
    },[])
  
    if(loading){
        return <div><img src={logo} className="App-logo" alt="logo" /></div>
    }else{
    return (
        //THIS IS PART OF CODE IS FOR FETCHING MULTIPLE IMAGES
        <div>
            <h1>SPACETAGRAMM</h1>
            <div className='Post'>
                {post.map(p=>(
                    <div  key={p.id}>
                        <div>
                        <img src={p.img_src} alt={p.img_src} className='Post__image' />
                        </div>
                        <br/>
                        <br/>
                        <div>
                         {p.earth_date}
                         </div>
                         <br/>
                        <br/>
                         <div>
                         {p.rover.name}
                         </div>
                         <br/>
                        <br/>
                        <Like/>
                        <div >
                      </div>
                        <br/>
                        <br/>

                    </div>
                    
                ))}
                </div>
                
            
        </div>

        //THIS IS PART OF CODE IS FOR FETCHING ONLY ONE IMAGE
       //<div>
           
    //       {loading?
          
    //     (
    //         <img src={logo} className="App-logo" alt="logo" />
         
    //     ):(
    //         <img src={post.url} alt={post.url}  />
            
    //        )}
       
    //       <div>
    //       <p>{post.date}</p>
    //       <h3>{post.explanation}</h3>
    //       </div>
    //       <div >
          
    //       <button className='text'onClick={()=>{
    //             if(like<1)

    //             setLike(like+1)
    //             else
    //             setLike(initialValue)
    //         }
    //     }>Like {like}</button>
        
    //     </div>
    //     </div>
    )
    }
}

export default NasaAPI
