import React from 'react';
export default function(props){
    const {liList}=props;    
    const lis = liList && typeof(liList)!=='string' && liList.length>0 ? liList.map((el,index)=>{        
        const liStyle = {
            position:"absolute",            
            display:"block",
            width:'30px',
            height:'40px',
            border:'1px solid black',
            top: el.top, 
            left: el.left,
            transform:el.position
                 
        };
        return <li key={`${el.top}_{el.left}`} style={liStyle}>{el.top}</li>
    }) : "err";
    return(
        <ul style={{position:"relative", width:'200px', height: '200px'}}>
            {lis}           
        </ul>
    )
}