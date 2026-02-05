import React from 'react'
import PopularGoods from '../components/PopularGoods';
import BreadCrumb from '../components/BreadCrumb';
import MenuItem from '../components/MenuItem';

export default function Menu() {
    return (
        <>
            <BreadCrumb title={'Menu List'} />
            <div style={{ margin: '10px auto', display: 'block', textAlign: 'center' }}></div>


            <div className='container'>

            

                <div className="row">
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                </div>
            </div>


            {/* popular goods */}
            <PopularGoods />
        </>
    )
}
