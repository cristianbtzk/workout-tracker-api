export abstract class UsersRepository {
  abstract create(name: string): Promise<void>;
}
