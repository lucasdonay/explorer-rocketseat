//class pra ter a logica
export class Favorites {
  constructor(root) {
  this.root = document.querySelector(root)
  }
  removeBg()
}





//class qye vai criar a visualizacao e eventos do html

export class FavoritesView extends Favorites{
  constructor(root) {
    super(root)
  }


  removeBg() {
    
    const but = this.root.querySelector('button')

    const tbody = this.root.querySelector('table tbody')


    but.addEventListener('click', function() {
      tbody.classList.remove('.clean-table');
      console.log("teste");
    })

  }
}
