import React, { useState } from 'react';
import List from './component/List';
import SearchForList from './component/SearchForList';
import './App.css';

interface PState {
    people:{
        EmpID: number,
        ProjectID: number, 
        DateFrom: string,
        DateTo: string | null
    }[]
}
/**
 * 
    The text file is in format:  
        EmpID,
        ProjectID, 
        DateFrom, 
        DateTo      
    data:  
        143, 12, 2013-11-01, 2014-01-05 
        218, 10, 2012-05-16, NULL 
        143, 10, 2009-01-01, 2011-04-27
 */

function App() {
    const [employees, setEmployees] = useState<PState['people']>([
        {
            EmpID: 143,
            ProjectID: 12, 
            DateFrom: "2013-11-01",
            DateTo: "2014-01-05"
        },
        {
            EmpID: 218,
            ProjectID: 10, 
            DateFrom: "2012-05-16",
            DateTo: null
        },
        {
            EmpID: 133,
            ProjectID: 10, 
            DateFrom: "2009-01-01",
            DateTo: "2011-04-27"
        },
        {
            EmpID: 153,
            ProjectID: 9, 
            DateFrom: "2009-01-01",
            DateTo: "2011-04-27"
        },
        {
            EmpID: 143,
            ProjectID: 9, 
            DateFrom: "2009-01-01",
            DateTo: "2011-04-27"
        }
    ]);

    return (
        <div className="App">
            <List employees = {employees}/>
            {/* people = {people} setPeople = {setPeople} */}
            <SearchForList employees = {employees} setEmployees = {setEmployees}/>
        </div>
    );
}

export default App;
