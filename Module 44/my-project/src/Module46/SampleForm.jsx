const SampleForm = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className="border-2 bg-cyan-500 text-black rounded-md border-e-2" type="text" name="name" /> <br />
                <input className="border-2 bg-cyan-500 text-black rounded-md border-e-2" type="email" name="email" /><br />
                <input className="border-2 bg-cyan-500 text-black rounded-md border-e-2" type="text" name="phone" />  <br />
                <input className="btn" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SampleForm;