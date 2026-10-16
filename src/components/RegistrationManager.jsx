import { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import events from "../data/events";
import RegistrationList from "./RegistrationList";

function RegistrationManager() {
    const [formData, setFormData] = useState({name: "", email: "", participants: 1, eventId: ""});
    const [registrations, setRegistrations] = useState([]);
    const [error, setError] = useState("");

    const participantsCount = registrations.reduce((sum, registration) => sum + registration.participants, 0);

    function handleChange(event){
        const { name, value } = event.target;

        let newValue = value;

        if(name === "participants") {
            newValue = Number(value);
        }

        if(name === "eventId") {
            newValue = value === "" ? "" : Number(value);
        }

        setFormData({...formData, [name]: newValue});
    }

    function handleSubmit(event) {
        event.preventDefault();

        setError("");
        if(formData.name.trim() === "") {
            setError("Bitte geben Sie Ihren Namen ein!")
            return;
        }

        if(formData.email.trim() === "") {
            setError("Bitte geben Sie eine Email-Adresse an!")
            return;
        }

        if(formData.eventId === "") {
            setError("Bitte wählen Sie eine Veranstaltung aus!")
            return;
        }

        const newRegistration = {
            id: Date.now(),
            name: formData.name,
            email: formData.email,
            participants: Number(formData.participants), 
            eventId: formData.eventId
        };
  
        setRegistrations([...registrations, newRegistration]);
        setFormData({ name: "", email: "", participants: 1, eventId: "" });

    }

    const totalPeople = registrations.reduce((sum, current) => {
        const count = Number(current.participants);
        return sum + (isNaN(count) ? 0 : count);
    }, 0);

    function handleDeleteRegistration(id) {
        const confirmed = window.confirm("Registrierung wirklich löschen?");
        if (!confirmed) {
            return; 
        }
        setRegistrations(registrations.filter((registration) => registration.id !== id));
    }

    return(
        <section>
            <h2>Anmeldungen</h2>

            <RegistrationForm formData={formData} error={error} events={events} onChange={handleChange} onSubmit={handleSubmit} />

            <h3>Aktuelle Anmeldungen</h3>
            
            <p>Gesamtzahl der Personen: {participantsCount} Personen</p>
            <button 
                type="button" 
                onClick={() => {
                    if (window.confirm("Wirklich ALLE Registrierungen löschen?")) {
                        setRegistrations([]);
                    }
                }}
                disabled={registrations.length === 0} 
            >
                Alle löschen
            </button>

            <RegistrationList registrations={registrations} events={events} onDelete={handleDeleteRegistration} />
            
        </section>
    );
}

export default RegistrationManager;
