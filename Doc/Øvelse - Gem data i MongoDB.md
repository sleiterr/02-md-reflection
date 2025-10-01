## Formål
Formålet er at øve jer i at gemme data i en MongoDB database via Express og Mongoose.

---

## Opgavebeskrivelse
1. **Opsætning**
   - Sørg for, at jeres Express server kører, og at den er forbundet til MongoDB (enten lokalt eller via Atlas).
   - Brug det schema og den model (`Product`), som vi lavede i code-alongen.

2. **Opret data**
   - Tilføj mindst **3 produkter** til databasen via `POST /products`.
   - Hvert produkt skal have felterne:
     - `name` (fx "Hættetrøje")
     - `price` (fx 399)
     - `description` (fx "Blød og oversized hættetrøje")

   Eksempel på request body:
   ```json
   {
     "name": "Sneakers",
     "price": 899,
     "description": "Et par hvide sneakers i minimalistisk design"
   }
   ```

3. **Hent data**
   - Test, at data bliver gemt korrekt, ved at lave et `GET /products` request.
   - Kontroller, at alle de produkter, du har tilføjet, bliver vist i JSON-format.

4. **Bonus**
   - Prøv at tilføje et ekstra felt i dit schema (fx `category`).
   - Gem produkter med dette felt og test, at det også bliver gemt og vist.

---