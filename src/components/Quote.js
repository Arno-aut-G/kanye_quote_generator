
const Quote = ({ data, cutData }) => {
    cutData()
    const archive = data.filter((e, i) => i !== 0)


    return (
        <div className="App">
            <h1>
                <a href="/instructions.html"> instructions </a>
            </h1>
            <h2>{data[0]}</h2>
            {data.length > 1 &&
                <>
                    <h1>Previous 10 quotes</h1>
                    <ul>
                        {archive.map((e, index) =>
                            <li key={index}>
                                <h2>{e}</h2>
                            </li>)}
                    </ul>
                </>}


        </div>
    );
};

export default Quote