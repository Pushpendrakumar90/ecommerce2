import React from 'react'
import AllUser from './AllUsers'
import BreadCrumb from '../components/BreadCrumb'
import { useSearchParams } from 'react-router-dom'

export default function AdminControl() {
    let [SearchParams] = useSearchParams();

    let id = SearchParams.get('id');   
    
    return (
        <>
            <BreadCrumb title={'Admin-Controls'} /> 
            {/* <div style={{ margin: '10px auto', display: 'block', textAlign: 'center' }}></div> */}

            <AllUser />


        </>
    )
}
