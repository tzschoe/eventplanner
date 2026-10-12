import Header from "./Header";
import Footer from "./Footer";
import SpeakerCard from "./SpeakerCard";

export default function App() {
    return (
        <>
            <Header />
            <main>
                <h2>Sprecher</h2>
                <SpeakerCard name="Anne Carson" specialfield="React & JavaScript" company="WebDev GmbH" online={true} />

                <SpeakerCard name="Muster Maxfrau" specialfield="Backend Development" company="Tech GmbH" online={false} />
                
            </main>
            <Footer />
        </>
    );
};