enum UserResponse {
  yes = 10,
  no = 2,
}

interface User {
  name: string;
  response: UserResponse;
}

const user: User = {
  name: "mateus",
  response: UserResponse.yes,
};

if (user.response === 10) {
  console.log("ok");
} else {
  throw Error(`deu ruim`);
}
