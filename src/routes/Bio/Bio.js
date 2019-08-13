import React from 'react';
import Photo from '../../components/Photo/Photo';
import Portrait from '../../images/don-carlo-portrait.jpg';
import './Bio.css';

const Bio = () => {
  return (
    <div className="bio-page">
    <Photo props={Portrait} />

    <div className="bio-text">
    <p>Tenor <b>John David Rodger</b> has recently sung Verdi’s <i>Don Carlo</i>, Pollione in <i>Norma</i>, and Roberto in <i>Le Villi</i> for <b>Theater Krefeld-Mönchengladbach</b>.
      He also covered Don Carlo and the Prince in <i>L’amour des trois oranges</i> for <b>Deutsche Oper Berlin</b>, as well as the title role in <i>Andrea Chénier</i> and Dick Johnson in <i>La Fanciulla del West</i> for <b>Opera North</b> in Leeds.</p>

      <p>During recent seasons he has been on the roster of <b>New York City Opera</b> for <i>Esther</i>, <i>Revolution of Forms</i>, and <i>Séance on a Wet Afternoon</i>,
        <b>Glimmerglass Opera</b> for <i>Das Liebesverbot</i> and <i>La Traviata</i>, <b>Sarasota Opera</b> for productions of <i>Don Carlos</i> and <i>Tosca</i>, and concert performances at <b>Carnegie Hall</b>.</p>

        <p>He has performed leading roles in <i>Tosca</i>, <i>Il Trovatore</i>, <i>Il Tabarro</i>, <i>Macbeth</i>, <i>Nabucco</i>, <i>Doña Flor</i>, Gounod’s <i>Faust</i> and Boito’s <i>Mefistofele</i> with <b>Taconic Opera</b> in New York, <i>Un
            Ballo in Maschera</i>,
          <i>The Tales of Hoffmann</i>, and <i>Don Carlo</i> with <b>Opera in the Heights</b> in Houston, Verdi's <b>Otello</b> with Kent Opera in England,
          and several productions of <i>La Traviata</i>, <i>Rigoletto</i> and <i>La Bohème</i>.</p>
        <p>Originally trained as a pianist and classical guitarist, Mr. Rodger holds degrees from the <b>Indiana University Jacobs School of Music</b> and the <b>Oberlin Conservatory of Music</b>. A Canadian and British citizen, Mr. Rodger lives in
          London.</p>
    </div>
    </div>
  )
}

export default Bio;
