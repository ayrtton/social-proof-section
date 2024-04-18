import desktopPatternTop from '../assets/images/bg-pattern-top-desktop.svg';
import desktopPatternBottom from '../assets/images/bg-pattern-bottom-desktop.svg';
import mobilePatternTop from '../assets/images/bg-pattern-top-mobile.svg';
import mobilePatternBottom from '../assets/images/bg-pattern-bottom-mobile.svg';

function Background() {
    return (
        <>
            <div className="desktop-background">
                <div className="desktop-background__pattern-top">
                    <img src={desktopPatternTop} />
                </div>
                <div className="desktop-background__pattern-bottom">
                    <img src={desktopPatternBottom} />
                </div>
            </div>
            <div className="mobile-background">
                <div className="mobile-background__pattern-top">
                    <img src={mobilePatternTop} />
                </div>
                <div className="mobile-background__pattern-bottom">
                    <img src={mobilePatternBottom} />
                </div>
            </div>
        </>
    );
}

export default Background;