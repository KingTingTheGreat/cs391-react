import useSWR from "swr";

const RickAndMorty = () => {
    const { data, error } = useSWR(
        'https://rickandmortyapi.com/api/character', 
        (url) => fetch(url).then(res => res.json())
    );

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <div>
            {data.results.map((character) => (
            <div key={character.id}>
                <h3>{character.name}</h3>
                <img src={character.image} alt={character.name} />
            </div>))}
        </div>
    )
}

export default RickAndMorty