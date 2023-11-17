import React from "react";
import Records from './record.json';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Icon from './icon';
function fectchdata()
{
    return(
        <table className="table">
          {
            Records && Records.map(record =>{
                return (
                   
                    <tr className="box" key={record.id}>
                        <td>
                     <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div> {record.title}</div>
                    <div>
                    <Icon icon={faThumbsUp} color="yellow"/>
                    </div>
                    </div>
                    <br></br>
                    
                    {record.content}<br/>
                    <br/>
                    {record.tech && record.tech.map(data=> {
                            return(
                                <div key={record.id}>
                                    -{data.name}
                                    <br></br>
                                    -{data.name1}
                                    <br></br>
                                    -{data.name2}
                                   

                                </div>
                            )
                        })}
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
        <br />
        <div style={{display:"inline", color: "#7CB9E8"}}>thought</div> by anujgosalia
        </div>
        <div>
        <br />
        january 21 · 1 min Read · 156 Views
        </div>
    </div>
                        </td>
                    </tr>
                )
            })
          }
        </table>
    )
}
export default fectchdata;