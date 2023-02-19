# Anotaciones del Curso de Clousures y Scope

## Scope

Alcance que determina la *accesibilidad* de una **variable**, función u objetos desde diferentes partes del código.

## Tipos de Scopes

1. Global
2. Function
3. Block

### Global Scope

Estas se encuentran estanciadas dentro del objeto window, por lo que podemos acceder a ellas en cualquier parte del código.

### Function Scope

También conocido como "scope local". Se tienen alcance de la variable dentro de una función y toda la lógica anidada en la misma.

### Block Scope

Es un nuevo concepto que se agregó en las nuevas actualizaciones de JavaScript en las que se usan las palabras reservadas ***let*** y ***const***. Solo se pueden acceder a ellas dentro de un bloque de codigo, pero no fuera de él.

### Palabras Reservadas

* *var*: Se puede acceder en el ámbito global y local. Se puede reasignar y redeclarar
* *let*: Acceder solo dentro de un bloque y sus anidados, no fuera de él. Se puede reasignar pero no redeclarar.
* *const*:  Acceder solo dentro de un bloque y sus anidados, no fuera de él. **NO** se puede reasignar pero no redeclarar.

## Closure

Closure se refiere a aquellas funciones que permiten recordar los valores incialmente guardados en ella y usarlos.

### Ámbito léxico

Se refiere a la accesibilidad de que tienen las variables dependiendo de la posición de las mismas dentro de ámbitos anidados.
Siendo en realidad un objeto en donde se guardan las variables dentro de ese ámbito con sus valores.
