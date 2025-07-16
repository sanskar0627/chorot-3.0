import { z } from "zod";

// 1. ENUM – fixed roles
enum Role {
  ADMIN = "ADMIN",
  USER = "USER",
  GUEST = "GUEST"
}

// 2. INTERFACE – user structure
interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  isActive: boolean;
}

// 3. TYPE – using Pick + Partial + Readonly
type UserPreview = Readonly<Pick<User, "id" | "name">>;
type UserUpdate = Partial<Omit<User, "id">>; // update name/email/role etc.

const userPreview: UserPreview = {
  id: 1,
  name: "Sanskar"
};

// 4. Exclude – roles without guest
type ValidLoginRole = Exclude<Role, Role.GUEST>;

// 5. Record – mapping roles to permissions
type Permissions = Record<ValidLoginRole, string[]>;

const access: Permissions = {
  ADMIN: ["create", "edit", "delete"],
  USER: ["read", "comment"]
};

// 6. Map – dynamic product tracking
const productStock = new Map<number, string>();
productStock.set(101, "Laptop");
productStock.set(102, "Tablet");

// 7. Generic function – reusable logic
function identity<T>(value: T): T {
  return value;
}

const myName = identity<string>("Sanskar");

// 8. Array – filtered users by isActive
const allUsers: User[] = [
  { id: 1, name: "Sanskar", email: "a@mail.com", role: Role.ADMIN, isActive: true },
  { id: 2, name: "Amit", email: "b@mail.com", role: Role.USER, isActive: false },
  { id: 3, name: "Tanya", email: "c@mail.com", role: Role.USER, isActive: true }
];

const activeUsers = allUsers.filter((u) => u.isActive);

// 9. Zod schema + inference
const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  role: z.nativeEnum(Role),
  isActive: z.boolean()
});

type ZodUser = z.infer<typeof UserSchema>;

const result = UserSchema.safeParse({
  id: 5,
  name: "Neha",
  email: "sanskar@gmail.com",
  role: "ADMIN",
  isActive: true
});

if (!result.success) {
  console.log("❌ Zod validation failed:", result.error.format());
} else {
  const user: ZodUser = result.data;
  console.log("✅ Valid Zod user:", user);
}
