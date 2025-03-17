function loginUsuario(email, passwd) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        return reject(new Error("error loginUsuario..."));
      }

      console.log(`usuario logado: ${email} - ${passwd}`);
      resolve({ email, passwd });
    }, 1500);
  });
}

function getDetalheUsuario({ email }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        return reject(new Error("error getDetalheUsuario..."));
      }

      console.log(`detalhe usuario: ${email}`);
      resolve({ id: 123, email });
    }, 2000);
  });
}

function getPermissaoUsuario({ id }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        return reject(new Error("erro getPermissaoUsuario..."));
      }

      console.log(`permissoes usuario: ${id}`);
      resolve({ perm0: true, perm1: false, perm2: true });
    }, 2500);
  });
}

loginUsuario("username@dominio", "0123456789")
  .then((obj) => getDetalheUsuario(obj))
  .then((obj) => getPermissaoUsuario(obj))
  .then((perms) => console.log(perms))
  .catch((msg) => console.error(msg));
