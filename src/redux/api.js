export default function api(id) {
  const BaseURL = "https://sanghunlee-711.github.io/communityFashion";
  console.log(id);
  return fetch(`${BaseURL}/data/data.json`, {})
    .then((res) => res.json())
    .then((payload) => ({ payload }))
    .catch((error) => ({ error }));
}
