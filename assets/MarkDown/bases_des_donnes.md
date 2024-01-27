# *Bases des données*

---

## *Le BDD*

**Serveur :** PostgreSQL  
**Client :** DBeaver  
**Local host :** 127.0.0.1  
Connection par TCP - IP (adresse IP **127.0.0.1**, Port **5432**) entre PostgreSQL et DBeaver.

---

## *Les Logiciels utilisés*

* **SGBDR** (**S**ystème de **G**estion de **B**ase de **D**onnées **R**elationnelles) **:**
 Il s'agit d'un logiciel qui permet de créer, stocker, gérer et manipuler des bases de données relationnelles.  
 &nbsp;
 ***Exemples de SGBDR populaires :*** PostgreSQL, MySQL, Oracle Database, Microsoft SQL Server, etc.
 &nbsp;

* **DBeaver :**
  DBeaver est un outil de gestion de base de données universel et open-source.
  Il prend en charge de nombreux SGBDR, y compris PostgreSQL.
  Il fournit une interface graphique conviviale pour créer, modifier et exécuter des requêtes sur les données stockées dans une base de données.
  DBeaver offre également des fonctionnalités avancées telles que la gestion des connexions, l'édition des schémas, la visualisation des données, etc.  
  &nbsp;
  ***Pour connecter DBeaver à PostgreSQL (version 12) :***
  &nbsp;
  * Lancez DBeaver et cliquez sur "Nouvelle connexion" pour créer une nouvelle connexion à la base de données.
  * Sélectionnez PostgreSQL comme type de base de données.
  * Entrez les détails de connexion tels que l'hôte, le port, le nom de la base de données, le nom d'utilisateur et le mot de passe appropriés pour votre instance de PostgreSQL.
  * Testez la connexion pour vérifier qu'elle fonctionne correctement.
  * Une fois la connexion établie, vous pouvez utiliser DBeaver pour créer, modifier et interroger les données dans votre base de données PostgreSQL.
  &nbsp;

  ***La syntaxe en PostgreSQL :***
  &nbsp;
  * **`int`** est un type de données dans PostgreSQL qui représente un nombre entier.
  * **`varchar(255)`** est un type de données dans PostgreSQL qui permet de stocker des chaînes de caractères jusqu'à une longueur maximale de 255 caractères.
  * **`date`** est un type de données dans PostgreSQL qui stocke une date spécifique.
  * En PostgreSQL, les noms d'objets (tables, colonnes, etc.) sont sensibles à la casse par défaut. Il est recommandé d'utiliser des noms en minuscules et d'éviter les majuscules, les espaces et les caractères spéciaux dans les noms d'objets.
  * **`gerer_commande`** est un exemple de nom d'objet (table, vue, etc.) en utilisant la convention de nommage recommandée en PostgreSQL.

---

## *Sur BDD*

### *On peux faire :*

* Stocker.
* Exploiter.
* Sauvegarder.
* Sécuriser.
* Organiser.  

### *On trouve :*

* **Tableau (`Table`) :** Un tableau, également appelé "table", représente une structure de données tabulaire dans une base de données. Il est composé de lignes et de colonnes et est utilisé pour organiser et stocker les données de manière structurée.  
  *Exemple de création d'un tableau en SQL :*

  ```SQL
  CREATE TABLE Utilisateurs (
      id INT PRIMARY KEY,
      nom VARCHAR(50),
      age INT,
      email VARCHAR(100)
  );
  ```

* **Colonne (`Column`) :** Une colonne est une partie d'un tableau qui définit un attribut spécifique pour chaque enregistrement. Chaque colonne a un nom et un type de données qui détermine le type de valeurs pouvant être stockées dans cette colonne.
  &nbsp;
  *Exemple de création d'une colonne dans un tableau existant en SQL :*

  ```SQL
  ALTER TABLE Utilisateurs
  ADD COLUMN adresse VARCHAR(200);
  ```

