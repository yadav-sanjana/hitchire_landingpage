import React from 'react';
import './style.scss';
import FormContent from './FormContent';

function Banner(props) {
    return (
        <section className="tf-slider sl1 parallax">
                <div className="tf-container">
                <div className="row">
                    <div className="col-lg-8 col-md-8">
                        <FormContent />
                    </div>
                </div>
                </div>
                <div className="overlay"></div>
            </section>
    );
}

export default Banner;