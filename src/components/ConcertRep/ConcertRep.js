import React from 'react';
import "./ConcertRep.css";

const ConcertRep = () => {
    return (
        <div>
        <h2 className="header">Concert</h2>
        <div className="concertRep-container">
        <table className="concert-table">
        <tbody>
        <tr className="concertTable-header">
                <th>Composer</th>
                <th>Work</th>
        </tr>
        <tr>
            <td className="composer-col">Beethoven</td>
            <td className="work-col">Symphony no. 9*</td>
        </tr>
        <tr>
            <td className="composer-col">Beethoven*</td>
            <td className="work-col">Mass in C*</td>
        </tr>
        <tr>
            <td className="composer-col">Bruckner</td>
            <td className="work-col">Te Deum</td>
        </tr>
        <tr>
            <td className="composer-col">Dvorak</td>
            <td className="work-col">Stabat Mater</td>
        </tr>
        <tr>
            <td className="composer-col">Finzi</td>
            <td className="work-col">Farewell to arms*</td>
        </tr>
        <tr>
            <td className="composer-col">Finzi</td>
            <td className="work-col">For St. Cecelia</td>
        </tr>
        <tr>
            <td className="composer-col">Finzi</td>
            <td className="work-col">Intimations of Immortality</td>
        </tr>
        <tr>
            <td className="composer-col">Gounod</td>
            <td className="work-col">Messe solennelle de Saint Cecile</td>
        </tr>
        <tr>
            <td className="composer-col">Griffes</td>
            <td className="work-col">Three Poems of Fiona Macleod*</td>
        </tr>
        <tr>
            <td className="composer-col">Haydn</td>
            <td className="work-col">Nelson Mass*</td>
        </tr>
        <tr>
            <td className="composer-col">Haydn</td>
            <td className="work-col">Paukenmesse*</td>
        </tr>
        <tr>
            <td className="composer-col">Haydn</td>
            <td className="work-col">St. Nicholas Mass*</td>
        </tr>
        <tr>
            <td className="composer-col">Haydn</td>
            <td className="work-col">Stabat Mater*</td>
        </tr>
        <tr>
            <td className="composer-col">Janacek</td>
            <td className="work-col">Glagolitic Mass</td>
        </tr>
        <tr>
            <td className="composer-col">Krenek</td>
            <td className="work-col">Symeon der Stylit*</td>
        </tr>
        <tr>
            <td className="composer-col">Mahler</td>
            <td className="work-col">Das Lied von der Erde</td>
        </tr>
        <tr>
            <td className="composer-col">Mendelssohn</td>
            <td className="work-col">Lobgesang (Hymn of Praise)*</td>
        </tr>
        <tr>
            <td className="composer-col">Mendelssohn</td>
            <td className="work-col">St. Paul*</td>
        </tr>
        <tr>
            <td className="composer-col">Mozart</td>
            <td className="work-col">Misero! O sogno, o son desto*</td>
        </tr>
        <tr>
            <td className="composer-col">Mozart</td>
            <td className="work-col">Per piet&agrave;, non ricercate*</td>
        </tr>
        <tr className="concertTable-header2">
                <th>Composer</th>
                <th>Work</th>
        </tr>
        <tr>
            <td className="composer-col">Mozart</td>
            <td className="work-col">Coronation Mass*</td>
        </tr>
        <tr>
            <td className="composer-col">Mozart</td>
            <td className="work-col">Vesperae Solenne de Confessore*</td>
        </tr>
        <tr>
            <td className="composer-col">Mozart</td>
            <td className="work-col">Mass in C minor*</td>
        </tr>
        <tr>
            <td className="composer-col">Mozart</td>
            <td className="work-col">Requiem*</td>
        </tr>
        <tr>
            <td className="composer-col">Puccini</td>
            <td className="work-col">Messa di gloria*</td>
        </tr>
        <tr>
            <td className="composer-col">Respighi</td>
            <td className="work-col">Deit&aacute; Silvane*</td>
        </tr>
        <tr>
            <td className="composer-col">Rossini</td>
            <td className="work-col">La petite messe solennelle*</td>
        </tr>
        <tr>
            <td className="composer-col">Saint-Sa&euml;ns</td>
            <td className="work-col">Christmas Oratorio</td>
        </tr>
        <tr>
            <td className="composer-col">Schoenberg</td>
            <td className="work-col">Gurrelieder</td>
        </tr>
        <tr>
            <td className="composer-col">Schubert</td>
            <td className="work-col">Mass in G*</td>
        </tr>
        <tr>
            <td className="composer-col">Schubert</td>
            <td className="work-col">Mass in Ab D. 678*</td>
        </tr>
        <tr>
            <td className="composer-col">Schubert</td>
            <td className="work-col">Mass in Eb D. 950*</td>
        </tr>
        <tr>
            <td className="composer-col">Schubert</td>
            <td className="work-col">Mass in F D. 105*</td>
        </tr>
        <tr>
            <td className="composer-col">Schubert</td>
            <td className="work-col">Mass in C D. 452*</td>
        </tr>
        <tr>
            <td className="composer-col">Stainer</td>
            <td className="work-col">Crucifixion*</td>
        </tr>
        <tr>
            <td className="composer-col">Strauss</td>
            <td className="work-col">4 songs, opus 27</td>
        </tr>
        <tr>
            <td className="composer-col">Stravinsky</td>
            <td className="work-col">Pulcinella*</td>
        </tr>
        <tr>
            <td className="composer-col">Szymanowski</td>
            <td className="work-col">Love Songs of Hafiz</td>
        </tr>
        <tr>
            <td className="composer-col">Tippett</td>
            <td className="work-col">A Child of our Time</td>
        </tr>
        <tr>
            <td className="composer-col">Verdi</td>
            <td className="work-col">Requiem*</td>
        </tr>
        <tr>
            <td className="composer-col notes-col" colSpan="2">* denotes performed</td>
        </tr>
        </tbody>
        </table>

        </div>            
        </div>
    )
}

export default ConcertRep;