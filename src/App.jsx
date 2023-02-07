import {useState} from 'react'
import Imagesall from './component/Imagesall'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

const App = () => {
  
  let [item,setItem] = useState(Imagesall)

  let handleClick = (categItem)=>{
    const updatedItem = Imagesall.filter((filter)=>{
      return filter.cateogory === categItem;
    })
    setItem(updatedItem)
  }
  return(
    <>
    <div className='navbar navbar-light d-flex justify-content-center'>
    <button  className='btn bg-dark me-3 text-white' onClick={()=>setItem(Imagesall)}>Imagesall</button>
    <button className='btn bg-dark me-3 text-white' onClick={()=>handleClick('fruits')}>Fruits</button>
    <button className='btn bg-dark me-3 text-white'onClick={()=>handleClick('bikes')}>bikes</button>
    <button className='btn bg-dark text-white' onClick={()=>handleClick('vegetables')}>Vegetables</button>
    </div>

    <div className='container'>
     {
        item.map(({name,image,cateogory},id)=>{
            return(
              <div>
                  <div  key ={id} className='card mt-3 ' style={{width: "16rem" }}>
                    <img src={image} className='card-img-top p-2' alt="..." />
                      <div className="card-body">
                        <h5 className='card-title'>{name}</h5>
                    
                    </div>
                </div>
               </div>
                
            )
        })
     }
    </div>
    </>
    
  
  )
}

export default App