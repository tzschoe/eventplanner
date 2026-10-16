function RegistrationForm({formData, error, events, onChange, onSubmit}) {
    return(
        <form onSubmit={onSubmit}>
                {error && (<p className="form-error">{error}</p>)}
                <div>
                    <label htmlFor="name">Name*</label>{" "}
                    <input type="text" id="name" name="name" value={formData.name} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email*</label>{" "}
                    <input type="email" id="email" name="email" value={formData.email} onChange={onChange}/>
                </div>
                <div>
                    <label htmlFor="eventId">Veranstaltung</label>{" "}
                    <select name="eventId" id="eventId" value={formData.eventId} onChange={onChange}>
                        <option value="">Bitte auswählen </option>
                        {events.map((event) => {
                            let statusText = "";
                            if (event.seats === 0) {
                                statusText = " - ausgebucht";
                            } else if (!event.registrationOpen) {
                                statusText = " - Anmeldung geschlossen";}

                            return (
                                <option 
                                    key={event.id} 
                                    value={event.id} 
                                    disabled={event.seats === 0 || !event.registrationOpen}
                                >
                                    {event.title}{statusText}
                                </option>
                            );
                        })}
                    </select>
                </div>                
                <div>
                    <label htmlFor="participants">Teilnehmer*</label>{" "}
                    <input type="number" id="participants" name="participants" min ="1" value={isNaN(formData.participants) ? "" : formData.participants} onChange={onChange}/>
                </div> 

                <button type="submit">Anmelden</button>                               
        </form>
    );
}

export default RegistrationForm;