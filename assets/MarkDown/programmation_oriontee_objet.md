# *Programmation orientée objet*

---

## *Définition*

---

La programmation orientée objet est un moyen de créer des programmes informatiques en utilisant des objets qui ont des caractéristiques (propriétés) et des actions (méthodes) spécifiques. Ces objets sont basés sur des modèles appelés classes qui définissent comment ils fonctionnent. Les objets créés à partir de ces classes ont les mêmes caractéristiques et actions, mais peuvent avoir des valeurs de propriétés différentes.  
  
**Pourquoi utiliser la POO :**  

* **La réutilisabilité :** en encapsulant des données et des fonctionnalités dans des objets, on peut les réutiliser facilement dans différents contextes, ce qui réduit la duplication de code et facilite la maintenance.
* **L'organisation du code :** la POO permet d'organiser le code en classes et en objets, ce qui facilite la compréhension et la modification du code.
* **La sécurisation :** en utilisant des techniques de POO telles que l'encapsulation et l'abstraction, on peut mieux sécuriser le code et limiter les erreurs potentielles.  

---

## *Vocabulaire*

---

### **Classe :**

Une classe est un sous ensemble de code de type personnalisé, qui réuni des variables, des procédures ou des fonctions.

***Example :***

```C#
public class Personne
{
    // Variables membres de classe
    public string Nom;
    public int Age;

    // Méthode membre de classe
    public void Saluer()
    {
        Console.WriteLine("Bonjour, je m'appelle {0} et j'ai {1} ans.", Nom, Age);
    }
}
```

Dans cet exemple, nous avons une classe appelée **`Personne`** qui contient deux variables membres (**`Nom`** et **`Age`**) et une méthode membre (**`Saluer`**). Les variables membres stockent des informations spécifiques à une instance de la classe, tandis que les méthodes membres définissent les actions que la classe peut effectuer.
  
Pour créer une instance (ou un objet) de cette classe et utiliser ses membres, vous pouvez faire ce qui suit :

```C#
Personne personne1 = new Personne();
personne1.Nom = "Alice";
personne1.Age = 30;
personne1.Saluer();  // Affiche "Bonjour, je m'appelle Alice et j'ai 30 ans."
```

Ici, nous créons une nouvelle instance de la classe **`Personne`** en utilisant l'opérateur **`new`**. Ensuite, nous pouvons accéder aux variables membres (**`Nom`** et **`Age`**) et à la méthode membre (**`Saluer()`**) de cet objet.

---

### **Objet :**

Un objet est un ensemble de code qui rassemble des **variables** et des **fonctions** dans un même endroit.  

Un objet en programmation est une ***instance*** d'une classe. Une classe sert de modèle ou de plan pour créer des objets spécifiques qui partagent des propriétés et des comportements communs.

Un objet est créé à partir d'une classe en utilisant le mot-clé **`new`** suivi du nom de la classe et des éventuels arguments nécessaires pour son initialisation. Une fois créé, un objet possède des attributs (***variables***) qui représentent son état et des méthodes (***fonctions***) qui définissent son comportement.

***Example :***

Par exemple, considérons une classe **`Voiture`** qui représente une voiture :

```C#
public class Voiture
{
    public string Marque;
    public string Modèle;
    public int Année;

    public void Démarrer()
    {
        Console.WriteLine("La voiture démarre.");
    }

    public void Accélérer()
    {
        Console.WriteLine("La voiture accélère.");
    }

    public void Freiner()
    {
        Console.WriteLine("La voiture freine.");
    }
}
```

Ensuite, nous pouvons créer des objets de cette classe et les utiliser :

```C#
Voiture maVoiture = new Voiture();
maVoiture.Marque = "Toyota";
maVoiture.Modèle = "Corolla";
maVoiture.Année = 2020;

maVoiture.Démarrer();  // Affiche "La voiture démarre."
maVoiture.Accélérer();  // Affiche "La voiture accélère."
maVoiture.Freiner();  // Affiche "La voiture freine."
```

Dans cet exemple, nous créons un objet **`maVoiture`** de la classe **`Voiture`**. Nous pouvons accéder aux attributs de l'objet (**`Marque`**, **`Modèle`**, **`Année`**) et appeler les méthodes (**`Démarrer`**, **`Accélérer`**, **`Freiner`**) pour effectuer des actions spécifiques sur cet objet.
  
Les objets permettent de regrouper des données et des fonctionnalités associées dans un même contexte, ce qui facilite l'organisation, la gestion et la réutilisation du code.

---

### **Encapsulation :**

L'encapsulation est un concept clé de la programmation orientée objet (POO) qui consiste à regrouper des données (**variables**) et des opérations (**méthodes**) associées dans une classe, en limitant leur accès direct depuis l'extérieur de la classe. L'encapsulation vise à préserver l'intégrité et la cohérence des données en fournissant un contrôle strict sur leur manipulation.
  
Dans le contexte de l'encapsulation, il est courant de déclarer les variables de classe en tant que **variables privées** (**`private`**), ce qui signifie qu'elles ne peuvent être accédées directement que depuis l'intérieur de la classe. Cela permet de restreindre l'accès aux données et de maintenir leur intégrité en évitant des modifications non contrôlées.
  
