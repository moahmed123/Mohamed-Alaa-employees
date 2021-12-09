import React from 'react'

const List = (props: any) => {
    console.log(props)  
    const currentDate = `${new Date().getFullYear()}-${ new Date().getUTCMonth() + 1 }-${new Date().getUTCDate()}`
    const renderData = () => {        
        
         return  props.employees.map((data: any, key: number) => {
                return (                    
                    <li className="List" key= {key}>                                
                        <h2>{data.EmpID}</h2>
                        <div className="List-header">                                                        
                            <h2>{data.ProjectID}</h2>
                        </div>
                        <p>{data.DateFrom}</p>
                        <p className="List-note">
                            {
                                data.DateTo? data.DateTo : currentDate
                            }
                        </p>
                    </li>
                )
            })                  
    }
    return (
        <>
            <h2> the list is </h2>
            <ul>
                <li className="List">
                    <h3>EmpID</h3>
                    <div className="List-header">                                                        
                        <h3>ProjectID</h3>
                    </div>
                    <h3>DateFrom</h3>
                    <h3 className="List-note">DateTo</h3>
                </li>
               {renderData()}
            </ul>
        </>
    )
}

export default List; 