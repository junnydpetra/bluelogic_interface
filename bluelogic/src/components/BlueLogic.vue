<template>
  <div class="blue-logic">
    <header class="header">
      <h1>{{ title }}</h1>
    </header>

    <main>
      <section id="home" class="section">
        <h3>Dados do contato</h3>
        <ul>
          <li v-for="(item, index) in records" :key="index">
            {{ item.name }} - {{ item.email }} 
            <button class="btn btn-success px-1" @click="editRecord(index)">Editar</button>
            <button class="btn btn-danger px-1" @click="deleteRecord(index)">Deletar</button>
          </li>
        </ul>
      </section>

      <section id="contact" class="section">
        <h2>Registro</h2>
        <form @submit.prevent="submitForm" class="text-center">
          <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="formData.name" required />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="formData.email" required />
          </div>
          <button class="btn btn-success text-center mt-1" type="submit">{{ isEditing ? 'Atualizar' : 'Adicionar' }}</button>
        </form>
      </section>
    </main>

    <footer>
      <p>&copy; 2024 Blue Logic. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'BlueLogic',
  data() {
    return {
      title: 'Bluelogic Sistemas e Consultoria',
      formData: {
        name: '',
        email: '',
      },
      records: [],
      isEditing: false,
      currentIndex: null
    }
  },
  methods: {
    async submitForm() {
      if (this.isEditing) {        
        this.records[this.currentIndex] = { ...this.formData };
        this.isEditing = false;
      } else {        
        this.records.push({ ...this.formData });
      }
      this.resetForm();
    },
    editRecord(index) {
      this.isEditing = true;
      this.currentIndex = index;
      this.formData = { ...this.records[index] };
    },
    deleteRecord(index) {
      this.records.splice(index, 1);
    },
    resetForm() {
      this.formData = { name: '', email: '' };
      this.currentIndex = null;
    }
  }
}
</script>

<style scoped>
.blue-logic {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.header {
  background-color: #192e49;
  color: white;
  padding: 20px;
  text-align: center;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  display: inline;
  margin: 0 15px;
}

nav a {
  color: white;
  text-decoration: none;
}

.section {
  padding: 20px;
  border-bottom: 1px solid #ccc;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #f1f1f1;
}
</style>