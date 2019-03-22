import faker from 'faker';

const User = {};

User.getDetails = () => ({
  username: faker.internet.userName(),
  fullname: faker.name.findName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.phoneNumber(),
  image: faker.image.people(),
  aboutMe: faker.lorem.paragraph()
});

User.getOrders = () => {};
User.placeOrder = () => {};

export default User;
