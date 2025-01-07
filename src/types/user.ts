import { z } from 'zod';

export interface NewUser {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
}

export const NewUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string().optional(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5, {message: 'Password too short'}),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
})