Pour accéder et modifier ces variables privées, on utilise généralement des **accesseurs** (***getters*** et ***setters***) qui sont des méthodes publiques spéciales définies dans la classe. Les accesseurs permettent d'obtenir la valeur d'une variable privée (***getter***) ou de la modifier (***setter***) de manière contrôlée, en appliquant éventuellement des validations ou des traitements supplémentaires.

***Voici un exemple qui illustre l'encapsulation avec des accesseurs :***

```C#
public class Personne
{
    private string nom;
    private int age;

    public string Nom
    {
        get { return nom; }
        set { nom = value; }
    }

    public int Age
    {
        get { return age; }
        set
        {
            if (value >= 0)
                age = value;
            else
                Console.WriteLine("L'âge ne peut pas être négatif.");
        }
    }
}
```

Dans cet exemple, la classe **`Personne`** contient deux variables privées **`nom`** et **`age`**. Ces variables sont encapsulées et ne peuvent être directement accédées depuis l'extérieur de la classe.
  
Pour accéder à ces variables, nous utilisons les **accesseurs** (***getters*** et ***setters***). Le getter permet d'obtenir la valeur de la variable, tandis que le setter permet de modifier la valeur de la variable après une éventuelle validation.
  
Ainsi, en utilisant des accesseurs, nous pouvons contrôler et valider l'accès aux variables privées, garantissant ainsi l'intégrité des données et facilitant leur utilisation dans le reste du programme.

```C#
Personne personne = new Personne();
personne.Nom = "John Doe";
personne.Age = -30;  // Affiche "L'âge ne peut pas être négatif."
Console.WriteLine(personne.Nom);  // Affiche "John Doe"
Console.WriteLine(personne.Age);  // Affiche 0 (valeur par défaut)
```

Dans cet exemple, nous créons un objet **`personne`** de la classe **`Personne`** et utilisons les accesseurs pour définir le nom et l'âge de la personne. Le setter de l'âge effectue une validation pour s'assurer que la valeur est positive.
  
L'encapsulation et l'utilisation d'accesseurs offrent plusieurs avantages, notamment la protection des données, la facilité de maintenance et l'abstraction des détails internes de la classe pour les utilisateurs externes.

---

### **Propriété :**

Dans une classe, une propriété est des accesseurs qui s'utilisent avec l'operateur **`=`**.  
  
En C#, une propriété est une entité qui combine un ***getter*** et un ***setter*** pour accéder et modifier la valeur d'une variable privée d'une classe. Les propriétés fournissent une manière plus concise et intuitive d'accéder aux variables privées tout en permettant de contrôler leur lecture et leur écriture.
  
Lorsque vous définissez une propriété, vous spécifiez un bloc de code pour le ***getter*** (lecture) et/ou le ***setter*** (écriture) de cette propriété. Le getter est utilisé pour obtenir la valeur de la propriété, tandis que le setter est utilisé pour définir la valeur de la propriété.
  
***Voici un exemple de déclaration d'une propriété en C# :***

```C#
public class Personne
{
    private string nom;
    
    public string Nom
    {
        get { return nom; }
        set { nom = value; }
    }
}
```

Dans cet exemple, la classe **`Personne`** a une propriété **`Nom`** qui est associée à une variable privée **`nom`**. Le ***getter*** de la propriété renvoie la valeur de la variable **`nom`** lorsque la propriété est consultée, tandis que le ***setter*** affecte la valeur spécifiée à la variable **`nom`** lorsque la propriété est modifiée.
  
L'utilisation de la propriété se fait comme si vous utilisiez une variable. Par exemple :

```C#
Personne personne = new Personne();
personne.Nom = "John Doe";  // Utilisation du setter pour définir la valeur
string nomPersonne = personne.Nom;  // Utilisation du getter pour obtenir la valeur
```

Dans cet exemple, nous créons une instance de la classe **`Personne`** et utilisons la propriété **`Nom`** comme si elle était une variable. L'opérateur **`=`** est utilisé pour affecter une valeur à la propriété (utilisation du ***setter***) et pour récupérer la valeur de la propriété (utilisation du ***getter***).
  
L'utilisation des propriétés offre plusieurs avantages par rapport à l'accès direct aux variables privées. Cela permet de contrôler l'accès aux données, de valider les valeurs assignées, de fournir une interface plus intuitive pour interagir avec les objets et de faciliter la maintenance du code en offrant une abstraction des détails internes de la classe.

---

### **Accesseur :**

Un accesseur (ou *propriété*) est un mécanisme qui permet d'encapsuler l'accès aux champs (ou variables) d'un objet en fournissant des méthodes pour y accéder. Les accesseurs permettent de contrôler la lecture et l'écriture des valeurs des champs, en appliquant des règles métier ou en effectuant des opérations supplémentaires.

**Il existe deux types d'accesseurs en C# :**

