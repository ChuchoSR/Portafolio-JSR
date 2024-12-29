import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

const FooterApp = () => {
    return (
        <>
            <div className="footer-container">
                <MDBFooter bgColor='light' className='text-center text-lg-left'>
                    <div className='text-center p-3' >
                        &copy; {new Date().getFullYear()} Copyright:{' '}
                        <p>Jesús Sierra</p>
                    </div>
                </MDBFooter>
            </div>
        </>
    )
}

export default FooterApp