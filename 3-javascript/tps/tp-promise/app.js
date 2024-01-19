// exercice 1
const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesse résolue avec succès !");
  }, 3000);
});

maPromesse.then((result) => {
  console.log(result);
});

// exercice 2
const success = true;
const maPromesse2 = new Promise((resolve, reject) => {
  if (success) {
    resolve("Promesse resolue !");
  } else {
    reject("Promesse réjetée !");
  }
});
maPromesse2
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// exercice 3
const premierePromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

const deuxiemePromesse = premierePromesse.then((valeur) => {
  return valeur * 2;
});

deuxiemePromesse.then((result) => {
  console.log(result);
});

// exercice 4
const promesse1 = new Promise((res) =>
  setTimeout(() => res("Promesse 1"), 4000)
);
const promesse2 = new Promise((res) =>
  setTimeout(() => res("Promesse 2"), 5000)
);
const promesse3 = new Promise((res) =>
  setTimeout(() => res("Promesse 3"), 6000)
);

Promise.all([promesse1, promesse2, promesse3]).then((results) => {
  console.log(results);
});

// exercice 5
const promesseErreur = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Erreur !");
  }, 1000);
});

promesseErreur
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// exercice 6
const promesseFinally = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Succès !");
  }, 2000);
});

promesseFinally
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Fin de l'exercice !");
  });

// exercice 7
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Erreur : ", error);
  });

// exercie 8
async function fetchTodo() {
  try {
    const reponse = await fetch(
      "https://jsonplaceholder.typicode.com/todos/10000"
    );
    const data = await reponse.json();
    console.log(data);
  } catch (error) {
    console.error("Erreur : ", error);
  }
}
fetchTodo();