1. **Accesseur en lecture-seule (*getter*) :** Il permet de récupérer la valeur d'un champ. Il est défini avec le mot-clé **`get`**.  
   &nbsp;
   * ***Exemple 1 :***
  
     ```C#
     public class Personne
     {
         private int age;
   
         public Personne(int age)
         {
             this.age = age;
         }

         public int Age
         {
             get { return age; }
         }
     }

     // Utilisation de la propriété
     Personne personne = new Personne(30);
     int agePersonne = personne.Age;  // Utilisation du getter pour obtenir la valeur
     Console.WriteLine(agePersonne);  // Affiche "30"
     ```

     Dans cet exemple, nous avons une classe **`Personne`** avec un champ privé **`age`** et une propriété publique en lecture seule **`Age`**. La propriété ne possède qu'un accesseur en lecture (***getter***), ce qui nous permet de récupérer la valeur du champ **`age`**. Nous créons une instance de la classe **`Personne`** avec un âge de 30, puis nous utilisons le getter pour récupérer la valeur de l'âge et l'afficher.  

   &nbsp;
   * ***Exemple 2 :***  

     ```C#
     public class Personne
     {
         public int Age { get; }
  
         public Personne(int age)
         {
             Age = age;
         }
     }

     // Utilisation de la propriété
     Personne personne = new Personne(30);
     int agePersonne = personne.Age;  // Utilisation du getter pour obtenir la valeur
     Console.WriteLine(agePersonne);  // Affiche "30"
     ```

     Ce deuxième exemple utilise la syntaxe des propriétés en lecture seule auto-implémentées. La classe **`Personne`** possède une propriété publique **`Age`** définie avec la syntaxe **`{ get; }`**. La valeur de la propriété est définie uniquement dans le constructeur de la classe et ne peut pas être modifiée ensuite. Nous créons une instance de la classe **`Personne`** avec un âge de 30, puis nous utilisons le ***getter*** pour récupérer la valeur de l'âge et l'afficher.
     &nbsp;

2. **Accesseur en lecture-écriture (*getter/setter*) :** Il permet à la fois de récupérer et de modifier la valeur d'un champ. Il est défini avec les mots-clés **`get`** et **`set`**.
   &nbsp;  
   * ***Exemple 1 :***

     ```C#
     public class Personne
     {
         private string nom;

         public string Nom
         {
             get { return nom; }
             set { nom = value; }
         }
     }

     // Utilisation de la propriété
     Personne personne = new Personne();
     personne.Nom = "John";  // Utilisation du setter pour définir la valeur
     string nomPersonne = personne.Nom;  // Utilisation du getter pour obtenir la valeur
     Console.WriteLine(nomPersonne);  // Affiche "John"
     ```

     Dans cet exemple, nous avons une classe **`Personne`** avec un champ privé **`nom`** et une propriété publique **`Nom`**. La propriété possède un accesseur en lecture (***getter***) et un accesseur en écriture (***setter***) qui nous permettent de récupérer et de définir la valeur du champ **`nom`**. Nous créons une instance de la classe **`Personne`** et utilisons le setter pour attribuer le nom "John" à la propriété **`Nom`**. Ensuite, nous utilisons le getter pour récupérer la valeur et la stockons dans la variable **`nomPersonne`**. Enfin, nous affichons la valeur de **`nomPersonne`**, qui est "John".
  
   &nbsp;
   * ***Exemple 2 :***  

     ```C#
     public class Personne
     {
         public string Nom { get; set; }
     }

     // Utilisation de la propriété
     Personne personne = new Personne();
     personne.Nom = "John";  // Utilisation du setter pour définir la valeur
     string nomPersonne = personne.Nom;  // Utilisation du getter pour obtenir la valeur
     Console.WriteLine(nomPersonne);  // Affiche "John"
     ```

     Cet exemple présente une syntaxe plus concise pour définir une propriété en lecture-écriture à l'aide des propriétés auto-implémentées. La classe **`Personne`** possède une propriété publique **`Nom`** définie avec la syntaxe **`{ get; set; }`**. En interne, le compilateur C# génère un champ privé de support et les méthodes ***getter/setter*** pour nous. Nous pouvons utiliser la propriété de la même manière que dans l'exemple précédent.

Les accesseurs offrent un moyen pratique d'encapsuler l'accès aux champs d'un objet et d'ajouter des règles de validation ou de logique lors de l'accès à ces champs. Cela facilite la gestion des données et permet de maintenir l'intégrité des objets dans un programme.

---

### **Constructeur :**

Le constructeur d'une classe est une méthode qui s'exécute lors de l'instanciation de la classe.  
Le constructeur sert à initialiser les membres privés de la classe.  
Dans une classe, le constructeur qui n'a pas des paramètres s'appelle le **constructeur par défaut**.  
  
***Voici un exemple de déclaration d'un constructeur dans une classe :***

```C#
public class MyClass
{
    private int myNumber;
    private string myText;

    // Constructeur par défaut
    public MyClass()
    {
        myNumber = 0;
        myText = "Default";
    }

    // Constructeur surchargé
    public MyClass(int number, string text)
    {
        myNumber = number;
        myText = text;
    }
}
```

Dans cet exemple, la classe **`MyClass`** possède deux constructeurs. Le premier est un constructeur par défaut, qui ne prend aucun paramètre et initialise les membres **`myNumber`** et **`myText`** avec des valeurs par défaut. Le second est un constructeur surchargé, qui accepte deux paramètres **`number`** et **`text`** pour initialiser les membres de la classe avec des valeurs spécifiques.
  
Lorsque vous créez une nouvelle instance de la classe **`MyClass`**, vous pouvez utiliser l'un des constructeurs pour spécifier les valeurs d'initialisation :

```C#
MyClass obj1 = new MyClass();  // Utilisation du constructeur par défaut
MyClass obj2 = new MyClass(10, "Hello");  // Utilisation du constructeur surchargé
```

