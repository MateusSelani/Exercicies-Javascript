var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["yes"] = 10] = "yes";
    UserResponse[UserResponse["no"] = 2] = "no";
})(UserResponse || (UserResponse = {}));
var user = {
    name: "mateus",
    response: UserResponse.yes
};
if (user.response === 10) {
    console.log("ok");
}
else {
    throw Error("deu ruim");
}
console.log(user);