* **Ligne (`Row`) :** Une ligne représente un enregistrement (ou occurrences) spécifique dans un tableau. Chaque ligne contient des valeurs pour chaque colonne du tableau, représentant les données associées à cet enregistrement.
  &nbsp;
  *Exemple d'insertion d'une ligne dans un tableau en SQL :*

  ```SQL
  INSERT INTO Utilisateurs (id, nom, age, email)
  VALUES (1, 'Jean', 30, 'jean@example.com');
  ```

* **Clé primaire (`Primary Key`) :** Une clé primaire est une colonne ou un ensemble de colonnes qui identifie de manière unique chaque enregistrement dans un tableau. Elle garantit l'unicité et l'identification sans ambiguïté des enregistrements. La clé primaire est utilisée pour référencer les enregistrements dans d'autres tables.
  &nbsp;
  *Exemple de création d'une clé primaire lors de la création du tableau en SQL :*

  ```SQL
  CREATE TABLE Utilisateus (
      id INT PRIMARY KEY,
      nom VARCHAR(50),
      age INT,
      email VARCHAR(100)
  );
  ```

* **Clé étrangère (`Foreign Key`) :** Une clé étrangère est une colonne (ou un ensemble de colonnes) dans une table qui fait référence à la clé primaire d'une autre table. Elle établit une relation entre les deux tables. La clé étrangère est utilisée pour maintenir l'intégrité référentielle et permet de lier les données entre différentes tables.
  &nbsp;
  *Exemple de création d'une clé étrangère en SQL :*

  ```SQL
  CREATE TABLE Commandes (
      id INT PRIMARY KEY,
      utilisateur_id INT,
      produit VARCHAR(50),
      quantite INT,
      FOREIGN KEY (utilisateur_id) REFERENCES Utilisateurs(id)
  );
  ```

  Dans cet exemple, la colonne **`utilisateur_id`** dans le tableau **`Commandes`** est une clé étrangère qui fait référence à la clé primaire **`id`** dans le tableau **`Utilisateurs`**. Cela permet de lier les commandes à un utilisateur spécifique.

---

## *Les commandes SQL*

* **SELECT :** permet de sélectionner des colonnes dans une table.
  
  ```SQL
  SELECT nom, age FROM Utilisateurs;
  ```

  Cette requête sélectionne les colonnes **`nom`** et **`age`** dans la table **`Utilisateurs`**.  
  &nbsp;

* **FROM :** indique la table à partir de laquelle les données doivent être sélectionnées.
  
  ```SQL
  SELECT * FROM Utilisateurs;
  ```

  Cette requête sélectionne toutes les colonnes de la table **`Utilisateurs`**.
  &nbsp;

* **WHERE :** permet de filtrer les lignes en fonction d'une condition.
  
  ```SQL
  SELECT nom, age FROM Utilisateurs WHERE age > 30;
  ```

  Cette requête sélectionne les colonnes **`nom`** et **`age`** dans la table **`Utilisateurs`** pour les lignes où l'âge est supérieur à 30.
  &nbsp;

* **INSERT INTO :** permet d'insérer des données dans une table.

  ```SQL
  INSERT INTO Utilisateurs (nom, age) VALUES ('Alice', 25);
  ```

  Cette requête insère une nouvelle ligne dans la table **`Utilisateurs`** avec les valeurs 'Alice' pour la colonne **`nom`** et 25 pour la colonne **`age`**.
  &nbsp;

* **UPDATE :** permet de mettre à jour des données existantes dans une table.
  
  ```SQL
  UPDATE Utilisateurs SET age = 35 WHERE nom = 'Jean';
  ```

  Cette requête met à jour la valeur de la colonne **`age`** à 35 dans la table **`Utilisateurs`** pour les lignes où le nom est 'Jean'.
  &nbsp;

* **DELETE :** permet de supprimer des lignes d'une table.
  
  ```SQL
  DELETE FROM Utilisateurs WHERE age < 25;
  ```

  Cette requête supprime les lignes de la table **`Utilisateurs`** où l'âge est inférieur à 25.
  &nbsp;