Lors de l'appel du constructeur, les instructions à l'intérieur du constructeur sont exécutées, ce qui permet d'effectuer des opérations d'initialisation ou d'autres traitements nécessaires avant l'utilisation de l'objet.
  
Il est important de noter que si le constructeur échoue (par exemple, s'il rencontre une exception), la référence à l'objet n'est pas renvoyée et l'instanciation de l'objet échoue. Cela garantit que l'objet est dans un état valide et cohérent avant d'être utilisé.

---

### **Surcharge de méthode :**

La surcharge de méthode est une fonctionnalité qui permet de définir plusieurs méthodes avec le même nom dans une même classe, mais avec des signatures de paramètres différentes. La signature de méthode inclut le **nom** de la méthode ainsi que le **type**, l'**ordre** et le **nombre** de ses **paramètres**.

La surcharge de méthode permet de fournir plusieurs implémentations d'une méthode pour traiter différents types de paramètres ou différents nombres de paramètres. Cela permet d'améliorer la lisibilité du code et de réduire la duplication de code, car il n'est pas nécessaire de créer plusieurs méthodes avec des noms différents pour effectuer des tâches similaires.

***Voici un exemple de surcharge de méthode en C# :***  

```C#
public class Calculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }
    
    public double Add(double a, double b)
    {
        return a + b;
    }
}
```

Dans cet exemple, la classe **`Calculator`** définit deux méthodes appelées **`Add`**, mais avec des signatures de paramètres différentes (un pour les entiers et l'autre pour les doubles). Ainsi, en fonction du type de paramètres passés lors de l'appel de la méthode **`Add`**, le compilateur C# sélectionnera automatiquement la méthode appropriée à exécuter.  

---

### **Signature :**

La signature d'une méthode en C# est composée du nom de la méthode, du nombre de ses paramètres et de leurs types, ainsi que de l'ordre dans lequel ces paramètres sont définis.  

***Voici un exemple de signature de méthode en C# :***

```C#
public int CalculerSomme(int a, int b)
{
    // Code pour calculer la somme de a et b
    return a + b;
}
```

Dans cet exemple, la signature de la méthode est définie comme suit :

* **Nom de la méthode :** **`CalculerSomme`**
* **Paramètres :** Deux paramètres de type **`int`** nommés **`a`** et **`b`**
* **Type de retour :** **`int`**

La signature de la méthode spécifie le nom de la méthode, le nombre de paramètres (2 dans ce cas), les types des paramètres (**`int`** dans ce cas) et leur ordre (le paramètre **`a`** est le premier et le paramètre **`b`** est le deuxième). La signature permet d'identifier de manière unique une méthode et de la distinguer des autres méthodes avec des noms ou des paramètres différents.

---

### **Couche**

Une couche d'objet fournit des services à d'autres couches qui l'utilisent, et peut utiliser le service d'une autre couche.
  
***Voici un exemple pour illustrer le concept de couche d'objet :***
  
Supposons que nous développons une application de gestion des utilisateurs qui comporte trois couches : la couche de présentation, la couche métier et la couche d'accès aux données.

1. **Couche de présentation :**  
  
   Cette couche est responsable de l'interface utilisateur et de l'interaction avec l'utilisateur. Elle fournit des fonctionnalités pour afficher des formulaires, récupérer des données saisies par l'utilisateur et afficher les résultats. Dans cet exemple, nous utilisons une application de console pour représenter la couche de présentation.

   ```C#
   public class PresentationLayer
   {
       private BusinessLayer businessLayer;

       public PresentationLayer()
       {
           businessLayer = new BusinessLayer();
       }

       public void CreateUser()
       {
           Console.WriteLine("Création d'un nouvel utilisateur");

           Console.Write("Nom : ");
           string name = Console.ReadLine();

           Console.Write("Email : ");
           string email = Console.ReadLine();

           // Appel d'une méthode de la couche métier pour créer l'utilisateur
           bool success = businessLayer.CreateUser(name, email);

           if (success)
           {
               Console.WriteLine("Utilisateur créé avec succès.");
           }
           else
           {
               Console.WriteLine("Échec de la création de l'utilisateur.");
           }
       }
   }
   ```

2. **Couche métier :**  
  
   Cette couche contient la logique métier de l'application. Elle effectue les opérations de traitement des données, les validations et les règles métier. Dans cet exemple, nous utilisons une classe **`BusinessLayer`** pour représenter la couche métier.

   ```C#
   public class BusinessLayer
   {
       private DataAccessLayer dataAccessLayer;

       public BusinessLayer()
       {
           dataAccessLayer = new DataAccessLayer();
       }

       public bool CreateUser(string name, string email)
       {
           // Validation des données et application des règles métier
           if (string.IsNullOrEmpty(name) || string.IsNullOrEmpty(email))
           {
               return false;
           }

            // Appel d'une méthode de la couche d'accès aux données pour enregistrer l'utilisateur
            return dataAccessLayer.SaveUser(name, email);
       }
   }
   ```

3. **Couche d'accès aux données :**  
  
   Cette couche est responsable de la communication avec la source de données, telle qu'une base de données ou un service web. Elle fournit des méthodes pour enregistrer, récupérer ou supprimer des données. Dans cet exemple, nous utilisons une classe **`DataAccessLayer`** pour représenter la couche d'accès aux données.

   ```C#
   public class DataAccessLayer
   {
       public bool SaveUser(string name, string email)
       {
           // Code pour enregistrer l'utilisateur dans la base de données
           // ...

           // Retourne true si l'enregistrement a réussi, sinon false
           return true;
       }
   }
   ```

Dans cet exemple, la couche de présentation utilise des services de la couche métier, tels que la création d'un utilisateur. La couche métier à son tour utilise des services de la couche d'accès aux données pour enregistrer l'utilisateur dans la base de données. Chaque couche a ses responsabilités spécifiques et fournit des services aux couches supérieures, tout en utilisant les services des couches inférieures. Cela permet une séparation claire des préoccupations et facilite la maintenance et l'évolutivité de l'application.

---

### **Héritage**

L'héritage permet d'étendre les fonctionnalités d'une classe.

```C#
public class cls_Association : cls_ID
```  

***Voici un exemple pour illustrer le concept d'héritage en C# :***
  
Supposons que nous avons une classe de base appelée **`Animal`** qui représente les caractéristiques communes des animaux. Ensuite, nous créons une classe dérivée appelée **`Chien`** qui hérite de la classe **`Animal`** et ajoute des fonctionnalités spécifiques aux chiens.

```C#
public class Animal
{
    public string Name { get; set; }
    public int Age { get; set; }

    public void Eat()
    {
        Console.WriteLine("L'animal mange.");
    }

    public void Sleep()
    {
        Console.WriteLine("L'animal dort.");
    }
}

public class Chien : Animal
{
    public void Bark()
    {
        Console.WriteLine("Le chien aboie.");
    }

    public void Fetch()
    {
        Console.WriteLine("Le chien rapporte un objet.");
    }
}
```

Dans cet exemple, la classe **`Animal`** est la classe de base qui définit les propriétés communes à tous les animaux, telles que le nom et l'âge. Elle possède également deux méthodes, **`Eat`** (manger) et **`Sleep`** (dormir), qui représentent des comportements communs à tous les animaux.
  
La classe **`Chien`** est une classe dérivée de la classe **`Animal`**. Elle hérite de toutes les propriétés et méthodes de la classe de base, et ajoute également ses propres fonctionnalités spécifiques aux chiens, telles que les méthodes **`Bark`** (aboyer) et **`Fetch`** (rapporter un objet).
  
Grâce à l'héritage, la classe **`Chien`** peut utiliser et étendre les fonctionnalités de la classe **`Animal`** sans avoir à redéfinir toutes les propriétés et méthodes communes. Elle hérite automatiquement de ces fonctionnalités et peut ajouter ses propres comportements spécifiques aux chiens.
  
Voici comment utiliser ces classes dans un programme :

```C#
Animal animal = new Animal();
animal.Name = "Animal";
animal.Age = 5;
animal.Eat();  // L'animal mange.
animal.Sleep();  // L'animal dort.

Chien chien = new Chien();
chien.Name = "Max";
chien.Age = 3;
chien.Eat();  // Le chien mange.
chien.Sleep();  // Le chien dort.
chien.Bark();  // Le chien aboie.
chien.Fetch();  // Le chien rapporte un objet.
```

Dans cet exemple, nous créons une instance de la classe **`Animal`** et une instance de la classe **`Chien`**. La classe **`Animal`** nous permet d'accéder aux fonctionnalités communes à tous les animaux, tandis que la classe **`Chien`** nous permet d'accéder aux fonctionnalités spécifiques aux chiens en plus des fonctionnalités héritées de la classe de base.
  
L'héritage permet donc d'étendre les fonctionnalités d'une classe de base, de réutiliser du code et de créer une hiérarchie de classes pour organiser et structurer notre code.

---

### **Base**

**`: base`** est une référence qui donne accès à l'instance correspondant à la classe dont je hérite.
  
***Exemple :***

```C#
public cls_Association(int pID,string pNomAsso, string pPresident, string pTresorier, string pSecretaire, cls_Contact pContact) : base(pID)
{
    c_NomAsso = pNomAsso;
    c_President = pPresident;
    c_Tresorier = pTresorier;
    c_Secretaire = pSecretaire;
    c_Contact = pContact;
}
```

Dans cet exemple, la syntaxe **`: base(pID)`** est utilisée dans le constructeur de la classe **`cls_Association`**. Elle fait référence au constructeur de la classe de base (classe parente) et permet d'initialiser les membres hérités de cette classe de base.

Plus précisément, lorsque vous créez une classe dérivée qui hérite d'une classe de base, vous pouvez utiliser base pour accéder aux membres de la classe de base et les utiliser dans le constructeur de la classe dérivée.

Dans l'exemple donné, le constructeur de la classe **`cls_Association`** prend plusieurs paramètres, dont **`pID`** qui est utilisé pour initialiser le membre hérité de la classe de base. En utilisant **`: base(pID)`**, vous appelez le constructeur de la classe de base en lui passant la valeur de **`pID`** pour initialiser correctement la partie héritée de la classe **`cls_Association`**.

Cela permet d'assurer que la classe de base est correctement initialisée avant d'ajouter des fonctionnalités spécifiques à la classe dérivée.
  
***Voici un exemple de code avec les classes*** **`Animal`** ***et*** **`Chien`** ***utilisant*** **`base`** ***:***

```C#
public class Animal
{
    protected string nom;

    public Animal(string nom)
    {
        this.nom = nom;
    }

    public void Manger()
    {
        Console.WriteLine("L'animal mange.");
    }
}

public class Chien : Animal
{
    private string race;

    public Chien(string nom, string race) : base(nom)
    {
        this.race = race;
    }

    public void Aboyer()
    {
        Console.WriteLine("Le chien aboie.");
    }

    public void AfficherDetails()
    {
        Console.WriteLine("Nom : " + base.nom);
        Console.WriteLine("Race : " + race);
    }
}

class Program
{
    static void Main(string[] args)
    {
        Chien chien = new Chien("Max", "Labrador");
        chien.Manger();     // Appel de la méthode de la classe de base
        chien.Aboyer();     // Appel de la méthode de la classe dérivée
        chien.AfficherDetails();   // Appel de la méthode de la classe dérivée utilisant 'base'

        Console.ReadLine();
    }
}
```

Dans cet exemple, la classe **`Animal`** est la classe de base, qui a un constructeur prenant le nom de l'animal comme argument et une méthode **`Manger`**. La classe **`Chien`** est une classe dérivée de **`Animal`** qui ajoute un constructeur prenant en plus la race du chien comme argument, une méthode **`Aboyer`**, et une méthode **`AfficherDetails`** qui utilise base pour accéder au nom de l'animal de la classe de base.
  
Dans la méthode **`Main`**, nous créons une instance de **`Chien`** avec le nom "Max" et la race "Labrador". Nous appelons ensuite la méthode **`Manger`** de la classe de base via l'objet chien, puis la méthode **`Aboyer`** spécifique à la classe **`Chien`**. Enfin, nous utilisons la méthode **`AfficherDetails`** pour afficher le nom de l'animal en utilisant **`base.nom`** pour accéder au membre nom de la classe de base.

---
  
### **This**

**`this`** est un mot-clé utilisé en programmation orientée objet pour faire référence à l'instance courante de la classe dans laquelle il est utilisé. Il permet d'accéder et de manipuler les membres de la classe, tels que les variables, les méthodes et les propriétés  à partir de l'intérieur de la classe elle-même.
  
***Voici un exemple pour illustrer son utilisation :***

```C#
public class Personne
{
    private string nom;

    public Personne(string nom)
    {
        this.nom = nom;
    }

    public void AfficherNom()
    {
        Console.WriteLine("Nom : " + this.nom);
    }

    public void ModifierNom(string nouveauNom)
    {
        this.nom = nouveauNom;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Personne personne = new Personne("Jean");
        personne.AfficherNom();    // Affiche "Nom : Jean"

        personne.ModifierNom("Paul");
        personne.AfficherNom();    // Affiche "Nom : Paul"

        Console.ReadLine();
    }
}
```

Dans cet exemple, la classe **`Personne`** possède une variable **`nom`** et deux méthodes. La méthode **`AfficherNom`** utilise **`this`** pour accéder à la variable **`nom`** de l'instance courante et affiche son contenu. La méthode **`ModifierNom`** utilise également **`this`** pour assigner une nouvelle valeur à la variable **`nom`** de l'instance courante.

---

### **Paramètre en sortie (`out`)**

Un paramètre en sortie, déclaré avec le mot-clé  **`out`**, est un paramètre qui permet de récupérer une valeur renvoyée par la procédure ou la fonction. Contrairement aux paramètres classiques, les paramètres **`out`** sont utilisés lorsque la méthode a besoin de renvoyer plusieurs valeurs en dehors de sa valeur de retour principale.
  
***Voici un exemple pour illustrer son utilisation :***

```C#
public class Calculatrice
{
    public void Diviser(int dividende, int diviseur, out int quotient, out int reste)
    {
        quotient = dividende / diviseur;
        reste = dividende % diviseur;
    }
}

class Program
{
    static void Main(string[] args)
    {
        int dividende = 10;
        int diviseur = 3;
        int quotient;
        int reste;

        Calculatrice calculatrice = new Calculatrice();
        calculatrice.Diviser(dividende, diviseur, out quotient, out reste);

        Console.WriteLine("Quotient : " + quotient);  // Affiche "Quotient : 3"
        Console.WriteLine("Reste : " + reste);        // Affiche "Reste : 1"

        Console.ReadLine();
    }
}
```

Dans cet exemple, la méthode **`Diviser`** de la classe **`Calculatrice`** prend deux entiers en entrée (**`dividende`** et **`diviseur`**) et utilise deux paramètres **`out`** (**`quotient`** et **`reste`**) pour renvoyer le résultat du calcul de la division. Les paramètres **`out`** doivent être explicitement assignés à l'intérieur de la méthode.
  
Lors de l'appel de la méthode **`Diviser`**, les variables **`quotient`** et **`reste`** sont déclarées sans être initialement assignées, puis elles sont passées en tant que paramètres **`out`**. Après l'exécution de la méthode, ces variables contiennent les valeurs renvoyées.
  
Il est important de noter que les paramètres **`out`** doivent être assignés à l'intérieur de la méthode avant que celle-ci ne se termine, sinon une erreur sera générée. Cela garantit que les paramètres **`out`** sont toujours initialisés avec une valeur avant d'être utilisés.

---

### **Classe abstraite (`abstract`)**

Une classe abstraite est une classe qui ne peut pas être instanciée directement. Elle sert de modèle ou de base pour d'autres classes dérivées. Une classe abstraite peut contenir des membres (méthodes, propriétés, champs) définis ou abstraits, et ces membres peuvent être hérités par les classes dérivées.
  
***Voici un exemple pour illustrer son utilisation :***

```C#
public abstract class cls_ID
{
    private int c_ID;
    private static int s_MaxID;

    // Initialisation du compteur d'ID
    static cls_ID()
    {
        s_MaxID = 100000;
    }

    // Méthode pour obtenir un nouvel ID unique
    public static int NouvelID()
    {
        s_MaxID++;
        return s_MaxID;
    }

    // Constructeur de la classe cls_ID
    public cls_ID(int pID)
    {
        c_ID = pID;
    }

    // Propriété pour obtenir l'ID de l'objet
    public int ID
    {
        get { return c_ID; }
    }
}
```  

Dans cet exemple, la classe **`cls_ID`** contient un champ privé **`c_ID`** pour stocker l'ID de l'objet, ainsi qu'un champ statique **`s_MaxID`** pour maintenir un compteur d'ID maximal. La méthode statique **`NouvelID()`** est utilisée pour obtenir un nouvel ID unique à chaque appel.
  
La classe **`cls_ID`** a un constructeur qui prend un paramètre **`pID`** pour initialiser l'ID de l'objet. Cette classe expose également une propriété en lecture seule ID qui permet d'accéder à l'ID de l'objet.
  
Étant donné que la classe **`cls_ID`** est déclarée comme abstract, elle ne peut pas être instanciée directement. Cependant, d'autres classes peuvent hériter de cette classe abstraite et fournir une implémentation concrète des membres abstraits ou utiliser les membres définis dans la classe de base.
  
En utilisant l'héritage, les classes dérivées peuvent étendre la fonctionnalité de la classe abstraite et implémenter les membres abstraits selon leurs besoins spécifiques. L'utilisation de classes abstraites permet de créer une hiérarchie de classes et de partager du code commun tout en permettant des variations spécifiques au niveau des classes dérivées.
  
***Voici un autre exemple d'utilisation d'une classe abstraite en C# :***

```C#
public abstract class Animal
{
    public string Name { get; set; }

    public abstract void MakeSound();

    public void Eat()
    {
        Console.WriteLine("L'animal mange.");
    }
}

public class Dog : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Le chien aboie.");
    }
}

public class Cat : Animal
{
    public override void MakeSound()
    {
        Console.WriteLine("Le chat miaule.");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Dog dog = new Dog();
        dog.Name = "Max";
        dog.MakeSound();
        dog.Eat();

        Cat cat = new Cat();
        cat.Name = "Misty";
        cat.MakeSound();
        cat.Eat();

        Console.ReadLine();
    }
}
```

Dans cet exemple, nous avons une classe abstraite **`Animal`** qui représente un animal générique. La classe **`Animal`** a une propriété **`Name`** pour le nom de l'animal, une méthode abstraite **`MakeSound()`** et une méthode concrète **`Eat()`**.
  
La classe abstraite **`Animal`** sert de base pour deux classes dérivées : **`Dog`** (chien) et **`Cat`** (chat). Chaque classe dérivée doit fournir une implémentation concrète de la méthode abstraite **`MakeSound()`**, qui représente le son spécifique que fait chaque animal.
  
Dans la méthode **`Main`**, nous instancions un chien et un chat, leur attribuons un nom, appelons la méthode **`MakeSound()`** spécifique à chaque animal et appelons également la méthode **`Eat()`** héritée de la classe abstraite.
  
L'utilisation d'une classe abstraite ici permet de définir le comportement commun à tous les animaux dans la classe de base **`Animal`**, tout en permettant aux classes dérivées de fournir des implémentations spécifiques pour le son de chaque animal.

---

### **Membre à porté de classe (`static`)**

Un membre à porté de classe est un membre partagé par toutes les instances de la classe.  
  
En C#, les membre à porté d'une classe est les membres déclarés en **`static`**.  
Un membre à porté de classe ne peut utilisé qu'un autre membre à porté d'une classe.  
  
Un membre à porté d'une classe s'utilise avec le nom de la classe.
  
***Voici un exemple pour illustrer son utilisation :***

```C#
private static int s_MaxID;

static cls_ID()
{
    s_MaxID = 100000;
}

public static int NouvelID()
{
    s_MaxID++;
    return s_MaxID;
}
```

Dans cet exemple, nous avons une classe **`cls_ID`** qui contient un membre à portée de classe **`s_MaxID`** ainsi que deux méthodes à portée de classe **`cls_ID`** et **`NouvelID`**.
Voici une explication détaillée de chaque partie du code :

```C#
private static int s_MaxID;
```

La déclaration **`private static int s_MaxID;`** définit une variable statique **`s_MaxID`** de type entier à portée de classe. La portée **`private`** signifie que la variable n'est accessible qu'à l'intérieur de la classe **`cls_ID`**. Étant donné que la variable est statique, elle est partagée par toutes les instances de la classe.

```C#
static cls_ID()
{
    s_MaxID = 100000;
}
```

La déclaration **`static cls_ID()`** est un constructeur statique de la classe **`cls_ID`**. Un constructeur statique est appelé automatiquement avant toute autre utilisation de la classe et est utilisé pour effectuer des initialisations spécifiques. Dans cet exemple, le constructeur statique initialise la variable **`s_MaxID`** avec la valeur 100000. Cela signifie que chaque fois que la classe est utilisée, la variable **`s_MaxID`** sera initialisée avec cette valeur par défaut.

```C#
public static int NouvelID()
{
    s_MaxID++;
    return s_MaxID;
}
```

La méthode **`public static int NouvelID()`** est une méthode à portée de classe qui incrémente la valeur de **`s_MaxID`** à chaque appel et renvoie la nouvelle valeur. Elle peut être appelée sans avoir besoin d'instancier la classe **`cls_ID`** car elle est à portée de classe. Chaque fois que cette méthode est appelée, elle incrémente la valeur de **`s_MaxID`** et retourne la nouvelle valeur. Cela permet de générer un nouvel identifiant unique à chaque appel de la méthode.
  
***Voici un autre exemple pour illustrer l'utilisation d'un membre à portée de classe :***

```C#
public class Counter
{
    private static int count; // Membre à portée de classe

    public Counter()
    {
        count++;
    }

    public static int GetCount() // Méthode à portée de classe
    {
        return count;
    }
}

class Program
{
    static void Main(string[] args)
    {
        Counter counter1 = new Counter();
        Counter counter2 = new Counter();
        Counter counter3 = new Counter();

        int totalCount = Counter.GetCount(); // Utilisation du membre à portée de classe

        Console.WriteLine("Le nombre total d'instances de Counter est : " + totalCount);

        Console.ReadLine();
    }
}
```

Dans cet exemple, la classe **`Counter`** a un membre à portée de classe appelé **`count`**, qui est un compteur partagé par toutes les instances de la classe. Chaque fois qu'une instance de **`Counter`** est créée, le compteur est incrémenté dans le constructeur de la classe.
  
La méthode **`GetCount()`** est également déclarée comme étant à portée de classe, ce qui signifie qu'elle peut être appelée sans avoir besoin d'instancier la classe. Elle retourne la valeur du compteur count.
  
Dans la méthode **`Main`**, nous créons trois instances de **`Counter`**, ce qui incrémente le compteur à chaque fois. Ensuite, nous utilisons la méthode à portée de classe **`GetCount()`** pour obtenir le nombre total d'instances de **`Counter`** créées.
  
Lors de l'utilisation d'un membre à portée de classe, il est important de l'appeler en utilisant le nom de la classe, comme dans l'exemple avec **`Counter.GetCount()`**. Cela indique que le membre appartient à la classe elle-même et non à une instance spécifique.
  
Les membres à portée de classe sont utiles lorsque vous avez des données ou des fonctionnalités partagées entre toutes les instances d'une classe. Ils permettent d'accéder à ces membres de manière cohérente sans avoir besoin d'instancier la classe, ce qui facilite l'utilisation et l'accès aux fonctionnalités communes.

---

### *La méthodologie MVCDP*

L'architecture MVCDP (Modèle, Vue, Contrôleur, DAO, Persistance) est une extension de l'architecture MVC (Modèle, Vue, Contrôleur) qui intègre la gestion de la persistance des données à travers l'utilisation d'un DAO (Data Access Object).  
  
**MVCDP** = **M**odèle, **V**ue, **C**ontrôleur, **DAO** (**D**ata **A**cces **O**bject), **P**ersistance.

* **Modèle (`Model`) :**
  Le modèle représente la logique métier et les données de l'application. Le modèle est responsable de la gestion des données, de leur manipulation et de leur validation. Il peut contenir des classes qui représentent les entités du domaine et les opérations sur ces entités.
  &nbsp;
* **Vue (`View`) :**  
  La vue est responsable de l'interface utilisateur et de l'affichage des données. La vue reçoit les données du modèle et les présente à l'utilisateur de manière appropriée. Elle peut également gérer les interactions de l'utilisateur, telles que les clics sur les boutons ou les saisies dans les champs de texte.
  &nbsp;
* **Contrôleur (`Controller`) :**  
  Le contrôleur fait le lien entre le modèle et la vue. Le contrôleur reçoit les actions de l'utilisateur à partir de la vue, interagit avec le modèle pour effectuer les opérations nécessaires et met à jour la vue en conséquence. Il orchestre le flux de données et les interactions entre le modèle et la vue.
  &nbsp;
* **DAO (`Data Access Object`) :**  
  Il s'agit d'un composant qui gère l'accès aux données et à la persistance. Le DAO fournit des méthodes pour effectuer des opérations de lecture, d'écriture, de mise à jour et de suppression sur les données stockées. Il permet au modèle d'interagir avec la source de données, qu'il s'agisse d'une base de données, d'un fichier ou d'une API externe.
  &nbsp;
* **Persistance :**  
  La persistance fait référence à la manière dont les données sont stockées de manière durable. Cela peut impliquer l'utilisation d'une technologie de stockage, telle qu'une base de données relationnelle (comme MySQL, PostgreSQL, SQL Server), une base de données NoSQL (comme MongoDB, Cassandra), d'un système de fichiers ou d'une autre forme de stockage persistant.
