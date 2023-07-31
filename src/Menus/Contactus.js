import React,{useState,useEffect} from 'react'
import KeyEnter from '../component/KeyEnter'
import './Contactus.css'

const Contactus = () => {
    const [first, setfirst] = useState([])
    const [name, setname] = useState('')
    const [numb, setnumb] = useState('')
    const [remark, setremark] = useState('')
  

    const postt =()=>{
        setname('')
        setnumb('')
        setremark('')
    }
    KeyEnter(postt,'Enter')

    return (
        <>
        {first.map((e)=>(
            <>
             <div className=' contavv container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='maps' >
                            <iframe 
                                src={e.maplink} width="300" height="250"
                                loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                        
                    </div>
              
                         <div className='col-lg-6'>
                        <div className="form-body">
                        <div className="form-row">
                                    <div className="input-group">
                                        <input className="input--style-5" placeholder="Name" type="text" name="company" value={name} onChange={(e)=>setname(e.target.value)} />
                                        <div className='labe'>
                                        </div>
                                    </div>
                                </div><br/>
                                <div className="form-row">
                                    <div className="input-group">
                                        <input className="input--style-5" placeholder="Phone No " type="text" name="company" value={numb} onChange={(e)=>setnumb(e.target.value)} />
                                        <div className='labe'>
                                        </div>
                                    </div>
                                </div><br/>
                                <div className="form-row">
                                    <div className="input-group">
                                        <input className="input--style-5" placeholder="Remark" type="text" name="company"  value={remark} onChange={(e)=>setremark(e.target.value)} />
                                        <div className='labe'>
                                        </div>
                                    </div>
                                </div><br/>
                                <button onClick={postt}>Post</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            </>
        ))}
           
        </>

    )
}

export default Contactus
