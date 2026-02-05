import React from 'react'

export default function OnlineOrder() {
  return (
    <>
      <section className="w3l-bottom-grids-6 py-5">
        <div className="container py-lg-5 py-md-4">
            <span className="subhny-title text-center mb-2">Online Order</span>
            <h3 className="hny-title text-center mb-5">How it works?</h3>
            <div className="grids-area-hny main-cont-wthree-fea row">
                <div className="col-lg-4 col-md-6 grids-feature">
                    <div className="area-box">
                        <span className="fa fa-mobile"></span>
                        <h4><a href="#feature" className="title-head">Online Food Ordering</a></h4>
                        <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus
                            orci.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-md-0 mt-4">
                    <div className="area-box box-active">
                        <span className="fa fa-gift"></span>
                        <h4><a href="#feature" className="title-head">Food Delivery</a></h4>
                        <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus
                            orci.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 grids-feature mt-lg-0 mt-4">
                    <div className="area-box">
                        <span className="fa fa-building-o"></span>
                        <h4><a href="#feature" className="title-head">Drive in Restaurant</a></h4>
                        <p>Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus
                            orci.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
