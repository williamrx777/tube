let params = new URLSearchParams(document.location.search.substring(1));
let name = params.get("name"); // retorna a string "Jonathan"

const url = new URL(
    "https://www.youtube.com/watch?v=C96aJbOuq7k"
  );
  console.log(url.href); // Logs: 'https://developer.mozilla.org/pt-BR/docs/Web/API/URL/href'
  