import star from '../assets/images/icon-star.svg';
import anne from '../assets/images/image-anne.jpg';
import colton from '../assets/images/image-colton.jpg';
import irene from '../assets/images/image-irene.jpg';

function Main() {
    return (
        <main>
            <div className="service-presentation">
                <div className="service-presentation__text">
                    <h1 className="service-presentation__text-title">10,000+ of our users love our products.</h1>
                    <p className="service-presentation__text-content">We only provide great products combined with 
                    excellent customer service. See what our satisfied customers are saying about our 
                    services.</p>
                </div>
                <div className="service-presentation__rating">
                    <div className="service-presentation__rating-1">
                        <div className="service-presentation__rating-stars">
                            <img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" />
                            <img src={star} alt="" /><img src={star} alt="" />
                        </div>
                        <div className="service-presentation__rating-text">
                            Rated 5 Stars in Reviews
                        </div>
                    </div>
                    <div className="service-presentation__rating-2">
                        <div className="service-presentation__rating-stars">
                            <img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" />
                            <img src={star} alt="" /><img src={star} alt="" />
                        </div>
                        <div className="service-presentation__rating-text">
                            Rated 5 Stars in Report Guru
                        </div>
                    </div>
                    <div className="service-presentation__rating-3">
                        <div className="service-presentation__rating-stars">
                            <img src={star} alt="" /><img src={star} alt="" /><img src={star} alt="" />
                            <img src={star} alt="" /><img src={star} alt="" />
                        </div>
                        <div className="service-presentation__rating-text">
                                Rated 5 Stars in BestTech
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-reviews">
                <div className="reviewer">
                    <div className="reviewer__profile">
                        <img className="reviewer__profile-image" src={colton} alt="Colton image" />
                        <h2 className="reviewer__profile-name">Colton Smith</h2>
                        <span className="reviewer__profile-description">Verified Buyer</span>
                    </div>
                    <p className="reviewer__text">{'"'}We needed the same printed design as the one we had 
                    ordered a week prior. Not only did they find the original order, but we also received 
                    it in time.Excellent!{'"'}</p>
                </div>
                <div className="reviewer">
                    <div className="reviewer__profile">
                        <img className="reviewer__profile-image" src={irene} alt="Irene image" />
                        <h2 className="reviewer__profile-name">Irene Roberts</h2>
                        <span className="reviewer__profile-description">Verified Buyer</span>
                    </div>
                    <p className="reviewer__text">{'"'}Customer service is always excellent and very quick 
                    turn around. Completely delighted with the simplicity of the purchase and the speed of 
                    delivery.{'"'}</p>
                </div>
                <div className="reviewer">
                    <div className="reviewer__profile">
                        <img className="reviewer__profile-image" src={anne} alt="Anne image" />
                        <h2 className="reviewer__profile-name">Anne Wallace</h2>
                        <span className="reviewer__profile-description">Verified Buyer</span>
                    </div>
                    <p className="reviewer__text">{'"'}Put an order with this company and can only praise 
                    them for the very high standard. Will definitely use them again and recommend them to 
                    8everyone!{'"'}</p>
                </div>
            </div>
        </main>
    );
}

export default Main;