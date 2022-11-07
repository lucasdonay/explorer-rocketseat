//class pra ter a logica
export class Favorites {
  constructor(root) {
  this.root = document.querySelector(root)  
}  
}

//class qye vai criar a visualizacao e eventos do html

export class FavoritesView extends Favorites{
  constructor(root) {
    super(root)
   /*  this.removeBg() */
    this.update()   
 }

/*   removeBg() {    
    const but = document.querySelector('.teste1')
    const tbody = document.querySelector('table tbody')

    but.addEventListener('click', function() {
      tbody.classList.remove('clean-table');
      console.log("teste");
    })

  } */

  update() {
    const tbody = this.root.querySelector('table tbody')

    tbody.querySelectorAll('tr')
    .forEach((tr) => {
      if(tr === tr) {
        tbody.classList.remove('clean-table')
        return
      }
    })
  }
}
