<script lang="ts">
import { defineComponent } from "vue";
import { periodicTable, type PeriodicElement } from "./periodic-elements-list";

export default defineComponent({

  components: {
  },

  data() {
    return {
      periodicTable: periodicTable,
      selectedElement: {} as PeriodicElement,
      randomElement: {} as PeriodicElement,
      selectedElementColor: "" as string,
      selectedMatchElementColor: "" as string,
      matchElement: {} as PeriodicElement,
      tipNumeroAtomico: "" as string,
      tipFamilia: "" as string,
      tipMassaAtomica: "" as string,
    }
  },

  computed: {
    colorElement(): string {
      let baseClass = "shadow-2 hover:shadow-4 text-900"
      this.elementColorSelector()
      return this.selectedElementColor + " " + baseClass
    },

    colorElementS(): string {
      let baseClass = "shadow-2 hover:shadow-4 text-900"
      this.matchElementColorSelector()
      return this.selectedMatchElementColor + " " + baseClass
    }
  },

  methods: {

    elementColorSelector() {
      this.selectedElement.familia == "Não-metal" ? this.selectedElementColor = "bg-gray-500" :
        this.selectedElement.familia == "Gases Nobres" ? this.selectedElementColor = "bg-blue-400" :
          this.selectedElement.familia == "Alcalinos" ? this.selectedElementColor = "bg-red-400" :
            this.selectedElement.familia == "Alcalino-terrosos" ? this.selectedElementColor = "bg-green-400" :
              this.selectedElement.familia == "Metaloides" ? this.selectedElementColor = "bg-purple-400" :
                this.selectedElement.familia == "Halogênios" ? this.selectedElementColor = "bg-yellow-500" :
                  this.selectedElement.familia == "Metais Pós-Transição" ? this.selectedElementColor = "bg-cyan-400" :
                    this.selectedElement.familia == "Metais de Transição" ? this.selectedElementColor = "bg-orange-400" :
                      this.selectedElement.familia == "Lantanídeos" ? this.selectedElementColor = "bg-pink-500" :
                        this.selectedElement.familia == "Actinídeos" ? this.selectedElementColor = "bg-indigo-400" :
                          this.selectedElement.familia == "Metais do Bloco P" ? this.selectedElementColor = "bg-teal-500" : this.selectedElementColor = "surface-ground";
    },

    matchElementColorSelector() {
      this.matchElement.familia == "Não-metal" ? this.selectedMatchElementColor = "bg-gray-500" :
        this.matchElement.familia == "Gases Nobres" ? this.selectedMatchElementColor = "bg-blue-400" :
          this.matchElement.familia == "Alcalinos" ? this.selectedMatchElementColor = "bg-red-400" :
            this.matchElement.familia == "Alcalino-terrosos" ? this.selectedMatchElementColor = "bg-green-400" :
              this.matchElement.familia == "Metaloides" ? this.selectedMatchElementColor = "bg-purple-400" :
                this.matchElement.familia == "Halogênios" ? this.selectedMatchElementColor = "bg-yellow-500" :
                  this.matchElement.familia == "Metais Pós-Transição" ? this.selectedMatchElementColor = "bg-cyan-400" :
                    this.matchElement.familia == "Metais de Transição" ? this.selectedMatchElementColor = "bg-orange-400" :
                      this.matchElement.familia == "Lantanídeos" ? this.selectedMatchElementColor = "bg-pink-500" :
                        this.matchElement.familia == "Actinídeos" ? this.selectedMatchElementColor = "bg-indigo-400" :
                          this.matchElement.familia == "Metais do Bloco P" ? this.selectedMatchElementColor = "bg-teal-500" : this.selectedElementColor = "surface-ground";
    },

    getRandomIntInclusive(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    },

    selectRandomElement() {
      const randomIndex = this.getRandomIntInclusive(0, this.periodicTable.length - 1)
      this.randomElement = this.periodicTable[randomIndex]
    },
    checkElementSearch() {
      if (this.selectedElement.numero_atomico > this.randomElement.numero_atomico) {
        this.tipNumeroAtomico = "O número atômico do elemento procurado é menor que o número atômico do elemento escolhido"
      } else if (this.selectedElement.numero_atomico < this.randomElement.numero_atomico) {
        this.tipNumeroAtomico = "O número atômico do elemento procurado é maior que o número atômico do elemento escolhido"
      } else {
        this.matchElement = Object.assign({}, this.selectedElement)
        this.tipNumeroAtomico = "Elemento encontrado!"
        this.tipFamilia = "Familia encontrada: " + this.matchElement.familia
        this.tipMassaAtomica = "Massa Atômica encontrada: " + this.matchElement.massa_atomica
      }

      if (this.selectedElement.familia != this.randomElement.familia) {
        this.tipFamilia = "O elemento procurado não pertence a mesma família do elemento escolhido"
      } else {
        this.matchElement.familia = new String(this.selectedElement.familia) as string
        this.tipFamilia = "Familia encontrada: " + this.matchElement.familia
      }

      if (this.selectedElement.massa_atomica > this.randomElement.massa_atomica) {
        this.tipMassaAtomica = "A massa atômica do elemento procurado é menor que a massa atômica do elemento escolhido"
      } else if (this.selectedElement.numero_atomico < this.randomElement.numero_atomico) {
        this.tipMassaAtomica = "A massa atômica do elemento procurado é maior que a massa atômica do elemento escolhido"
      } else {
        this.matchElement.massa_atomica = new Number(this.selectedElement.massa_atomica) as number
        this.tipMassaAtomica = "Massa Atômica encontrada: " + this.matchElement.massa_atomica
      }
    }
  },

  mounted() {
    this.selectRandomElement()
  },
});
</script>


