export default function SpeakerCard({name, specialfield, company, online}) {
    return (
        <article>
            <h3>{name}</h3>
            <p>{specialfield}</p>
            <p>{company}</p>
            <p>{online ? "Online verfügbar" : "nur vor Ort"}</p>
        </article>
    );
}

