**Validación - Librería JavaScript**

Autor: Salinas Cenobio Leonel Isaac



Materia: Programación Web 

Lo que hace esta librería brinda funciones en JavaScript. Realiza verificaciones de datos en los formularios web las siguientes verificaciones antes de que se direccionen a el backend:
1. Formato de correo electrónico
2. Solo recibir letras
3. Validar la longitud de una cadena númerica
4. Calcular edad en base a la fecha de nacimiento
5. Verificar la mayoria de edad
6. Validar contraseñas
7. Validar CURP
8. Formato de tarjeta bancaria

Instalación: para utilizar esta libreria, conecta el archivo en tus documentos HTML:

```html
<script src="js/utileria.js"></script>
```

**Ejemplos de código**
Verificar nombre




Verifica que la cadena ingresa en el campo de Nombre Completo contenga solo letras sin números ni carácteres especiales.
```javascript 
let textoValido = "Juan Perez Hernandez";
let textoInvalido = "Solo13tras";
console.log("¿El texto es válido? " + soloLetras(textoValido));
console.log("¿El texto es válido? " + soloLetras(textoInvalido)); 
```
<img width="750" height="170" alt="image" src="https://github.com/user-attachments/assets/39b637e0-34d5-4a60-883e-e16d206fbb57" />


Verificar tarjeta bancaria.




Verifica la longitud de 16 digitos del formato de la tarjeta, así mismo como su veracidad.
```javascript 
let tarjeta = "4507 9900 0000 4905";
let tarjeta = "1234567890";
console.log("¿La tarjeta es válida? " + validarTarjetaBancaria(tarjetaValida));
console.log("¿La tarjeta es válida? " + validarTarjetaBancaria(tarjetaInvalida));
```
<img width="726" height="169" alt="image" src="https://github.com/user-attachments/assets/3bceb98b-beb7-4091-87ca-dc4b14677324" />


Verificar correo.




Verifica que la dirección contenga el formato de correo electrónico correcto.
```javascript 
let formato = "correoreal@gmail.com";
let formato = "correo@gmail";
console.log("¿El correo es válido? " + validarCorreo(correoValido));
console.log("¿El correo es válido? " + validarCorreo(correoInvalido));
```
<img width="740" height="169" alt="image" src="https://github.com/user-attachments/assets/4ef84b78-7021-4ada-9b92-050d082d4916" />



https://github.com/user-attachments/assets/39e8affe-756d-4593-b758-54c77ef4cd33