<template>
  <div class="mt-6" />

  <div class="card flex flex-wrap flex justify-content-center">
    <div class=" m-3">
      <h3 class="flex justify-content-center align-items-center">Elemento Escolhido</h3>
      <Card style="width: 16em; height: 16em;" :class="colorElement">
        <template #content>
          <div class="ml-1 text-xl flex justify-content-start align-items-start">
            {{ selectedElement.numero_atomico }}</div>
          <div class="mt-3 text-6xl font-bold flex justify-content-center align-items-center">
            {{ selectedElement.simbolo }}</div>
          <div class="text-2xl flex justify-content-center align-items-center">
            {{ selectedElement.nome }}</div>
          <div class="mt-5 flex justify-content-between">
            <div>
              {{ selectedElement.familia }}</div>
            <div>
              {{ selectedElement.massa_atomica }}</div>
          </div>
        </template>
      </Card>
    </div>
    <div class="m-3">
      <h3 class="flex justify-content-center align-items-center">Elemento Procurado</h3>
      <Card style="width: 16em; height: 16em;" :class="colorElementS">
        <template #content>
          <div class="ml-1 text-xl flex justify-content-start align-items-start">
            {{ matchElement.numero_atomico }}</div>
          <div class="mt-3 text-6xl font-bold flex justify-content-center align-items-center">
            {{ matchElement.simbolo }}</div>
          <div class="text-2xl flex justify-content-center align-items-center">
            {{ matchElement.nome }}</div>
          <div class="mt-5 flex justify-content-between">
            <div>
              {{ matchElement.familia }}</div>
            <div>
              {{ matchElement.massa_atomica }}</div>
          </div>
        </template>
      </Card>
    </div>
  </div>
  <div class="font-bold text-lg flex justify-content-center mt-3">DICA</div>
  <div class="flex justify-content-center m-1">{{ tipNumeroAtomico }}</div>
  <div class="flex justify-content-center m-1">{{ tipFamilia }}</div>
  <div class="flex justify-content-center m-1">{{ tipMassaAtomica }}</div>

  <div class="card flex justify-content-center m-3">
    <Dropdown v-model="selectedElement" filter :options="periodicTable" option-label="nome"
      placeholder="Selecione um Elemento Periódico" class="w-full md:w-14rem" @change="checkElementSearch" />
  </div>
</template>

<style scoped></style>
