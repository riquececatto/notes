function loginUsuario(email, passwd, onSuccess, onError) {
  setTimeout(() => {
    const error = false;
    if (error) {
      onError(new Error("error loginUsuario..."));
      return;
    }

    console.log(`usuario logado: ${email} - ${passwd}`);
    onSuccess({ email, passwd });
  }, 1500);
}

function getDetalheUsuario({ email }, onSuccess, onError) {
  setTimeout(() => {
    const error = false;
    if (error) {
      onError(new Error("error getDetalheUsuario..."));
      return;
    }

    console.log(`detalhe usuario: ${email}`);
    onSuccess({ id: 123, email });
  }, 2000);
}

function getPermissaoUsuario({ id }, onSuccess, onError) {
  setTimeout(() => {
    const error = false;
    if (error) {
      onError(new Error("erro getPermissaoUsuario..."));
      return;
    }

    console.log(`permissoes usuario: ${id}`);
    onSuccess({ perm0: true, perm1: false, perm2: true });
  }, 2500);
}

loginUsuario(
  "username@dominio",
  "0123456789",
  (user) =>
    getDetalheUsuario(
      user,
      (userId) =>
        getPermissaoUsuario(
          userId,
          (perms) => console.log(perms),
          (msg) => console.error(msg)
        ),
      (msg) => console.error(msg)
    ),
  (msg) => console.error(msg)
);
