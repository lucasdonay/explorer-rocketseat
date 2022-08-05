import { GithubUser } from "./GitHubUser.js";

//Class que contem a logica dos dados e como serao estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load()
   
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

  save() {
    localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
  }

  async add(username) {
    try {
    
    const userExist = this.entries.find(entry => entry.login === username)
    
    if(userExist) {
      throw new Error("Usuario ja esta na tela")
    }

    const user = await GithubUser.search(username)
    

    this.entries = [user, ...this.entries]
    this.update()
    this.save()
      
    } catch(error) {
      alert(error.message)
    }
  }

  delete(user) {
    const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

    this.entries = filteredEntries
    this.update()
    this.save()
  }
}

//Classe que vai criar a visualizacao e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)
    
    this.tbody = this.root.querySelector('table tbody')
    this.update()
    this.onAdd()
  }

  onAdd() {
    const addButton = this.root.querySelector('.search button')

    const input = document.getElementById("input-search");

    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')
      this.add(value)      
    }

    input.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {        
        event.preventDefault();
        addButton.onclick()
      }
    });

  }

  update() {
    this.removeAllTr()  

    this.entries.forEach(user => {
      const row = this.createRow()
      
      row.querySelector('.user img').alt = `Img de ${user.name}`
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user a').href= `https://github.com/${user.login}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      row.querySelector('.remove').onclick = () => {
       const Ok = confirm('Tem certeza que deseja deletar essa linha?')
       if(Ok) {
        this.delete(user)
       }
      }
      

      this.tbody.append(row)
    });
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = `
    <tr>
    <td class="user">
      <img src="https://github.com/lucasdonay.png" alt="Imagem do Donay">
      <a href="https://github.com/lucasdonay" target="_blank">
        <p>Lucas Donay</p>
        <span>donay</span>
      </a>
    </td>
    <td class="repositories">
      52
    </td>
    <td class="followers">
      1000
    </td>
    <td>
      <button class="remove">&times;</button>
    </td>
  </tr>
    `
    return tr;
  }

  removeAllTr() {
      this.tbody.querySelectorAll('tr').forEach(tr => {
      tr.remove()
    });
  }
}