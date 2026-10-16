import { useState } from "react";
import RegistrationForm from "./RegistrationForm";

function RegistrationManager() {
    const [formData, setFormData] = useState({name: "", email: "", participants: 1});
    const [registrations, setRegistrations] = useState([]);
    const [error, setError] = useState("");

    function handleChange(event){
        const { name, value } = event.target;
        const newValue = name === "participants" ? Number(value) : value;
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
        const newRegistration = {
            id: Date.now(), name: formData.name, email: formData.email, participants: formData.participants
        }
        setRegistrations([...registrations, newRegistration]);

        setFormData({name: "", email: "", participants: 1});
    }

    const totalPeople = registrations.reduce((sum, current) => sum + current.participants, 0);

    return(
        <section>
            <h2>Anmeldungen</h2>

            <RegistrationForm formData={formData} error={error} onChange={handleChange} onSubmit={handleSubmit} />

            <h3>Aktuelle Anmeldungen</h3>
            <p>Anmeldungen: {" "} {registrations.length === 0 ? "Noch keine Anmeldungen vorhanden." : registrations.length}</p>
            <p>Gesamtzahl der Personen: {totalPeople} Personen</p>

            {registrations.map(
                (registration) => (
                    <article key={registration.id} className="registration-card">
                        <h4>{registration.name}</h4>
                        <p>{registration.email}</p>
                        <p>Teilnehmer:{" "} {registration.participants}</p>
                    </article>
                )
            )}
        </section>
    );
}

export default RegistrationManager;
