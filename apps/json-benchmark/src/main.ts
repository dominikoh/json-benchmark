import { User } from '@json-benchmark/data-protobuf';

const user = User.create({ name: 'John' });

console.log(user.name);