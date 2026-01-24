import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const brands = pgTable("brands", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  websiteUrl: text("website_url"),
});

// === BASE SCHEMAS ===
export const insertInquirySchema = createInsertSchema(inquiries).pick({
  name: true,
  email: true,
  message: true,
});

export const insertBrandSchema = createInsertSchema(brands).omit({
  id: true,
});

// === EXPLICIT API CONTRACT TYPES ===
export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;
export type Brand = typeof brands.$inferSelect;
export type InsertBrand = z.infer<typeof insertBrandSchema>;

export type CreateInquiryRequest = InsertInquiry;
export type BrandResponse = Brand;
