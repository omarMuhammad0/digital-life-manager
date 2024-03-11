import Header from "./components/Header"
import MainSection from "./components/MainSection"

export const metadata = {
    title: "Youtube",
    description: "youtube clone to manage time spent in youtube, time and video limit",
}

export default function Youtube() {

    return (
        <>
            <section>
                <Header />
                <MainSection />
            </section>
        </>
    )
}