import Video from "./Video"
import NavBar from "./NavBar"
import "../styles/main-section.css"

export default function MainSection() {
    return (
        <section className="main-section">
            <NavBar />
            <div className="video-section">
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
                <Video />
            </div>
        </section>
    )
}