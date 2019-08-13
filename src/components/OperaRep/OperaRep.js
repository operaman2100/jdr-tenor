import React from 'react';
import './OperaRep.css';

const OperaRep = ({props}) => {
    return(
        <div className="rep-div">
        <h2 className="header">Opera</h2>
        <div className="operaTable-container">
            <table className="operaTable">
            <tbody>
            <tr className="operaTable-header">
                <th className="composer-col">Composer</th>
                <th className="role-col">Role</th>
                <th className="opera-col">Opera</th>
            </tr>
            <tr>
                <td className="composer-col">Beethoven</td>
                <td className="role-col">Florestan</td>
                <td className="opera-col">Fidelio</td>
            </tr>
            <tr>
                <td className="composer-col">Bellini</td>
                <td className="role-col">Pollione*</td>
                <td className="opera-col">Norma</td>
            </tr>
            <tr>
                <td className="composer-col">Bizet</td>
                <td className="role-col">Don José*</td>
                <td className="opera-col">Carmen</td>
            </tr>
            <tr>
                <td className="composer-col">Boto</td>
                <td className="role-col">Faust</td>
                <td className="opera-col">Mefistofele</td>
            </tr>
            <tr>
                <td className="composer-col">Britten</td>
                <td className="role-col">Peter Grimes</td>
                <td className="opera-col">Peter Grimes</td>
            </tr>
            <tr>
                <td className="composer-col">Britten</td>
                <td className="role-col">Captain Vere</td>
                <td className="opera-col">Billy Budd</td>
            </tr>
            <tr>
                <td className="composer-col">Donizetti</td>
                <td className="role-col">Edgardo*</td>
                <td className="opera-col">Lucia di Lammermoor</td>
            </tr>
            <tr>
                <td className="composer-col">Giordano</td>
                <td className="role-col">Andrea Chénier*</td>
                <td className="opera-col">Andrea Chénier</td>
            </tr>
            <tr>
                <td className="composer-col">Gounod</td>
                <td className="role-col">Faust*</td>
                <td className="opera-col">Faust</td>
            </tr>
            <tr>
                <td className="composer-col">Leoncavallo</td>
                <td className="role-col">Canio</td>
                <td className="opera-col">I Pagliacci</td>
            </tr>
            <tr>
                <td className="composer-col">Mascagni</td>
                <td className="role-col">Turiddu</td>
                <td className="opera-col">Cavalleria Rusticana</td>
            </tr>
            <tr>
                <td className="composer-col">Mozart</td>
                <td className="role-col">Tamino</td>
                <td className="opera-col">Die Zauberflöte</td>
            </tr>
            <tr>
                <td className="composer-col">Offenbach</td>
                <td className="role-col">Hoffmann*</td>
                <td className="opera-col">Les contes d'Hoffmann</td>
            </tr>
            <tr>
                <td className="composer-col">Prokofiev</td>
                <td className="role-col">Le Prince*</td>
                <td className="opera-col">L'amour des trois oranges</td>
            </tr>
            <tr>
                <td className="composer-col">Puccini</td>
                <td className="role-col">Rodolfo*</td>
                <td className="opera-col">La Bohème</td>
            </tr>
            <tr>
                <td className="composer-col">Puccini</td>
                <td className="role-col">Pinkerton*</td>
                <td className="opera-col">Madama Butterfly</td>
            </tr>
            <tr>
                <td className="composer-col">Puccini</td>
                <td className="role-col">Ruggiero</td>
                <td className="opera-col">La Rondine</td>
            </tr>
            <tr>
                <td className="composer-col">Puccini</td>
                <td className="role-col">Cavaradossi*</td>
                <td className="opera-col">Tosca</td>
            </tr>
            <tr>
                <td className="composer-col">Puccini</td>
                <td className="role-col">Luigi*</td>
                <td className="opera-col">Il Tabarro</td>
            </tr>
            <tr>
                <td className="composer-col">Puccini</td>
                <td className="role-col">Des Grieux</td>
                <td className="opera-col">Manon Lescaut</td>
            </tr>
            <tr>
                <td className="composer-col">Puccini</td>
                <td className="role-col">Roberto*</td>
                <td className="opera-col">Le Villi</td>
            </tr>
            <tr>
                <td className="composer-col">Puccini</td>
                <td className="role-col">Dick Johnson*</td>
                <td className="opera-col">La Fanciulla del West</td>
            </tr>
            <tr className="operaTable-header2">
                <th className="composer-col">Composer</th>
                <th className="role-col">Role</th>
                <th className="opera-col">Opera</th>
            </tr>
            <tr>
                <td className="composer-col">Puccini</td>
                <td className="role-col">Calaf</td>
                <td className="opera-col">Turandot</td>
            </tr>
            <tr>
                <td className="composer-col">Strauss, J.</td>
                <td className="role-col">Alfred*</td>
                <td className="opera-col">Die Fledermaus</td>
            </tr>
            <tr>
                <td className="composer-col">Strauss, R.</td>
                <td className="role-col">Bacchus**</td>
                <td className="opera-col">Ariadne auf Naxos</td>
            </tr>
            <tr>
                <td className="composer-col">Strauss, R.</td>
                <td className="role-col">Italian Tenor*</td>
                <td className="opera-col">Der Rosenkavalier</td>
            </tr>
            <tr>
                <td className="composer-col">Strauss, R.</td>
                <td className="role-col">Narraboth</td>
                <td className="opera-col">Salome</td>
            </tr>
            <tr>
                <td className="composer-col">Verdi</td>
                <td className="role-col">Alfredo*</td>
                <td className="opera-col">La Traviata</td>
            </tr>
            <tr>
                <td className="composer-col">Verdi</td>
                <td className="role-col">Duke of Mantua*</td>
                <td className="opera-col">Rigoletto</td>
            </tr>
            <tr>
                <td className="composer-col">Verdi</td>
                <td className="role-col">Ismaele*</td>
                <td className="opera-col">Nabucco</td>
            </tr>
            <tr>
                <td className="composer-col">Verdi</td>
                <td className="role-col">Macduff*</td>
                <td className="opera-col">Macbeth</td>
            </tr>
            <tr>
                <td className="composer-col">Verdi</td>
                <td className="role-col">Manrico*</td>
                <td className="opera-col">Il Trovatore</td>
            </tr>
            <tr>
                <td className="composer-col">Verdi</td>
                <td className="role-col">Riccardo*</td>
                <td className="opera-col">Un Ballo in Maschera</td>
            </tr>
            <tr>
                <td className="composer-col">Verdi</td>
                <td className="role-col">Don Carlo*</td>
                <td className="opera-col">Don Carlo</td>
            </tr>
            <tr>
                <td className="composer-col">Verdi</td>
                <td className="role-col">Tenor*</td>
                <td className="opera-col">Requiem</td>
            </tr>
            <tr>
                <td className="composer-col">Verdi</td>
                <td className="role-col">Radamès*</td>
                <td className="opera-col">Aida</td>
            </tr>
            <tr>
                <td className="composer-col">Wagner</td>
                <td className="role-col">Claudio</td>
                <td className="opera-col">Das Liebesverbot</td>
            </tr>
            <tr>
                <td className="composer-col">Wagner</td>
                <td className="role-col">Erik**</td>
                <td className="opera-col">Der fliegende Holländer</td>
            </tr>
            <tr>
                <td className="composer-col">Wagner</td>
                <td className="role-col">Froh**</td>
                <td className="opera-col">Das Rheingold</td>
            </tr>
            <tr>
                <td className="composer-col">Wagner</td>
                <td className="role-col">Parsifal**</td>
                <td className="opera-col">Parsifal</td>
            </tr>
            <tr>
                <td className="composer-col">Wagner</td>
                <td className="role-col">Lohengrin**</td>
                <td className="opera-col">Lohengrin</td>
            </tr>
            <tr>
                <td className="composer-col">Wagner</td>
                <td className="role-col">Walther</td>
                <td className="opera-col">Die Meistersinger von Nürnberg</td>
            </tr>
            <tr>
                <td className="composer-col notes-row" colSpan="3">*   denotes available on short notice</td>
            </tr>
            <tr>
                <td className="composer-col notes-row" colSpan="3">** denotes in preparation</td>
            </tr>
            </tbody>
            </table>
        </div>
        </div>
    )
}

export default OperaRep;