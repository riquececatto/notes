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
        return reject(new Error("erro getPermissaoUsuario...."));
      }

      console.log(`permissoes usuario: ${id}`);
      resolve({ perm0: true, perm1: false, perm2: true });
    }, 2500);
  });
}

async function run() {
  try {
    const objLogin = await loginUsuario("username@dominio", "0123456789");
    const objDetalheUsuario = await getDetalheUsuario(objLogin);
    const objPermissoesUsuario = await getPermissaoUsuario(objDetalheUsuario);
  
    console.log(objPermissoesUsuario);
  } catch (err) {
    console.error(err.message, err.lineNumber);
  }
}

run();
