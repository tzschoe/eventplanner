import { useState } from "react";

function BookingForm() {
    const [formData, setFormData] = useState({name: "", email: "", phone: "", participants: 1});
    const [error, setError] = useState("");
    const [successBooking, setSuccessBooking] = useState(null);
    
    function handleChange(event) {
        const { name, value } = event.target;
        const newValue = name === "participants" ? Number(value) : value;
        setFormData({...formData, [name]: newValue});
    }

    function handleSubmit(event){
        event.preventDefault();
        setError("");
        setSuccessBooking(null);

        const { name, email, phone, participants } = formData;


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
        console.log({name, email, participants, phone});

        setFormData({name: "", email: "", phone: "", participants: 1});

    }

    return(
      <section>
        {error && (<p className="form-error">{error}</p>)}
        {successBooking && (<p className="form-success">Vielen Dank {" "} <strong>{successBooking.name}</strong>! {" "} Die Buchung für {" "} {successBooking.participants} {" "} Person(en) wurde gespeichert. </p>)}


        <form onSubmit={handleSubmit} noValidate>
            <div>
                <label htmlFor="name">Name</label>{" "}
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="email">Email</label>{" "}
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="phone">Telefon</label>{" "}
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="participants">Teilnehmer</label>{" "}
                <input type="number" id="participants" name="participants" value={formData.participants} onChange={handleChange} />
            </div>

            <button type="submit">Buchen</button>

        </form>
      </section>    
    );
}


export default BookingForm;
