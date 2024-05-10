import React from 'react';
import './UserTable.css';

const UserTable = ({ users }) => {
    return (
      <div className="table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Maiden Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Username</th>
          <th>Password</th>
          <th>Birth Date</th>
          <th>Image</th>
          <th>Blood Group</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Eye Color</th>
          <th>Hair Color</th>
          <th>Hair Type</th>
          <th>Domain</th>
          <th>IP</th>
          <th>Address</th>
          <th>Mac Address</th>
          <th>University</th>
          <th>Bank Card Expire</th>
          <th>Bank Card Number</th>
          <th>Bank Card Type</th>
          <th>Bank Currency</th>
          <th>Bank IBAN</th>
          <th>Company Address</th>
          <th>Company Department</th>
          <th>Company Name</th>
          <th>Company Title</th>
          <th>EIN</th>
          <th>SSN</th>
          <th>User Agent</th>
          <th>Crypto Coin</th>
          <th>Crypto Wallet</th>
          <th>Crypto Network</th>
        </tr>
      </thead>
      <tbody>
      {users.map(user => (
            <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.maidenName}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.username}</td>
            <td>{user.password}</td>
            <td>{user.birthDate}</td>
            <td><img src={user.image} alt="User Avatar" /></td>
            <td>{user.bloodGroup}</td>
            <td>{user.height}</td>
            <td>{user.weight}</td>
            <td>{user.eyeColor}</td>
            <td>{user.hair.color}</td>
            <td>{user.hair.type}</td>
            <td>{user.domain}</td>
            <td>{user.ip}</td>
            <td>{user.address.address}, {user.address.city}, {user.address.state}, {user.address.postalCode}</td>
            <td>{user.macAddress}</td>
            <td>{user.university}</td>
            <td>{user.bank.cardExpire}</td>
            <td>{user.bank.cardNumber}</td>
            <td>{user.bank.cardType}</td>
            <td>{user.bank.currency}</td>
            <td>{user.bank.iban}</td>
            <td>{user.company.address.address}, {user.company.address.city}, {user.company.address.state}, {user.company.address.postalCode}</td>
            <td>{user.company.department}</td>
            <td>{user.company.name}</td>
            <td>{user.company.title}</td>
            <td>{user.ein}</td>
            <td>{user.ssn}</td>
            <td>{user.userAgent}</td>
            <td>{user.crypto.coin}</td>
            <td>{user.crypto.wallet}</td>
            <td>{user.crypto.network}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default UserTable;
