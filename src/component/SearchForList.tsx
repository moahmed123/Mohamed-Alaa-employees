import React from 'react';

const SearchForList = (props: any) => {    
    const  Projects_employees:any = [];
    const  Pro_employees:any = [];    
    const findDuplicates = (arr: any[]) => arr.filter((item:any, index:number) => arr.indexOf(item) != index);    
    return (
        <>
            <h2> you can find the pair of employees that have worked as a team  </h2>
            <button 
            className="SearchToList-btn"
            onClick = {()=>{
                // Maping For all Employees Work To Gether.                 
                props.employees.map((employ:any, key:number)=>{
                    Projects_employees.push(employ.ProjectID)
                    if(key == props.employees.length -1 ){                        
                        const x = findDuplicates(Projects_employees);
                        props.employees.map((employW:any, keyw:number)=>{
                            for(let index of x){
                                if(employW.ProjectID == index){
                                    Pro_employees.push(employW)
                                }                                
                                if(key == props.employees.length -1 ){                                                                        
                                    props.setEmployees(Pro_employees);
                                }
                            }
                        })
                    }
                })                
            }} 
            >Find For employees</button>
        </>
    )
}

export default SearchForList; 