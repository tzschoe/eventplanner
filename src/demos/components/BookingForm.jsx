import { useState } from "react";

function BookingForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [participants, setParticipants] = useState(1);
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const [successBooking, setSuccessBooking] = useState(null);
    
    function handleSubmit(event){
        event.preventDefault();
        setError("");
        setSuccessBooking(null);


        if(name.trim() === "") {
            setError("Bitte geben Sie einen Namen ein!");
            return;
        }
        if(email.trim() === "") {
            setError("Bitte geben Sie eine Email-Adresse ein!");
            return;
        }

        if(!email.includes("@")) {
            setError("Bitte geben Sie eine gültige Email-Adresse ein!")
            return;
        }

 
        if(phone.trim() !== "" && phone.trim().length < 5) {
            setError("Die Telefonnummer muss mindestens 5 Zeichen lang sein!");
            return;
        } 

        if(participants < 1) {
            setError("Es muss mindestens eine Person angemeldet werden!");
            return;
        }


        setSuccessBooking({name, participants, phone});

        setName("");
        setEmail("");
        setParticipants(1);
        setPhone("");


        console.log({name, email, participants, phone});
    }

    return(
      <section>
        {error && (<p className="form-error">{error}</p>)}
        {successBooking && (<p className="form-success">Vielen Dank {" "} <strong>{successBooking.name}</strong>! {" "} Die Buchung für {" "} {successBooking.participants} {" "} Person(en) wurde gespeichert. </p>)}


        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label htmlFor="name">Name</label>{" "}
                <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>

            <div>
                <label htmlFor="email">Email</label>{" "}
                <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>

            <div>
                <label htmlFor="phone">Telefon</label>{" "}
                <input type="tel" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
            </div>

            <div>
                <label htmlFor="participants">Teilnehmer</label>{" "}
                <input type="number" id="participants" value={participants} onChange={(event) => setParticipants(event.target.value)} />
            </div>

            <button type="submit">Buchen</button>

        </form>
      </section>    
    );
}


export default BookingForm;
