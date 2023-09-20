import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8080",
    realm: "keycloak-react-auth",
    clientId: "React-auth"
});

/*keycloak.init({onLoad: 'login-required'}).then((authenticated) => {
    if(authenticated){
        console.log('Usuario autenticado');
    } else {
        console.log('Usuario no autenticado')
    }
})
.catch((error) => {
    console.error('Error al inicializar Keycloak:', error);
});*/

export default keycloak;