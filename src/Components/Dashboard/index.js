import { Description } from "@mui/icons-material";
import { useState } from "react"
import { PostingAd } from "../../config/firebase";



export default function PostAd() {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState('');


    const submitAd = async () => {
        try{
            await PostingAd(title,description,price)
        }
        catch(e){
            alert(e.message)
        }


  
    }
  
    return <div>
      <h2> Ad Post Form </h2>
      <br/>
      <input
      onChange={e => setTitle(e.target.value)} 
      placeholder="title" />
      <br/>
      <input
      onChange={e => setDescription(e.target.value)} 
      placeholder="description" />
      <br/>
      <input
      onChange={e => setPrice(e.target.value)} 
      placeholder="price" />
      <br/>
   
      <br/>
  
      <button onClick={submitAd}>Submit Ad</button>
    </div>
  }