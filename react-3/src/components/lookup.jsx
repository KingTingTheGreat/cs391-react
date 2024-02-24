import useSWR from "swr";
import { useState } from "react";

const Lookup = () => {
    const [query, setQuery] = useState("");
    const { data, error } = useSWR(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`,
        (url) => fetch(url).then((res) => res.json())
    );

    const LookupContent = () => {
        if (!query) return <div></div>;
        if (error) return <div>Error fetching data</div>;
        if (!data) return <div>Loading...</div>;

        if (data.message) return <div>No results found</div>;

        return (
            <div>
                {data.map((def) => (
                    <div key={def.word}>
                        <h2>{def.word}</h2>
                        <p>{def.meanings[0].definitions[0].definition}</p>
                    </div>
                ))}
            </div>
        );
    };


    return (
        <div>
            <input
                type="text"
                value={query}
                placeholder="Enter a word to look up..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <LookupContent />
        </div>
    );
};

export default Lookup;