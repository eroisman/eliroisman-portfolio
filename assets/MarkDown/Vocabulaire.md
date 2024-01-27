# *Vocabulaire*

---

## *Variable*

Une variable est une zone de la mémoire qui peut stocker une valeur.  
  
**Exemples :**

  1. **`int` :**

     * **Taille :** 4 octets (32 bits)
     * **Utilisation :** Stocke des valeurs entières (nombres entiers)
     * **Plage de valeurs :** -2 147 483 648 à 2 147 483 647 (2^31 valeurs possibles).  
     Le calcul est 2^31 et non 2^32, car le bit le plus significatif (le bit le plus à gauche) est réservé pour représenter le signe (+/-), ce qui divise la plage de valeurs en deux parties égales (positives et négatives).
     * **Exemple d'utilisation :**

       ```C#
       int age = 25;
       ```

  2. **`float` :**

     * **Taille :** 4 octets (32 bits)
     * **Utilisation :** Stocke des nombres à virgule flottante avec une précision relativement faible
     * **Plage de valeurs :** ±1.5 × 10^−45 à ±3.4 × 10^38
     * **Chiffres significatifs :** Environ 7 chiffres
     * **Exemple d'utilisation :**

       ```C#
       float poids = 65.5f;
       ```

  3. **`double` :**

     * **Taille :** 8 octets (64 bits)
     * **Utilisation :** Stocke des nombres à virgule flottante avec une précision élevée
     * **Plage de valeurs :** ±5.0 × 10^−324 à ±1.7 × 10^308
     * **Chiffres significatifs :** Environ 15 chiffres
     * **Exemple d'utilisation :**

       ```C#
       double taille = 1.75;
       ```

  4. **`bool` :**

     * **Taille :** 1 octet (8 bits)
     * **Utilisation :** Stocke des valeurs de vérité (vrai ou faux)
     * **Valeurs possibles :** `true` ou `false`
     * **Exemple d'utilisation :**

       ```C#
       bool estActif = true;
       ```

  5. **`string` :**

     * **Taille :** Variable (dépend de la longueur de la chaîne)
     * **Utilisation :** Stocke une séquence de caractères (texte)
     * **Exemple d'utilisation :**

       ```C#
       string nom = "John Doe";
       ```

  6. **`char` :**

     * **Taille :** 2 octets (16 bits)
     * **Utilisation :** Stocke un seul caractère Unicode
     * **Exemple d'utilisation :**

       ```C#
       char grade = 'A';
       ```

---

## *La portée d'une variable*

La portée d'une variable en C# définit la zone de code où cette variable peut être utilisée et référencée. En d'autres termes, la portée détermine l'étendue ou la visibilité d'une variable dans le code.
  
En C#, il existe plusieurs niveaux de portée pour les variables, notamment :

* **La portée de bloc :** Une variable déclarée à l'intérieur d'un bloc de code, tel qu'une boucle for ou un bloc if, est limitée à ce bloc spécifique et ne peut être utilisée que dans ce bloc et dans les blocs de code imbriqués à l'intérieur de celui-ci. Une fois que le bloc est quitté, la variable n'est plus accessible. Par exemple :
  
  ```C#
  void MyMethod()
  {
      int x = 5; // Variable x déclarée avec une portée de bloc

      if (x > 0)
      {
          int y = 10; // Variable y déclarée avec une portée de bloc
          Console.WriteLine(x + y); // Accès à x et y
      }

      Console.WriteLine(x); // Accès uniquement à x
      Console.WriteLine(y); // Erreur : y n'est pas accessible ici car la portée est limitée au bloc if
  }
  ```
  
* **La portée de méthode :** Une variable déclarée à l'intérieur d'une méthode peut être utilisée dans toute la méthode, y compris dans les blocs de code imbriqués. La portée d'une variable de méthode s'étend à partir du point de déclaration jusqu'à la fin de la méthode. Par exemple :
  
  ```C#
  void MyMethod()
  {
      int x = 5; // Variable x déclarée avec une portée de méthode

      if (x > 0)
      {
          int y = 10; // Variable y déclarée avec une portée de bloc
          Console.WriteLine(x + y); // Accès à x et y
      }

      Console.WriteLine(x); // Accès à x
      Console.WriteLine(y); // Erreur : y n'est pas accessible ici car sa portée est limitée au bloc if
  }
  ```
  
