import {useState, useEffect} from 'react'
import './key.css'
function Keycodes() {
    const [key,setkey] = useState()
    useEffect(()=>{
      window.addEventListener('keydown',(e)=>{
        setkey(e);
      })
    
    },[])
      return (
    
        <div>
          { key && <>
            <div className="key">
                {key.key}
                <small>
                    event.key
                </small>
            </div>
                <div className="key">
                {key.keyCode}
                    <small>event. keycode</small>
                </div>
                   <div className="key">
                   {key.code}
                   <small>event.code</small>
               </div>
               </>
    }
    {!key &&
                <div className="key">
                    press any key to get the keyCode
                </div>
    }
        </div>
    
      );
    }

export default Keycodes