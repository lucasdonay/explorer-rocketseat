export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();

    this.styleSelected(event)

    window.history.pushState({}, "", event.target.href);

    this.loadPage();
  }

  styleSelected(event) {
    this.clearAllSelected();
    event.target.classList.add("selected");
  }

  clearAllSelected() {
    const nav = document.querySelector("nav");
    const tags = Array.from(nav.children).filter(
      (child) => child.tagName === "A"
    );
    for (const tag of tags) {
      tag.classList.remove("selected");
    }
  }

  loadPage() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];
    fetch(route)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
