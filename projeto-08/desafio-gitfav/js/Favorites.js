//class pra ter a logica
export class Favorites {
  constructor(root) {
  this.root = document.querySelector(root)
  this.load()
  }


  load() {
    this.entries = [
    {
      login: 'lucasdonay',
      name: 'Lucas Donay',
      public_repos: '52',
      followers: '55'
    },
    {
      login: 'lucasdonay',
      name: 'Lucas Donay',
      public_repos: '52',
      followers: '55'
    }
  ]
  
  }

}


//class qye vai criar a visualização e eventos do html

export class FavoritesView extends Favorites{
  constructor(root) {
    super(root)
    this.tbody = this.root.querySelector('table tbody')
    this.update()
  }

 
 update() {
   this.removeAllTr()  
   
   this.entries.forEach(user => {
     const row = this.createRow()
     
     
     row.querySelector('.user img').src = `https://github.com/${user.login}.png`
     row.querySelector('.user img').alt = `Imagem de perfil do ${user.name}`
     row.querySelector('.user p').textContent = user.name
     row.querySelector('.user span').textContent = user.login
     row.querySelector('.repositores').textContent = user.public_repos
     row.querySelector('.followers').textContent = user.followers
     
     this.tbody.append(row)
    })

    this.removeBg()
  }

  removeBg() {
      this.tbody.querySelectorAll('tr')
      .forEach((tr) => {
        if(tr === tr) {
          this.tbody.classList.remove('clean-table')
          return
        }
      })
    }

  
    createRow() {
      const tr = document.createElement('tr')
  
      tr.innerHTML = `
        <td class="user">
        <img src="https://github.com/lucasdonay.png" alt="Imagem do Usuario">
        <a href="https://github.com/lucasdonay">
          <p>Lucas Donay</p>
          <span>lucasdonay</span>
        </a>
      </td>
      <td class="repositores">
        <p>55</p>
      </td>
      <td class="followers">
        <p>2222</p>
      </td>
      <td class="remove">
        <button>Remover</button>
      </td>
        `;
  
      return tr;
    }

  removeAllTr() {
    this.tbody.querySelectorAll('tr')
    .forEach((tr) => {
     tr.remove()
    })
  }
  
}
