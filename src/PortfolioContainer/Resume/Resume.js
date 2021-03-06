import React, {useState} from "react";
import ScreenHeadning from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carousalOffSetStyle, setCaroussalOffSetStyle] = useState({})

    const ResumeHeading = (props) =>{
        <div className="resume-heading">
            <div className="resume-main-heading">
                <div className="heading-bullet">
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ?(
                        <div className="heading-date">
                            {props.fromDate + "_" + props.toDate}
                            </div>
                    ):(
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ''}</span>
                </div>
                <div className="resume-heading-description">
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
        </div>
    }


    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscriptions = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    return (
        <div className="resume-container screen-container" id={props.id || ""}>
            <div className="resume content">
                <ScreenHeadning title={'Resume'} subHeading={'My Formal Bio Details'}/>
            </div>


        </div>
    )
}