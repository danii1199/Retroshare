import AuthService from "../../Service/Auth/AuthService";

const UserProfile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.name}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.token}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>name:</strong> {currentUser.name}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.authorities &&
          currentUser.authorities.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
      </ul>
    </div>
  );
};

export default UserProfile;
