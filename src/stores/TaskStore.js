// Importera 'defineStore' från Pinia-biblioteket
import { defineStore } from 'pinia'

// Definiera och exportera en instans av din store med namnet 'taskStore'
export const useTaskStore = defineStore('taskStore', {
    // Definiera det initiala tillståndet för din store
    state: () => ({
        tasks: [
            { id: 1, title: 'Köp mjölk', isFav: false },
            { id: 2, title: 'Köp ägg', isFav: true }
        ]
    }),

    // Definiera getters för att hämta och bearbeta data från ditt tillstånd
    getters: {
        // Getter för att hämta favorituppgifter
        favs() {
            // Returnerar en ny array med uppgifter där 'isFav' är true
            return this.tasks.filter((t) => t.isFav)
        },

        // Getter för att räkna antalet favorituppgifter
        favCount() {
            // Använder reduce-funktionen för att räkna antalet favorituppgifter
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },

        // Getter för att hämta det totala antalet uppgifter
        totalCount: (state) => {
            // Returnerar det totala antalet uppgifter i tillståndet
            return state.tasks.length
        }
    },

    // Definiera actions för att utföra operationer på ditt tillstånd
    actions: {
        // Action för att ta bort en uppgift baserat på dess ID
        deleteTask(id) {
            // Använder filter-funktionen för att skapa en ny lista utan den borttagna uppgiften
            //bokstaven t är ett variabelnamn som vi använder i detta fallet för att inhämta som
            //argument i vår filterfunktion
            /* koden filtrerar bort den uppgift vars id matchar det id som du skickar som
      parameter till funktionen. Det här är en vanlig metod för att ta bort ett element
       från en array baserat på en specifik egenskap */
            this.tasks = this.tasks.filter((t) => t.id !== id)
        },

        // Action för att växla favoritstatus för en uppgift baserat på dess ID
        toggleFav(id) {
            // Hitta uppgiften med det givna ID:t
            const task = this.tasks.find((t) => t.id === id)
            // Växla favoritstatus för uppgiften, Växlar mellan True eller False
            task.isFav = !task.isFav
        }
    }
})