* **CREATE :** permet de créer une table ou une base de données.
  
  ```SQL
  CREATE TABLE Employes (
      id INT PRIMARY KEY,
      nom VARCHAR(50),
      salaire DECIMAL(10, 2)
  );
  ```

  Cette requête crée une nouvelle table **`Employes`** avec les colonnes **`id`** (clé primaire), **`nom`** et **`salaire`**.
  &nbsp;

* **ALTER :** permet de modifier la structure d'une table existante.
  
  ```SQL
  ALTER TABLE Utilisateurs ADD COLUMN adresse VARCHAR(200);
  ```

  Cette requête ajoute une nouvelle colonne **`adresse`** de type **`VARCHAR(200)`** à la table **`Utilisateurs`**.
  &nbsp;

* **DROP :** permet de supprimer une table ou une base de données.

  ```SQL
  DROP TABLE Utilisateurs;
  ```

  Cette requête supprime la table **`Utilisateurs`** de la base de données.
  &nbsp;

* **JOIN :** permet de combiner les lignes d'une ou plusieurs tables en fonction d'une correspondance entre les valeurs de certaines colonnes. Il existe différents types de jointures (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN).

  ```SQL
  SELECT Utilisateurs.nom, Commandes.produit
  FROM Utilisateurs
  JOIN Commandes ON Utilisateurs.id = Commandes.utilisateur_id;
  ```

  Cette requête combine les tables **`Utilisateurs`** et **`Commandes`** en utilisant la correspondance entre les colonnes **`id`** dans **`Utilisateurs`** et **`utilisateur_id`** dans **`Commandes`**. Elle sélectionne les noms des utilisateurs et les produits associés à leurs commandes.
  &nbsp;

* **GROUP BY :** permet de regrouper les lignes d'une table en fonction d'une ou plusieurs colonnes.

  ```SQL
  SELECT pays, COUNT(*) as total_clients
  FROM Clients
  GROUP BY pays; 
  ```

  Cette requête regroupe les clients par pays dans la table **`Clients`** et compte le nombre total de clients dans chaque pays.
  &nbsp;

* **HAVING :** utilisé conjointement avec GROUP BY pour filtrer les groupes en fonction d'une condition.

  ```SQL
  SELECT pays, COUNT(*) as total_clients
  FROM Clients
  GROUP BY pays
  HAVING COUNT(*) > 10;
  ```

  Cette requête regroupe les clients par pays dans la table **`Clients`**, compte le nombre total de clients dans chaque pays, et filtre les groupes ayant plus de 10 clients.
  &nbsp;

* **ORDER BY :** permet de trier les lignes d'une table en fonction d'une ou plusieurs colonnes.

  ```SQL
  SELECT nom, age
  FROM Utilisateurs
  ORDER BY age DESC;
  ```

  Cette requête sélectionne les noms et les âges des utilisateurs dans la table **`Utilisateurs`** et les trie par ordre décroissant d'âge (**`ASC`** pour ordre croissant).
  &nbsp;

* **LIMIT :** permet de limiter le nombre de lignes retournées par une requête.

  ```SQL
  SELECT nom, age
  FROM Utilisateurs
  LIMIT 5;
  ```

  Cette requête sélectionne les noms et les âges des 5 premiers utilisateurs dans la table **`Utilisateurs`**.
  &nbsp;

* **UNION :** permet de combiner les résultats de plusieurs requêtes SELECT.

  ```SQL
  SELECT nom FROM Utilisateurs
  UNION
  SELECT nom FROM Clients;
  ```

  Cette requête combine les résultats des requêtes **`SELECT`** pour les colonnes **`nom`** dans les tables **`Utilisateurs`** et **`Clients`**, en supprimant les doublons.
  &nbsp;

* **DISTINCT :** permet de sélectionner uniquement les valeurs distinctes d'une colonne.

  ```SQL
  SELECT DISTINCT pays
  FROM Clients;
  ```

  Cette requête sélectionne les pays distincts des clients dans la table **`Clients`**, en éliminant les doublons.
  &nbsp;

