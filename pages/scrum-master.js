// @flow

import Wordmark from '../components/Wordmark'
import SnowflakeApp from '../components/SnowflakeApp'

const Index = props => (
  <div>
    <main>
        <p>Les Scrum Masters remplissent leur rôle en aidant tout le monde à comprendre la théorie, les pratiques, les règles et les valeurs 
        de Scrum.
        Le Scrum Master est un leader-serviteur de l'équipe Scrum. Le Scrum Master aide ceux qui sont externes à l'équipe Scrum 
        à comprendre lesquelles de leurs interactions avec l’équipe Scrum sont bénéfiques et lesquelles ne le sont pas.
        Le Scrum Master aide tout le monde à changer ces interactions pour maximiser la valeur créée par l’équipe Scrum.
        </p>
        <ul>
          <li>S'assurer que les objectifs, l’étendue et le domaine du produit sont compris par tous les membres de l'équipe Scrum du
             mieux possible</li>
          <li>Trouver des techniques pour une gestion efficace du Backlog produit</li>
          <li>Aider l'équipe Scrum à comprendre le besoin des items, de Backlog produit, clairs et concis</li>
          <li>Comprendre la planification de produits dans un contexte empirique</li>
          <li>S'assurer que le Product Owner sait comment organiser le Backlog produit pour maximiser la
valeur</li>
          <li>Comprendre et mettre en œuvre l'agilité</li>
          <li>Faciliter les événements Scrum tels que demandés ou nécessaires</li>
          <li>Coacher l'équipe de développement en matière d'auto-organisation et de pluridisciplinarité</li>
          <li>Aider l'équipe de développement à créer des produits de grande valeur</li>
          <li>Supprimer les obstacles à la progression de l'équipe de développement</li>
          <li>Faciliter les événements Scrum tels que demandés ou nécessaires</li>
          <li>Accompagner l'organisation dans son adoption Scrum</li>
          <li>Planifier les implémentations Scrum au sein de l'organisation</li>
          <li>Aider les employés et les parties prenantes à comprendre et adopter Scrum ainsi le
développement empirique de produits</li>
          <li>Causer les changements qui augmentent la productivité de l'équipe Scrum</li>
          <li>Coacher l'équipe de développement dans les environnements organisationnels où Scrum n'est pas 
            encore complètement adopté et compris</li>
          <li>Collaborer avec d'autres Scrum Masters pour accroître l'efficacité de l'application de Scrum
au sein de l'organisation</li>
      </ul>
      <div>
        <SnowflakeApp data={['Master', 'Scrum', 0, 0, 5, 2, 1, 2, 3, 4, 0, 4, 3, 0, 2, 3, 1, 0, 1, 1, 0, 0]} />
      </div>
    </main>
  </div>
);

export default Index;