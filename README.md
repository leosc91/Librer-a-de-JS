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

Instalación
Para utilizar esta herramienta, conecta el archivo en tus documentos HTML:

```html
<script src="js/utileria.js"></script>
```

**Ejemplos de código**
Verificar nombre
```javascript 
let textoValido = "Juan Perez Hernandez";
let textoInvalido = "Solo13tras";
console.log("¿El texto es válido? " + soloLetras(textoValido));
console.log("¿El texto es válido? " + soloLetras(textoInvalido)); 
```

Verificar tarjeta bancaria.
```javascript 
let tarjeta = "4507 9900 0000 4905";
let tarjeta = "1234567890";
console.log("¿La tarjeta es válida? " + validarTarjetaBancaria(tarjetaValida));
console.log("¿La tarjeta es válida? " + validarTarjetaBancaria(tarjetaInvalida));
``` 

Verificar contraseñas.
```javascript 
let formato = "correoreal@gmail.com";
let formato = "correo@gmail";
console.log("¿El correo es válido? " + validarCorreo(correoValido));
console.log("¿El correo es válido? " + validarCorreo(correoInvalido));
```
