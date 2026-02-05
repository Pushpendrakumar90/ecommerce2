import React from 'react'
import BreadCrumb from './BreadCrumb'

export default function Search() {
    return (
        <>
            <BreadCrumb title={'Explore Food'} />
            <div style={{ margin: '10px auto', display: 'block', textAlign: 'center' }}></div>
            <div className='container'>
                <form>

                    <div class="input-group mb-3">
                        <select className='form-control'>
                            <option selected>-- select food --</option>
                            <option > ClassNameic Seafood Pizza</option>
                            <option>Thin Cheese Pizza</option>
                            <option>Shrimp & Olive Pizza</option>
                            <option>Cheeseburger with Salad</option>
                        </select>
                        <span class="input-group-text" id="basic-addon2"><i className="fa fa-search" aria-hidden="true"></i></span>
                    </div>
                </form>
            </div>
        </>
    )
}
