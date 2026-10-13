import Header from "./Header";
import Footer from "./Footer";
import CourseList from "./CourseList";
import InfoBox from "./InfoBox";
import Panel from "./Panel";
import Notice from "./Notice";

export default function App() {
    return (
        <>
            <Header />

            <main>  
                <Panel title="Nächste Veranstaltungen">
                    <p>Hier erscheinen die nächsten Events.</p>
                </Panel>

                <Panel title="Trainer">
                </Panel>

            <InfoBox title="Hinweis">
                <p>
                    Bitte bringen Sie Ihren <strong>Teilnehmerausweis</strong> mit.
                </p>
                <ul>
                    <li>Einlass ab 8:30 Uhr</li>
                    <li>Beginn um 9:00 Uhr</li>
                </ul>
            </InfoBox>

            <CourseList />

            <Notice type="info">
                <strong>Hinweis:</strong> Die Anmeldung ist ab morgen möglich.
            </Notice>

            <Notice type="warning">
                <p>Für diese Veranstaltung sind nur noch wenige Plätze frei.</p>
            </Notice>

            </main>
            

            <Footer />
        </>
    );
};