* **La portée de classe :** Une variable déclarée à l'intérieur d'une classe (mais à l'extérieur des méthodes) peut être utilisée dans toute la classe, y compris dans les méthodes et les blocs de code. La portée d'une variable de classe s'étend à partir du point de déclaration jusqu'à la fin de la classe. Par exemple :
  
  ```C#
  class MyClass
  {
      int x = 5; // Variable x déclarée avec une portée de classe

      void MyMethod()
      {
          int y = 10; // Variable y déclarée avec une portée de méthode
          Console.WriteLine(x + y); // Accès à x et y
      }

      void AnotherMethod()
      {
          Console.WriteLine(x); // Accès à x
          Console.WriteLine(y); // Erreur : y n'est pas accessible ici car sa portée est limitée à MyMethod
      }
  }
  ```

La portée d'une variable peut être modifiée en utilisant des modificateurs d'accès tels que **`public`** ou **`private`**. Les variables déclarées avec le modificateur **`public`** peuvent être utilisées à partir de n'importe où dans le code, tandis que les variables déclarées avec le modificateur **`private`** ne peuvent être utilisées que dans la classe où elles ont été déclarées.

---

## *Block de code*

Le block de code est définit par une accolade ouvert **`{`** et une accolade fermée **`}`**.
Un block de code est construit par une ou plusieurs instructions.
Une instruction est fini par **`;`** ou un block de code.  
  
**Example :**

```C#
void MyMethod()
{
    int x = 5;
    int y = 10;

    if (x > y)
    {
        Console.WriteLine("x est plus grand que y");
        Console.WriteLine("Ceci est une instruction à l'intérieur du bloc 'if'");
    }
    else
    {
        Console.WriteLine("x est plus petit que y");
        Console.WriteLine("Ceci est une autre instruction à l'intérieur du bloc 'else'");
    }

    Console.WriteLine("Ceci est une instruction en dehors du bloc 'if-else'");

    for (int i = 0; i < 5; i++)
    {
        Console.WriteLine("Ceci est une instruction à l'intérieur de la boucle 'for'");
        Console.WriteLine("La valeur de i est : " + i);
    }

    Console.WriteLine("Ceci est une autre instruction en dehors de la boucle 'for'");
}
```

Dans cet exemple, la méthode **`MyMethod()`** contient plusieurs blocs de code délimités par des accolades. Les instructions telles que les déclarations de variables, les conditions **`if-else`**, les boucles **`for`**, et les appels à **`Console.WriteLine()`** sont regroupées à l'intérieur des blocs de code.
  
La structure des blocs de code permet de regrouper des instructions connexes et de définir leur portée. Les blocs de code facilitent également la lecture et la compréhension du code en organisant logiquement les instructions.

---

## *Procédure*

Une procédure est un block de code que l'on nomme et peut être rappeler plusieurs fois.  
  
En C#, une procédure est une construction de code qui effectue une série d'instructions spécifiques. Elle est également appelée *méthode*. Une procédure est définie avec un nom, des paramètres éventuels et un bloc de code associé. Elle peut être appelée plusieurs fois à partir d'autres parties du programme pour exécuter les instructions qu'elle contient.
  
**Example :**

```C#
void GreetUser(string name)
{
    Console.WriteLine("Bonjour, " + name + " !");
    Console.WriteLine("Bienvenue dans notre programme.");
}

// Appel de la procédure
GreetUser("John");
GreetUser("Alice");
```

Dans cet exemple, nous avons défini une procédure appelée **`GreetUser`** qui prend un paramètre **`name`** de type string. À l'intérieur de la procédure, nous avons deux instructions **`Console.WriteLine`** qui affichent un message de salutation personnalisé pour l'utilisateur.
  
Ensuite, nous appelons la procédure **`GreetUser`** deux fois avec des arguments différents, ce qui exécute le bloc de code de la procédure à chaque appel et affiche les messages de salutation appropriés.
  
Les procédures sont utiles pour réutiliser le code et éviter la duplication. En les définissant une fois, vous pouvez les appeler à plusieurs endroits du programme pour exécuter la même séquence d'instructions.

---

## *Fonction*

Une fonction est un bloc de code que l'on nomme et qui renvoie une valeur.  
  
En C#, une fonction est une construction de code similaire à une procédure, mais elle retourne une valeur après l'exécution de son bloc de code. Une fonction est également appelée *méthode* avec retour.
  
**Exemple :**

```C#
int AddNumbers(int a, int b)
{
    int sum = a + b;
    return sum;
}

// Appel de la fonction et stockage du résultat dans une variable
int result = AddNumbers(5, 3);
Console.WriteLine("Le résultat de l'addition est : " + result);
```

Dans cet exemple, nous avons défini une fonction appelée **`AddNumbers`** qui prend deux paramètres **`a`** et **`b`** de type **`int`**. À l'intérieur de la fonction, nous effectuons l'addition des deux nombres et stockons le résultat dans la variable **`sum`.** Ensuite, nous utilisons le mot-clé **`return`** pour renvoyer la valeur de **`sum`**.
  
Ensuite, nous appelons la fonction **`AddNumbers`** avec les arguments **`5`** et **`3`** et stockons le résultat retourné dans la variable **`result`**. Enfin, nous affichons le résultat à l'aide de **`Console.WriteLine`**.
  
Les fonctions sont utilisées lorsque vous avez besoin d'un résultat ou d'une valeur calculée à partir d'un bloc de code spécifique. Elles peuvent être appelées à partir d'autres parties du programme et le résultat peut être utilisé pour effectuer d'autres opérations ou être affiché à l'utilisateur.

---

## *Concaténation*

La concaténation est le fait d'ajouter une chaîne de caractères à une autre chaîne de caractères.  
  
**Example :**

```C#
string firstName = "John";
string lastName = "Doe";

string fullName = firstName + " " + lastName;

Console.WriteLine("Nom complet : " + fullName);
```

Dans cet exemple, nous avons deux variables **`firstName`** et **`lastName`** contenant des chaînes de caractères représentant un prénom et un nom. En utilisant l'opérateur de concaténation **`+`**, nous combinons les deux chaînes avec un espace entre elles pour former la variable **`fullName`**.
  
Ensuite, nous utilisons la concaténation pour afficher le résultat final en ajoutant la chaîne **`"Nom complet : "`** avant la variable **`fullName`** à l'aide de **`Console.WriteLine`**.
  
La concaténation peut également être utilisée pour combiner des variables avec des valeurs littérales ou pour ajouter des variables à des chaînes de caractères existantes.

---

## *Paramètre*

Les paramètres sont des variables déclarées dans les parenthèses d'une procédure ou une fonctionne qui permettent de passer des informations au procédure ou une fonction.
  
**Example :**

```C#
int AddNumbers(int a, int b)
{
    int sum = a + b;
    return sum;
}

// Appel de la fonction avec des arguments
int result = AddNumbers(5, 3);
Console.WriteLine("Le résultat de l'addition est : " + result);
```

Dans cet exemple, la fonction **`AddNumbers`** prend deux paramètres : **`a`** et **`b`**, qui sont de type **`int`**. Lorsque la fonction est appelée avec des arguments (**`5`** et **`3`** dans cet exemple), les valeurs des arguments sont assignées aux paramètres **`a`** et **`b`** respectivement à l'intérieur de la fonction.
  
À l'intérieur de la fonction, les paramètres **`a`** et **`b`** sont utilisés pour effectuer une addition et le résultat est renvoyé à l'aide de l'instruction **`return`**.
  
Lorsque la fonction est appelée avec des arguments **`5`** et **`3`**, elle retourne le résultat de l'addition **`8`**, qui est ensuite stocké dans la variable **`result`** et affiché à l'aide de **`Console.WriteLine`**.
  
Les paramètres permettent de transmettre des données à une procédure ou une fonction et d'effectuer des opérations en utilisant ces données. Ils permettent de rendre les procédures et les fonctions plus génériques et réutilisables.

---

## *Paramètre optionnel*

En C#, un paramètre optionnel (ou *"paramètre facultatif"*) est un paramètre qui a une valeur par défaut spécifiée dans la signature de la méthode. Cela signifie que lorsqu'un appelant de méthode n'attribue pas de valeur à un tel paramètre, la valeur par défaut sera utilisée à la place.  

**Example :**

```C#
void GreetUser(string name, string greeting = "Bonjour")
{
    Console.WriteLine(greeting + ", " + name + " !");
}

// Appel de la méthode sans spécifier le paramètre optionnel
GreetUser("John");  // Affiche "Bonjour, John !"

// Appel de la méthode en spécifiant le paramètre optionnel
GreetUser("Alice", "Salut");  // Affiche "Salut, Alice !"
```

Dans cet exemple, nous avons défini une méthode **`GreetUser`** qui prend deux paramètres : **`name`** de type **`string`** et **`greeting`** de type **`string`** avec une valeur par défaut **`"Bonjour"`**.
  
Lorsque nous appelons la méthode sans spécifier le paramètre optionnel (**`GreetUser("John")`**), la valeur par défaut "Bonjour" est utilisée, et la méthode affiche "Bonjour, John !" à l'aide de **`Console.WriteLine`**.
  
Lorsque nous appelons la méthode en spécifiant une valeur pour le paramètre optionnel (**`GreetUser("Alice", "Salut")`**), la valeur spécifiée ("Salut") remplace la valeur par défaut, et la méthode affiche "Salut, Alice !".
  
L'utilisation de paramètres optionnels peut rendre le code plus lisible et plus facile à utiliser, en évitant la nécessité d'écrire des surcharges de méthode pour gérer différents cas où certains paramètres ne sont pas fournis.

---

## *Objet*

Un objet est un sous ensemble de code qui contient des propriétés et des méthodes.

* **Propriétés :** Les propriétés sont les caractéristiques des objets.
* **Méthodes :** Les méthodes c'est sont les actions que les objets peuvent utiliser.  
  
***Les propriétés*** représentent les caractéristiques ou les états de l'objet. Elles sont utilisées pour stocker et accéder aux données spécifiques à l'objet. Par exemple, si nous avons une classe **`Personne`**, les propriétés de cette classe pourraient inclure le nom, l'âge, l'adresse, etc. Chaque objet créé à partir de cette classe aura ses propres valeurs pour ces propriétés.
  
***Les méthodes***, quant à elles, représentent les actions que les objets peuvent effectuer. Elles définissent le comportement de l'objet et permettent d'effectuer des opérations spécifiques sur les propriétés de l'objet ou d'interagir avec d'autres objets. Par exemple, une méthode **`AfficherDetails()`** dans la classe **`Personne`** pourrait afficher les détails de la personne, comme son nom, son âge, etc.

**Example :**

```C#
class Personne
{
    // Propriétés
    public string Nom { get; set; }
    public int Age { get; set; }

    // Méthodes
    public void AfficherDetails()
    {
        Console.WriteLine("Nom : " + Nom);
        Console.WriteLine("Âge : " + Age);
    }
}

// Utilisation de la classe Personne
Personne personne1 = new Personne();
personne1.Nom = "John Doe";
personne1.Age = 25;
personne1.AfficherDetails();
```

Dans cet exemple, nous avons une classe **`Personne`** qui a deux propriétés : **`Nom`** de type **`string`** et **`Age`** de type **`int`**. La classe a également une méthode **`AfficherDetails()`** qui affiche les détails de la personne.
  
Nous créons ensuite un objet **`personne1`** de type **`Personne`** en utilisant le constructeur par défaut **`new Personne()`**. Nous attribuons des valeurs aux propriétés **`Nom`** et **`Age`** de **`personne1`** et appelons la méthode **`AfficherDetails()`** pour afficher les détails de la personne.

---

## *Tableau*

Un tableau est une zone de la mémoire qui peut contenir plusieurs informations de même type. Les **`[]`** dans une variable signifie que c'est un tableau. Les éléments sont placés dans des emplacements mémoire contigus, et l'accès aux éléments se fait à l'aide d'un index.  
  
**Exemple :**

```C#
// Déclaration d'un tableau d'entiers
int[] tableauEntiers;

// Initialisation du tableau avec des valeurs
tableauEntiers = new int[] { 1, 2, 3, 4, 5 };

// Accès aux éléments du tableau en utilisant l'index
int premierElement = tableauEntiers[0];  // Valeur : 1
int deuxiemeElement = tableauEntiers[1]; // Valeur : 2

// Modification d'un élément du tableau
tableauEntiers[2] = 10;  // Remplace la valeur 3 par 10

// Longueur du tableau
int longueur = tableauEntiers.Length;  // Valeur : 5

// Parcours du tableau avec une boucle
for (int i = 0; i < tableauEntiers.Length; i++)
{
    Console.WriteLine(tableauEntiers[i]);
}
```

Dans cet exemple, nous déclarons un tableau d'entiers en utilisant la syntaxe **`int[]`**. Ensuite, nous l'initialisons en lui attribuant une nouvelle instance de tableau contenant les valeurs **`{ 1, 2, 3, 4, 5 }`**.
  
Pour accéder aux éléments du tableau, nous utilisons l'index entre crochets (**`[]`**). Par exemple, **`tableauEntiers[0]`** nous donne le premier élément du tableau.
  
Nous pouvons également modifier les éléments du tableau en utilisant l'index. Par exemple, **`tableauEntiers[2] = 10`** remplace la valeur **`3`** par **`10`** dans le tableau.
  
La propriété **`Length`** est utilisée pour obtenir la longueur du tableau, c'est-à-dire le nombre d'éléments qu'il contient.
  
Enfin, nous pouvons parcourir le tableau à l'aide d'une boucle **`for`** en utilisant l'index pour accéder à chaque élément du tableau et effectuer des opérations.

---

## *New*

En C#, le mot-clé **`new`** est utilisé pour instancier un objet à partir d'une classe. Il alloue de la mémoire pour l'objet et appelle son constructeur pour l'initialiser.
  
**Exemple :**

```C#
// Définition d'une classe
class Personne
{
    public string Nom { get; set; }
    public int Age { get; set; }
}

// Instanciation d'un objet en utilisant le mot-clé new
Personne personne1 = new Personne();

// Attribution de valeurs aux propriétés de l'objet
personne1.Nom = "John Doe";
personne1.Age = 25;
```

Dans cet exemple, nous avons une classe **`Personne`** avec deux propriétés : **`Nom`** et **`Age`**. Ensuite, nous utilisons le mot-clé **`new`** pour créer une nouvelle instance de la classe **`Personne`**, que nous stockons dans la variable **`personne1`**. Cette opération alloue de la mémoire pour l'objet **`personne1`** et appelle le constructeur par défaut de la classe **`Personne`**.
  
Après avoir instancié l'objet, nous pouvons accéder à ses propriétés et leur attribuer des valeurs spécifiques, comme **`personne1.Nom = "John Doe"`** et **`personne1.Age = 25`**.
  
L'utilisation du mot-clé **`new`** est nécessaire pour créer une instance d'un objet à partir d'une classe. Cela permet de réserver l'espace mémoire requis pour stocker l'objet et d'initialiser ses propriétés à des valeurs par défaut, le cas échéant.

---

## *Calcul `UTF-8` et `UTF-16`*

les encodages **`UTF-8`** et **`UTF-16`** sont deux formats de codage des caractères Unicode utilisés pour représenter des caractères dans les systèmes informatiques.  

* **`UTF-8`  :** 2 puissance 8 = 256  
    L'encodage **`UTF-8`** utilise des octets pour représenter les caractères Unicode. Un caractère peut être codé sur 1 à 4 octets en **`UTF-8`**, mais la plupart des caractères couramment utilisés sont codés sur 1 à 3 octets. 
    &nbsp;
* **`UTF-16` :** 2 puissance 16 = 65,536
    L'encodage **`UTF-16`** utilise des mots de 16 bits (2 octets) pour représenter les caractères Unicode. Les caractères de base (**`BMP - Basic Multilingual Plane`**) sont codés sur 2 octets, tandis que les caractères supplémentaires (en dehors du **`BMP`**) sont codés sur 4 octets en utilisant une technique appelée *paire de substitution*.  

---

## *Collection*

En C#, les collections sont utilisées pour stocker, organiser et manipuler des ensembles d'éléments de données. Elles offrent une manière pratique et efficace de gérer des données regroupées.
  
Voici quelques exemples de classes de collection couramment utilisées en C# :

* **Tableaux (`arrays`) :** Les tableaux sont des structures de données statiques qui permettent de stocker un ensemble d'éléments du même type. La taille d'un tableau est définie lors de sa création et ne peut pas être modifiée par la suite.
&nbsp;
* **Listes (`lists`) :** Les listes, représentées par la classe **`List<T>`**, permettent de stocker une collection d'éléments de manière dynamique. Elles offrent des fonctionnalités telles que l'ajout, la suppression, l'accès par index et la recherche d'éléments.
&nbsp;
* **Dictionnaires (`dictionaries`) :** Les dictionnaires, représentés par la classe **`Dictionary<TKey, TValue>`**, permettent de stocker des paires clé-valeur. Chaque élément est associé à une clé unique, ce qui permet d'accéder rapidement à la valeur correspondante en fonction de la clé.
&nbsp;
* **Ensembles (`sets`) :** Les ensembles, représentés par la classe **`HashSet<T>`**, sont utilisés pour stocker une collection d'éléments uniques, sans ordre spécifique. Ils sont utiles lorsque vous avez besoin de vérifier rapidement l'appartenance d'un élément à un ensemble.
&nbsp;
* **Files d'attente (`queues`) :** Les files d'attente, représentées par la classe **`Queue<T>`**, suivent le principe du premier entré, premier sorti (FIFO). Elles sont couramment utilisées pour implémenter des structures de données telles que les files d'attente dans les algorithmes.
&nbsp;
* **Piles (`stacks`) :** Les piles, représentées par la classe **`Stack<T>`**, suivent le principe du dernier entré, premier sorti (LIFO). Elles sont utilisées dans de nombreux scénarios, tels que la gestion des appels de méthode et les algorithmes de parcours d'arbres.
&nbsp;
* **Arbres (`trees`) :** Les arbres, tels que les arbres binaires, les arbres de recherche ou les arbres AVL, sont des structures de données hiérarchiques utilisées pour stocker et organiser des données de manière efficace, en permettant des opérations de recherche, d'insertion et de suppression efficaces.

Ces classes de collection, ainsi que d'autres disponibles dans le Framework **.NET**, offrent des fonctionnalités prêtes à l'emploi pour manipuler et organiser les données en fonction des besoins spécifiques d'un programme.

---

## *Commentaire public*

En C#, pour ajouter un commentaire public (ou commentaire XML) à une méthode, une propriété ou un champ, il faut utiliser les caractères spéciaux **`///`** en début de ligne.  
Voici un exemple de commentaire public pour une méthode :  

```C#
/// <summary>
/// Cette méthode calcule la somme de deux entiers.
/// </summary>
/// <param name="a">Le premier entier.</param>
/// <param name="b">Le deuxième entier.</param>
/// <returns>La somme des deux entiers.</returns>
public int CalculerSomme(int a, int b)
{
    return a + b;
}
```

Dans cet exemple, le commentaire public commence par **`///`**, suivi d'une balise **`<summary>`** qui décrit brièvement la fonction de la méthode. Ensuite, il y a deux balises **`<param>`** qui décrivent les paramètres de la méthode et une balise **`<returns>`** qui décrit la valeur de retour de la méthode.
  
Voici quelques balises couramment utilisées dans les commentaires publics en C# :

* **`<summary>` :** Cette balise est utilisée pour fournir une description succincte de la méthode, de la propriété, du champ, etc. C'est généralement le premier élément dans un commentaire public et il est destiné à donner un aperçu global de l'élément documenté.
&nbsp;
* **`<param>` :** Cette balise est utilisée pour documenter les paramètres d'une méthode ou d'une fonction. Elle est utilisée avec l'attribut **`name`** pour spécifier le nom du paramètre et fournir une description de son rôle.
&nbsp;
* **`<returns>` :** Cette balise est utilisée pour documenter la valeur de retour d'une méthode ou d'une fonction. Elle est utilisée pour spécifier le type de valeur renvoyé et fournir une description de la signification de cette valeur de retour.
&nbsp;
* **`<see>` :** Cette balise est utilisée pour créer des liens vers d'autres éléments du code, tels que des méthodes, des propriétés, des classes, etc. Elle est souvent utilisée pour établir des relations entre différentes parties du code documenté.
&nbsp;
* **`<example>` :** Cette balise est utilisée pour fournir des exemples d'utilisation de l'élément documenté. Elle peut contenir du code qui illustre comment utiliser correctement l'élément.
  
Les commentaires publics sont utiles pour documenter le code et fournir des informations utiles aux développeurs qui utilisent une bibliothèque ou une API. Les commentaires publics sont également utilisés par les outils de documentation automatique pour générer des documents d'aide ou des fichiers XML de documentation.

---

## *`Timestemp`*

Le **`timestemp`** est un nombre de secondes et millisecondes écoulées depuis une date de référence.  
Les dates en informatique sont géré par un **`timestemp`**.  
  
La date de référence la plus couramment utilisée est appelée "**`Unix Epoch`**", qui est fixée au **1er janvier 1970 à 00:00:00 UTC**. A partir de cette date, le nombre de secondes ou de millisecondes écoulées est calculé pour représenter une date spécifique.

Les **`timestamps`** sont souvent utilisés pour effectuer des opérations de calcul de durée, comparer des dates, effectuer des conversions de format de date et d'autres opérations liées au temps. Les systèmes d'exploitation, les bases de données et de nombreux langages de programmation fournissent des fonctionnalités pour travailler avec les **`timestamps`**.

Voici un exemple de code en C# pour obtenir le **`timestamp`** actuel en secondes et en millisecondes :

```C#
DateTime now = DateTime.Now;

// Obtenir le timestamp en secondes
long timestampSeconds = new DateTimeOffset(now).ToUnixTimeSeconds();

// Obtenir le timestamp en millisecondes
long timestampMilliseconds = new DateTimeOffset(now).ToUnixTimeMilliseconds();

Console.WriteLine("Timestamp en secondes : " + timestampSeconds);
Console.WriteLine("Timestamp en millisecondes : " + timestampMilliseconds);
```

Dans cet exemple, la classe **`DateTime.Now`** est utilisée pour obtenir la date et l'heure actuelles. Ensuite, les méthodes **`ToUnixTimeSeconds()`** et **`ToUnixTimeMilliseconds()`** de la classe **`DateTimeOffset`** sont utilisées pour convertir la date en timestamps en secondes et en millisecondes respectivement.  

**Pour savoir si une année est bissextile, il faut vérifier :**

* Si l'année est divisible par 4, mais non divisible par 100, ou si elle est divisible par 400 = l'année est bissextile.
* Sinon = l'année n'est pas bissextile.  
  
**Exemple en C# :**  

```C#
public static bool EstBissextile(int annee)
{
    if (annee % 4 == 0 && (annee % 100 != 0 || annee % 400 == 0))
    {
        return true;
    }
    else
    {
        return false;
    }
}
```

Dans cette fonction, on vérifie d'abord si l'année est divisible par 4. Si c'est le cas, on vérifie ensuite si elle est divisible par 100 ou par 400. Si elle est divisible par 100 mais pas par 400, alors elle n'est pas bissextile. Sinon, si elle est divisible par 400, alors elle est bissextile. Sinon, si elle n'est pas divisible par 4, alors elle n'est pas bissextile.

On peut ensuite utiliser cette fonction pour vérifier si une année donnée est bissextile, comme ceci :

```C#
int annee = 2023;
if (EstBissextile(annee))
{
    Console.WriteLine("{0} est bissextile", annee);
}
else
{
    Console.WriteLine("{0} n'est pas bissextile", annee);
}
```