* **LIKE :** utilisé dans une clause WHERE pour rechercher des valeurs correspondant à un modèle de chaîne de caractères.

  ```SQL
  SELECT nom
  FROM Utilisateurs
  WHERE nom LIKE 'A%';
  ```

  Cette requête sélectionne les noms des utilisateurs dans la table **`Utilisateurs`** qui commencent par la lettre 'A'.
  &nbsp;

* **BETWEEN :** utilisé dans une clause WHERE pour spécifier une plage de valeurs pour une colonne.

  ```SQL
  SELECT nom, age
  FROM Utilisateurs
  WHERE age BETWEEN 25 AND 35;
  ```

  Cette requête sélectionne les noms et les âges des utilisateurs dans la table **`Utilisateurs`** dont l'âge se situe entre 25 et 35 inclusivement.

---

## *Les fonctions en SQL*

* **COUNT :** permet de compter le nombre de lignes d'une table ou d'une colonne.

  ```SQL
  SELECT COUNT(*) as total_utilisateurs FROM Utilisateurs;
  ```

  Cette requête compte le nombre total de lignes dans la table **`Utilisateurs`** et renvoie le résultat dans la colonne **`total_utilisateurs`**.
  &nbsp;

* **SUM :** permet de calculer la somme d'une colonne.

  ```SQL
  SELECT SUM(quantite) as total_quantite FROM Commandes;
  ```

  Cette requête calcule la somme de la colonne **`quantite`** dans la table **`Commandes`** et renvoie le résultat dans la colonne **`total_quantite`**.
  &nbsp;

* **AVG :** permet de calculer la moyenne d'une colonne.

  ```SQL
  SELECT AVG(age) as moyenne_age FROM Utilisateurs;
  ```

  Cette requête calcule la moyenne de la colonne **`age`** dans la table **`Utilisateurs`** et renvoie le résultat dans la colonne **`moyenne_age`**.
  &nbsp;

* **MIN :** permet de sélectionner la valeur minimale d'une colonne.

  ```SQL
  SELECT MIN(salaire) as salaire_min FROM Employes;
  ```

  Cette requête sélectionne la valeur minimale de la colonne **`salaire`** dans la table **`Employes`** et renvoie le résultat dans la colonne **`salaire_min`**.
  &nbsp;

* **MAX :** permet de sélectionner la valeur maximale d'une colonne.

  ```SQL
  SELECT MAX(salaire) as salaire_max FROM Employes;
  ```

  Cette requête sélectionne la valeur maximale de la colonne **`salaire`** dans la table **`Employes`** et renvoie le résultat dans la colonne **`salaire_max`**.
  &nbsp;

* **CONCAT :** permet de concaténer des chaînes de caractères.

  ```SQL
  SELECT CONCAT(prenom, ' ', nom) as nom_complet FROM Utilisateurs;
  ```

  Cette requête concatène les colonnes **`prenom`** et **`nom`** dans la table **`Utilisateurs`** pour former le nom complet et renvoie le résultat dans la colonne **`nom_complet`**.
  &nbsp;

* **LENGTH :** permet de calculer la longueur d'une chaîne de caractères.

  ```SQL
  SELECT nom, LENGTH(nom) as longueur_nom FROM Utilisateurs;
  ```

  Cette requête sélectionne les noms des utilisateurs dans la table **`Utilisateurs`** et calcule la longueur de chaque nom, renvoyant le résultat dans la colonne **`longueur_nom`**.
  &nbsp;

* **LOWER / UPPER :** permet de convertir une chaîne de caractères en minuscules / majuscules.
  
  ```SQL
  SELECT LOWER(nom) as nom_minuscules, UPPER(nom) as nom_majuscules FROM Utilisateurs;
  ```

  Cette requête sélectionne les noms des utilisateurs dans la table **`Utilisateurs`** et les renvoie en minuscules dans la colonne **`nom_minuscules`** et en majuscules dans la colonne **`nom_majuscules`**.
  &nbsp;

* **SUBSTRING :** permet de sélectionner une partie d'une chaîne de caractères.

  ```SQL
  SELECT SUBSTRING(description, 1, 10) as extrait_description FROM Produits;
  ```

  Cette requête sélectionne la colonne **`description`** dans la table **`Produits`** et extrait les 10 premiers caractères de chaque description, renvoyant le résultat dans la colonne **`extrait_description`**.
  &nbsp;

