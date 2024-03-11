import "../styles/video.css"
import Image from "next/image"
import thumbnail from "/public/youtube/images/thumbnail.jpg"
import unnamed from "/public/youtube/images/unnamed.jpg"

export default function Video() {
    return (
        <div className="video">
            <Image className="thumbnail" src={thumbnail} alt="thumbnail"/>
            <div>
                <Image className="channel-image" src={unnamed} alt="thumbnail"/>
                <span  className="info">
                    <p className="title">معجزة العُصْعُص.. دليل دامغ على النبوة، والبعث يوم القيامة</p>
                    <p className="channel-name">الدكتور راغب السرجاني</p>
                    <span className="more-info">
                        <p className="views">111K views</p>
                        <p className="time">9 months ago</p>
                    </span>
                </span>
            </div>
        </div>
    )
}