import { useCatFact } from '../hooks/useCatFact';
import { useCatImage } from '../hooks/useCatImage';

export function Cats () {
    const { fact, refreshFact } = useCatFact()
    const { imageId } = useCatImage({fact})
    return (
        <>
            <h1>App de Gatitos</h1>
            <button type="button" onClick={refreshFact}>Get New Fact</button>
            {fact && <p>{fact}</p>} 
            {imageId && <img src={imageId} alt={`Image extracted using the firstrhee word for ${fact}`} />} 
        </>
    )
}