* **NOW() :** permet de récupérer la date et l'heure actuelle.

  ```SQL
  SELECT NOW() as date_heure_actuelles;
  ```

  Cette requête récupère la date et l'heure actuelles du système de la base de données et renvoie le résultat dans la colonne **`date_heure_actuelles`**.
  &nbsp;

* **CAST() :** permet de convertir une expression d'un type de données en un autre type.  

  ```SQL
  SELECT CAST(prix AS DECIMAL(10, 2)) as prix_decimal FROM Produits;
  ```

  Cette requête convertit la colonne **`prix`** dans la table **`Produits`** en un type de données **`DECIMAL`** avec une précision de 10 chiffres et 2 décimales, renvoyant le résultat dans la colonne **`prix_decimal`**.

---

## *Les jointures en SQL*

Il existe différents types de jointures en SQL qui permettent de combiner les données de plusieurs tables en fonction des valeurs communes de leurs colonnes. Voici une liste des types de jointures les plus courants :

* Jointure interne (**INNER JOIN**) : La jointure interne sélectionne les lignes qui ont une correspondance dans les deux tables. Les données qui ne correspondent pas ne sont pas incluses dans le résultat de la jointure.
  Syntaxe :
  
  ```SQL
  SELECT * FROM table1 INNER JOIN table2 ON table1.colonne = table2.colonne;
  ```

* Jointure externe gauche (**LEFT OUTER JOIN**) : La jointure externe gauche retourne toutes les lignes de la table de gauche et les lignes correspondantes de la table de droite. Si une ligne de la table de gauche n'a pas de correspondance dans la table de droite, la colonne correspondante de la table de droite est remplie de valeurs NULL.
  Syntaxe :

  ```SQL
  SELECT * FROM table1 LEFT OUTER JOIN table2 ON table1.colonne = table2.colonne;
  ```

* Jointure externe droite (**RIGHT OUTER JOIN**) : La jointure externe droite est similaire à la jointure externe gauche, mais retourne toutes les lignes de la table de droite et les lignes correspondantes de la table de gauche.
  Syntaxe :
  
  ```SQL
  SELECT * FROM table1 RIGHT OUTER JOIN table2 ON table1.colonne = table2.colonne;
  ```

* Jointure complète (**FULL OUTER JOIN**) : La jointure complète retourne toutes les lignes de la table de gauche et de la table de droite. Si une ligne n'a pas de correspondance dans l'autre table, la colonne correspondante est remplie de valeurs NULL.
  Syntaxe :
  
  ```SQL
  SELECT * FROM table1 FULL OUTER JOIN table2 ON table1.colonne = table2.colonne;
  ```

