<script lang="ts">
import TicTacToe from "@/class/ticTacToe/modals/TicTacToe";

export default {
  data() {
    return {
      clickGame: new TicTacToe()
    }
  }
}
</script>

<template>
  <div class="content">
    <div>
      <div class="buttons-game" @click="clickGame.clickButtom(0, 0)">{{ clickGame.array[0][0] }}</div>
      <div class="buttons-game" @click="clickGame.clickButtom(0, 1)">{{ clickGame.array[0][1] }}</div>
      <div class="buttons-game" @click="clickGame.clickButtom(0, 2)">{{ clickGame.array[0][2] }}</div>
    </div>
    <div>
      <div class="buttons-game" @click="clickGame.clickButtom(1, 0)">{{ clickGame.array[1][0] }}</div>
      <div class="buttons-game" @click="clickGame.clickButtom(1, 1)">{{ clickGame.array[1][1] }}</div>
      <div class="buttons-game" @click="clickGame.clickButtom(1, 2)">{{ clickGame.array[1][2] }}</div>
    </div>
    <div>
      <div class="buttons-game" @click="clickGame.clickButtom(2, 0)">{{ clickGame.array[2][0] }}</div>
      <div class="buttons-game" @click="clickGame.clickButtom(2, 1)">{{ clickGame.array[2][1] }}</div>
      <div class="buttons-game" @click="clickGame.clickButtom(2, 2)">{{ clickGame.array[2][2] }}</div>
    </div>
    <div v-if="clickGame.turnOfTheMove !== 0">
      <h1> Ход:{{clickGame.turnOfTheMove === 1 ? 'Крестика' : 'Нолика'}}</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;

  div {
    display: flex;

    .buttons-game {
      width: 100px;
      height: 100px;
      border: #2c3e50 solid;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>