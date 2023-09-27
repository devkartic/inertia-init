import { Link } from '@inertiajs/react';

export default function Footer({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <div className="container-fluid bg-light py-5">
                <div className="row">
                    <div className="container">
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p className="fs-6">© 2023 Copyright E-Shop. All Rights Reserved</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Designed & Developed by  <span className="text-primary" title="Source Title">Crazy Coder's Cafe</span>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </>
    );
}