* Jointure croisée (**CROSS JOIN**) : La jointure croisée combine chaque ligne de la première table avec chaque ligne de la deuxième table, produisant un produit cartésien.
  Syntaxe :
  
  ```SQL
  SELECT * FROM table1 CROSS JOIN table2;
  ```

  ![Alt text](https://blog.kakaocdn.net/dn/Ltzj9/btqxjAa3bEz/ezkzXBYDYOQeohPwyOKeyk/img.png)

---

## *Vocabulaire BDD \ SQL :*

### **Requête paramétrée :**

En SQL, une requête paramétrée est une requête préparée qui utilise des paramètres ou des variables pour spécifier les valeurs des critères de recherche ou des conditions dans la requête. Au lieu de spécifier directement les valeurs dans la requête, vous utilisez des paramètres qui sont remplacés par les valeurs réelles au moment de l'exécution de la requête.

Voici un exemple de requête paramétrée en SQL utilisant la syntaxe de paramètre spécifique à la base de données :

```SQL
SELECT * FROM table WHERE column = :param;
```

Dans cet exemple, **`:param`** est le paramètre qui sera remplacé par une valeur réelle lors de l'exécution de la requête. La syntaxe exacte pour spécifier les paramètres peut varier selon la base de données et la bibliothèque SQL utilisée.

L'utilisation de requêtes paramétrées permet de réduire les risques d'injections SQL et d'améliorer les performances des requêtes en évitant la compilation répétée des requêtes.  
  
### **Schéma :**

Un schéma est un ensemble logiques des données contenues de la BDD.  

### **Schéma relationnel :**

Un schéma relationnel est une structure de données utilisée pour représenter des relations entre des entités dans une base de données relationnelle. Il est composé de tables, de colonnes et de clés qui définissent la manière dont les données sont organisées et stockées dans la base de données.

Dans un schéma relationnel, chaque table représente une entité ou un type d'objet différent, et chaque ligne de la table représente une occurrence ou une instance de cette entité. Les colonnes de la table représentent des attributs ou des propriétés de l'entité, et chaque colonne a un nom unique qui décrit le type de données stockées.

Les clés sont un élément important du schéma relationnel, car elles permettent de définir les relations entre les tables. Une clé primaire est une colonne ou un groupe de colonnes qui identifie de manière unique chaque ligne de la table. Une clé étrangère est une colonne dans une table qui fait référence à une clé primaire dans une autre table, établissant ainsi une relation entre les deux tables.

En utilisant un schéma relationnel, les données peuvent être stockées, organisées et récupérées de manière efficace et cohérente, ce qui facilite l'analyse et la manipulation des données. Les schémas relationnels sont couramment utilisés dans les systèmes de gestion de bases de données relationnelles tels que Microsoft SQL Server, Oracle, MySQL, etc.

### **Vue :**

Une vue est une requête enregistrée qu'il est possible de l'utiliser dans des autres requêtes.  

***Exemple :***
Supposons que nous avons une table **`Clients`** avec les colonnes **`Nom`**, **`Adresse`** et **`Ville`**. Nous pouvons créer une vue appelée **`VueClients`** qui ne renvoie que les noms et adresses des clients, en excluant la ville.

```SQL
CREATE VIEW VueClients AS
SELECT Nom, Adresse FROM Clients;
```

Maintenant, chaque fois que nous interrogeons la vue **`VueClients`**, nous ne verrons que les noms et adresses des clients, même si la table **`Clients`** contient également des informations sur la ville. Par exemple :

```SQL
SELECT * FROM VueClients;
```

Cette requête renverra une liste de tous les noms et adresses des clients stockés dans la table **`Clients`**. La ville ne sera pas incluse car elle n'a pas été incluse dans la vue.  

Il est important de noter que les vues ne stockent pas réellement les données, elles fournissent simplement une vue virtuelle des données existantes. Les données affichées par une vue sont généralement mises à jour automatiquement lorsque les tables sous-jacentes sont modifiées.

### **Association :**

En base de données, une association (ou relation) est une correspondance entre deux tables qui sont liées entre elles par une **clé étrangère**. Elle permet de décrire comment les données sont reliées entre elles.

Il existe plusieurs types d'associations, qui sont définies par la façon dont les enregistrements des tables sont liés :

* **Une association 1 à 1 (one-to-one) :** chaque enregistrement d'une table est lié à un et un seul enregistrement d'une autre table.
* **Une association 1 à plusieurs (one-to-many) :** chaque enregistrement d'une table est lié à plusieurs enregistrements d'une autre table.
* **Une association plusieurs à plusieurs (many-to-many) :** chaque enregistrement d'une table peut être lié à plusieurs enregistrements d'une autre table, et vice versa.

Pour définir une association en base de données, on utilise une clé étrangère qui est une colonne d'une table qui référence la clé primaire d'une autre table. Cette clé étrangère permet de faire le lien entre les deux tables et d'établir l'association.

Par exemple, si on a une table **`Client`** avec une clé primaire **`id_client`**, et une table **`Commande`** avec une clé primaire **`id_commande`** et une clé étrangère **`id_client`** qui référence la clé primaire de la table **`Client`**, on peut établir une association entre les deux tables. Cette association permet de lier les commandes aux clients correspondants.
