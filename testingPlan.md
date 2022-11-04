# Testingplan TankCounter

Ik heb mijn Signup component gekozen om testen op te doen, dit omdat dit een componenten is waarop veel mogelijk is met de verschillende input fields en nodige checks. 

## On startup 
 
## De component

Bij het opstarten van de component willen we de volgende dingen zien:

- titel "Registreren"
- inputfield voor email
- inputfield voor passwoord 
- inputfield voor passwoord te bevestingen. 
- 'Account aanmaken' knop 
- link naar login

### Inputfield Email 

Voor dit veld gelden de volgende zaken: 
- mag niet leeg zijn 
- moet een geldige email zijn
- email mag nog niet in gebruik zijn 

Nodige testen: 

- Type test -> input -> verwachting resulaat
- Positive -> "jan@jandeman.be" -> Valid
- Negative -> "jan@jandeman" -> invalid
- Negative -> "jan#deman" -> invalid

### Passwoord fields

Hiervoor gelden de voglende zaken:
- mag niet leeg zijn 
- moet minstens 6 chars lang zijn 
- 2 velden moeten de zelfdewaarde bevatten 

Nodige testen 

- Type test -> input field 1 & input field 2 -> verwachting resulaat
- Positive -> passwoord & passwoord -> valid
- Negative -> admin & passwoord -> invalid 
- Negative -> test & test -> invalid


### Acount Aanmaken knop 

Deze knop zou de volgende zaken moeten doen/kunnen 

- Aanmaken nieuwe user (funtie call OnSubmit die het proces laat beginnen)
- Niet klikbaar (disabled) wanneer de form niet valid is

- Type test -> input -> verwachting resultaat
- Positive -> valid form -> Valid/Nieuwe user
- Negavtive -> invalid form -> Invalid/Geen nieuwe user 

### Link naar login 

Deze link zou enkel het volgende mogen doen:

- user redirecten naar de login pagina

