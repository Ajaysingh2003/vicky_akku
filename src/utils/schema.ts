import { LocationSchema } from "@/modules/workshop/procedures";
import z from "zod";

export const loginSchema = z.object({
  name: z.string().min(1, "name is required"),
  phone: z.string().min(10, "phone is required"),
});

// import { z } from "zod";

/* -------------------- CLASS -------------------- */
export const ClassSchema = z.object({
  id: z.string(),
  title: z.string(),
  AffiliateLinks: z.string().optional().nullable(),
  description: z.string(),
  thumbnail: z.string(),
  price: z.number(),
  City: z.string(),
  startDate: z.string().optional().nullable(),
  endDate: z.string().optional().nullable(),
  createdAt: z.string().optional().nullable(),
  isActive: z.boolean().optional().nullable(),
});

/* -------------------- USER SUBSCRIPTION -------------------- */
export const UserSubscriptionSchema = z.object({
  id: z.string(),
  userId: z.string(),
  classId: z.string(),
  status: z.enum(["ACTIVE", "INACTIVE", "CANCELLED"]).or(z.string()).optional().nullable(),
  createdAt: z.string().optional().nullable(),
  class: ClassSchema,
});

/* -------------------- WORKSHOP -------------------- */
export const WorkshopSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  thumbnail: z.string(),
  price: z.number(),
  eventDate: z.string().optional().nullable(),
  createdAt: z.string().optional().nullable(),
  locationId: z.string(),
  location: LocationSchema,
});

/* -------------------- ENROLLMENT -------------------- */
export const EnrollmentSchema = z.object({
  id: z.string(),
  userId: z.string(),
  workshopId: z.string(),
  createdAt: z.string().optional().nullable(),
  workshop: WorkshopSchema,
});

/* -------------------- TUTORIAL -------------------- */
export const TutorialSchema = z.object({
  id: z.string(),
  isPublished: z.boolean().optional().nullable(),
  createdAt: z.string().optional().nullable(),
  title: z.string(),
  thumbnail: z.string(),
  price: z.number(),
  description: z.string(),
});

/* -------------------- TUTORIAL ACCESS -------------------- */
export const TutorialAccessSchema = z.object({
  id: z.string(),
  createdAt: z.string().optional().nullable(),
  userId: z.string(),
  tutorialId: z.string(),
  tutorial: TutorialSchema,
});

/* -------------------- USER -------------------- */
export const UserSchema = z
  .object({
    id: z.string(),
    name: z.string().optional().nullable(),
    email: z.string().optional().nullable(),
    phone: z.string().optional().nullable(),
    role: z.enum(["ADMIN", "STUDENT"]).or(z.string()).optional().nullable(),
    avatar: z.string().optional().nullable(),
    createdAt: z.string().optional().nullable(),
    updatedAt: z.string().optional().nullable(),
    lastLoginAt: z.string().optional().nullable(),

    userSubscription: z.array(UserSubscriptionSchema).optional().nullable(),
    enrollments: z.array(EnrollmentSchema).optional().nullable(),
    tutorialAccess: z.array(TutorialAccessSchema).optional().nullable(),
  })
  .nullable();

/* -------------------- TYPE -------------------- */
export type User = z.infer<typeof UserSchema>;
